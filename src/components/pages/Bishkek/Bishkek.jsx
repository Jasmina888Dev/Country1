import React, { useEffect, useState } from "react";
import bishkek from "../../../assets/image/bishkek.png";
import axios from "axios";
import { FaArrowRightLong } from "react-icons/fa6";

const Bishkek = () => {
  const [attraction, setAttraction] = useState([]);

  async function addAttraction() {
    let res = await axios(`http://13.60.97.160/en/home/attraction/`);
    let { data } = res;
    setAttraction(data);
  }
  console.log(attraction, "999");

  useEffect(() => {
    addAttraction();
  }, []);

  return (
    <div id="bishkek">
      <div className="container">
        <div className="bishkek">
          <div className="bishkek--block">
            <img src={bishkek} alt="" />
            <div className="bisshkek--block__text">
              <h1>Bishkek</h1>
              <p>
                This is the capital of a picturesque mountainous <br /> country
                - Kyrgyzstan, from where tourists make trips to the <br />
                world-famous, crystal-clear Issyk-Kul and other natural <br />
                attractions of the Tien Shan. Framed by mountains, the city is
                rich <br /> in beautiful views, monumental monuments, parks and
                museum <br /> antiquities.
              </p>
            </div>
          </div>
          <div className="bishkek--cards">
            <h1>Attractions</h1>
            <div className="bishkek--cards__block">
              {attraction.slice(0, 6).map((el) => (
                <div className="bishkek--cards__block--card">
                  <img
                    src="https://icons.veryicon.com/png/o/miscellaneous/fine-fillet-icon/heart-alt-1.png"
                    alt="heart"
                    className="heart"
                  />
                  <img src={el.image1} alt={el.title} width={350} />
                  <h2>{el.title}</h2>
                  <p>{el.description.slice(0, 270)}</p>
                  <a>
                    <FaArrowRightLong />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bishkek;
