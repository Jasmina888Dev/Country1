import React from "react";
import welcomeBg from "../../../../assets/image/welcomelogo.png";
import { FiSearch } from "react-icons/fi";
import { CgArrowTopRightO } from "react-icons/cg";

const Welcome = () => {
  return (
    <div
      id="welcome"
      style={{
        backgroundImage: `url(${welcomeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
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
            <a>
              <CgArrowTopRightO />
            </a>
            </div>
            <p>
              Are you ready to embark on an exciting journey through the <br />
              stunning country of Central Asia? We are ready to help you plan{" "}
              <br />
              the perfect trip to Kyrgyzstan.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
