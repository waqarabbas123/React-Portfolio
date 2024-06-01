import React from "react";
import "./Home.css";
import { FaFacebookF } from "react-icons/fa6";
import { FiTwitter } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";

function Home() {
  return (
    <>
      <div>
        <section className="Home">
          <h2>
            Hi, I am <span>WAQAR ABBAS</span>
          </h2>
          <p>
            I am a frontend web developer. I can provide clean code and pixel
            perfect design. I also make website more & more interactive with web
            animations.
          </p>
          <div className="iconBox">
            <div className="icons">
              <a href="">
                <FaFacebookF />
              </a>
            </div>
            <div className="icons">
              <a href="">
                {" "}
                <FiTwitter />
              </a>
            </div>
            <div className="icons">
              <a href="">
                <FaGithub />
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
