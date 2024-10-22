import React from "react";
import aboutme from "../assets/about-me.png";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { FaNode } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { IoLogoFirebase } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io5";
export default function About() {
  return (
    <section className="about-sec" id="about">
            <h2 className="heading">About Me</h2>
            <br />
      <div className="container">
        <div className="flex-container">
          <div className="aboutme-details">
            <p>
              Hello! My name is Vishal Kumar, and I am a{" "}
              <span>MERN stack developer. </span>
              My interest in web development started back in 2020 when I
              explored some free programming resources on the internet. Since
              then, I have been learning various tech stacks related to web
              development.
            </p>
            <br />
            <p>
              Beyond just coding, I’m always exploring new technologies and
              keeping up with the latest trends in web development to ensure
              that my work stays relevant and innovative. As a self-motivated
              developer, I love collaborating with teams and contributing to
              projects that make a real-world impact.
            </p>
            <br />
            <p>Here are a few technologies I’ve been working with recently:</p>
            <br />
          </div>
          <div className="aboutme-img">
            <img src={aboutme} alt="about me" />
          </div>
        </div>
        <div className="flex-container skills">
          <div>
            <span>
              <FaHtml5 color="#e13c2e" />
            </span>
            <span> HTML</span>
          </div>
          <div>
            <span>
              <FaCss3Alt color="#254bdc" />
            </span>
            <span>CSS</span>
          </div>
          <div>
            <span>
              <TbBrandJavascript color="#f8e026" />
            </span>
            <span>JavaScript</span>
          </div>
          <div>
            <span>
              <IoLogoNodejs color="#83be09" />
            </span>
            <span>Nodejs</span>
          </div>
          <div>
            <span>
              <SiExpress color="white" />
            </span>
            <span>Expressjs</span>
          </div>
          <div>
            <span>
              <DiMongodb color="#199556" />
            </span>
            <span>MongoDB</span>
          </div>
          <div>
            <span>
              <IoLogoFirebase color="#ec7e1f" />
            </span>
            <span>Firebase</span>
          </div>
          <div>
            <span>
              <FaReact color="#57c4db" />
            </span>
            <span>Reactjs</span>
          </div>
          <div>
            <span>
              <SiRedux color="#7247ba" />
            </span>
            <span>Redux, Redux Toolkit</span>
          </div>

          <div>
            <span>
              <FaBootstrap color="#7610f0" />
            </span>
            <span>Bootstrap</span>
          </div>
          <div>
            <span>
              <FaSass color="#ca6698" />
            </span>
            <span>SASS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
