import TiltBottom from "../ShapeDivider/Tilt/TiltBottom";
import "./hero.css";

export default function Head({githubLink}) {
  return (
    <section className="head-sec" id="head-sec">
      <div className="container">
        <p className="salutation ">Hi, my name is</p>
        <h1 className="mydetail">Vishal Kumar</h1>
        <h1 className="mydetail">a MERN stack developer.</h1>

        <p className="about">
          eager to take on new challenges and create impactful web applications.
          With a solid foundation in full-stack development, I aim to transform
          ideas into innovative solutions that elevate user experiences
        </p>

        <a
          href={githubLink}
          target="blank"
          className="check-work-btn"
        >
          Checkout my work
        </a>
      </div>
      <TiltBottom />
    </section>
  );
}
