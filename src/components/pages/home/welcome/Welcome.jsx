import React from "react";
import welcomeBg from "../../../../assets/image/welcomelogo.png";
import { FiSearch } from "react-icons/fi";
import logo from "../../../../assets/image/Inst.svg";
import { GoArrowUpRight } from "react-icons/go";

const Welcome = () => {
  return (
    <div
      id="welcome"
      style={{
        backgroundImage: `url(${welcomeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "contain",
      }}
    >
      <div className="container">
        <div className="welcome">
          <div className="welcome--nav">
            <h1>
              Welcome to the amazing <br /> Kyrgyzstan!
            </h1>
            <div className="welcome--nav__inp">
              <a>
                <FiSearch />
              </a>
              <input type="text" placeholder="Where to go  ?" />
              <h6>
                <GoArrowUpRight />
              </h6>
            </div>
            <p>
              Are you ready to embark on an exciting journey through the <br />
              stunning country of Central Asia? We are ready to help you plan{" "}
              <br />
              the perfect trip to Kyrgyzstan.
            </p>
          </div>
        </div>
        <div className="position">
          <h1>Kyrgyzstan</h1>
          <p>
            Kyrgyz Republic is a landlocked country located in the heart of{" "}
            <br />
            Central Asia. The capital is Bishkek. The mountainous region of{" "}
            <br /> the Tian Shan covers over 80% of the country. Kyrgyzstan is{" "}
            <br /> occasionally referred to as "the Switzerland of Central
            Asia". <br /> The country is divided into seven provinces, which are
            Batken, <br /> Chuy, Jalal-Abad, Issyk-Kul, Naryn, Osh and Talas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
