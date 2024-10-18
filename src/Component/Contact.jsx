import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";

export default function Contact() {
  return (
    <section className="contact-sec" id="contact">
      <h1 className="heading">Follow me here</h1>
      <br />
      <br />
      <div className="container">
        <div className="flex-container contact">
          <a href="https://github.com/Immortals430" target="blank">
            <span>
              <FaGithub />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/vishal-kumar-788326273/" target="blank">
          <span>
            <FaLinkedin />
          </span>
          </a>
          <a href="mailto:vishalkumar619430@gmail.com">
          <span>
            <IoMdMailOpen />
          </span>
          </a>
          <span>
            <TbWorldWww />
          </span>
        </div>
      </div>
    </section>
  );
}
