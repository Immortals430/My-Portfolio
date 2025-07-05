import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { DiMongodb } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
import { SiTailwindcss } from "react-icons/si";
import aboutme from "../../assets/about-me.png";
import BottomWave from "../ShapeDivider/Wave/BottomWave";
import "./about.css";

export default function About() {
  return (
    <section className="about-sec" id="about-sec">
      <div className="container">
        <h1>About Me</h1>

        <div className="mydetail">
          <div className="sm:w-9/12 ">
            <p>
              Hello! My name is Vishal Kumar, and I am a MERN stack developer.
              My interest in web development started back in 2020 when I
              explored some free programming resources on the internet. Since
              then, I have been learning various tech stacks related to web
              development.
            </p>

            <p>
              Beyond just coding, I’m always exploring new technologies and
              keeping up with the latest trends in web development to ensure
              that my work stays relevant and innovative. As a self-motivated
              developer, I love collaborating with teams and contributing to
              projects that make a real-world impact.
            </p>

            <p>Here are a few technologies I’ve been working with recently:</p>
          </div>
          <div className="max-w-[250px] ">
            <img src={aboutme} alt="about me" />
          </div>
        </div>

        <div className="skills ">
          <div>
            <FaHtml5 color="#e13c2e" />
            <span>HTML</span>
          </div>
          <div>
            <FaCss3Alt color="#254bdc" />
            <span>CSS</span>
          </div>
          <div>
            <TbBrandJavascript color="#f8e026" />
            <span>JavaScript</span>
          </div>
          <div>
            <IoLogoNodejs color="#83be09" />
            <span>Nodejs</span>
          </div>
          <div>
            <SiExpress color="black" />
            <span>Expressjs</span>
          </div>
          <div>
            <DiMongodb color="#199556" />
            <span>MongoDB</span>
          </div>
          <div>
            <IoLogoFirebase color="#ec7e1f" />
            <span>Firebase</span>
          </div>
          <div>
            <FaReact color="#57c4db" />
            <span>Reactjs</span>
          </div>
          <div>
            <SiRedux color="#7247ba" />
            <span>Redux, Redux Toolkit</span>
          </div>
          <div>
            <FaBootstrap color="#7610f0" />
            <span>Bootstrap</span>
          </div>
          <div>
            <SiTailwindcss color="#57c4db" />
            <span>Tailwind CSS</span>
          </div>
          <div>
            <FaSass color="#ca6698" />
            <span>SASS</span>
          </div>
        </div>
      </div>

      <BottomWave />
    </section>
  );
}
