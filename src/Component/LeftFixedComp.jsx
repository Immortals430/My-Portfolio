import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";

import { FaLinkedinIn } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";

export default function LeftFixedComp() {
  return (
    <aside className="left-sec">
      <div>
        <a href="https://github.com/Immortals430" target="blank">
          <LuGithub />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/vishal-kumar-788326273/"
          target="blank"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a href="mailto:vishalkumar619430@gmail.com">
          <MdOutlineMail />
        </a>
      </div>
      <div>
        <TbWorldWww />
      </div>
      <div className="line"></div>
    </aside>
  );
}
