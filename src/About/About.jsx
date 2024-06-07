import "./About.css";
import aboutImg from "/aboutImg.jpg";
function About() {
  return (
    <>
      <div className="outer">
        <div className="frist">
          <h3>about me</h3>
          <div className="underline">
            <div className="innerline">{/* for underline  */}</div>
          </div>
        </div>
        {/* ---------------------- */}
        <div className="second">
          <div className="image">
            <img src={aboutImg} alt="about" />
          </div>
          {/* -------content-------- */}
          <div className="content">
            <h3>
              I am <span>Waqar Abbas</span>
            </h3>
            <p id="intro">
              I am a frontend web developer. I can provide clean code and pixel
              perfect design. I also make website more & more interactive with
              web animations.
            </p>
            <div className="data">
              <div className="keys">
                <p>Full Name</p>
                <p>Age</p>
                <p>Nationality</p>
                <p>Languages</p>
                <p>Address</p>
                <p>Freelance</p>
              </div>
              <div className="value">
                <p>
                  <span>: </span> Waqar Abbas
                </p>
                <p>
                  <span>: </span> 20
                </p>
                <p>
                  <span>: </span> Pakistani
                </p>
                <p>
                  <span>: </span> Urdu,English
                </p>
                <p>
                  <span>: </span> Sakwar,gilgit-baltistan
                </p>
                <p>
                  <span>: </span> Available
                </p>
              </div>
            </div>
            <button className="Btn1">Download cv</button>
          </div>
        </div>
        <div className="box">
          
        </div>
      </div>
    </>
  );
}

export default About;
