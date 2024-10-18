import React from "react";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import hangouts from "../assets/hangouts-thumb.png";
import urbandrendz from "../assets/urbantrendz-thumb.png";

export default function MajorProject() {
  return (
    <section className="myworks-sec" id="my-work">
      <h2 className="heading">My works</h2>
      <br />
      <div className="container">
        <div className="flex-container work-container">
          <div className="work-thumb">
            <img src={hangouts} alt="" />
          </div>
          <div className="work-details-container">
            <div className="work-details">
              <p className="theme">Major Project</p>
              <h3 className="heading">Social Media Hangouts</h3>
              <div className="about">
                Hangouts is a <span className="theme">social media app</span>.
                It allows users to create profiles, connect with friends, and
                post updates. It also allows us to interact through chats,
                comments and likes.
              </div>
              <ul>
                <li>Javascript</li>
                <li>Nodejs</li>
                <li>Reactjs</li>
                <li>MongoDB</li>
              </ul>
              <div className="links">
                <a
                  href="https://github.com/Immortals430/Social-Media-Hangouts"
                  target="blank"
                >
                  <FaGithub />
                </a>
                <a href="https://hangouts.pages.dev" target="blank">
                  <LuExternalLink />
                </a>
              </div>
            </div>
          </div>
        </div>

        <br />

        <div className="flex-container work-container">
          <div className="work-details-container">
            <div className="work-details even">
              <p className="theme">Major Project</p>
              <h3 className="heading">Ecomm Urban Trendz</h3>
              <div className="about">
                Urban Trendz is an{" "}
                <span className="theme">ecommerce website</span> created using
                Reactjs and Firebase. Basic features of this project are user
                authentication, buy product, filter product etc.
              </div>
              <ul>
                <li>Javascript</li>
                <li>Nodejs</li>
                <li>Reactjs</li>
                <li>Firebase</li>
              </ul>
              <div className="links">
                <a href="https://github.com/Immortals430/Ecomm-Urban-Trendz" target="blank">
                <FaGithub />
                </a>
                <a href="https://urbantrendz.pages.dev" target="blank">
                <LuExternalLink />
                </a>
                
              </div>
            </div>
          </div>

          <div className="work-thumb">
            <img src={urbandrendz} alt="urban trendz" />
          </div>
        </div>
      </div>
    </section>
  );
}
