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
              <a href="https://www.facebook.com/husune.waqar/" target="_blank">
                <FaFacebookF />
              </a>
            </div>
            <div className="icons">
              <a href="https:www.twitter.com/@waqarabbas101/" target="_blank">
                <FiTwitter />
              </a>
            </div>
            <div className="icons">
              <a href="https://github.com/waqarabbas123" target="_blank">
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
