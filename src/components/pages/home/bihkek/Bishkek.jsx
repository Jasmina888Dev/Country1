import React from "react";
import bishBg from "../../../../assets/image/bishkekBg.png";

const Bishkek = () => {

  return (
    <div id="bishkek">
      <div className="container">
        <div className="bishkek">
          <h1 className="text1">Bishkek</h1>
          <img src={bishBg} alt="img" />
          <div className="bishkek--nav">
            <h1 className="text2">Bishkek</h1>
            <p>
              This is the capital of a picturesque mountainous <br /> country -
              Kyrgyzstan, from where tourists make trips to the <br />{" "}
              world-famous, crystal-clear Issyk-Kul and other natural <br />{" "}
              attractions of the Tien Shan. Framed by mountains, the city is
              rich <br /> in beautiful views, monumental monuments, parks and
              museum <br /> antiquities.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bishkek;
