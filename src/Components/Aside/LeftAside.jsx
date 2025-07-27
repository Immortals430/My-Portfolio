import { TbWorldWww } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import gsap from "gsap"
import { useGSAP } from "@gsap/react";
import "./leftaside.css";



export default function LeftAside({ userDetails }) {

  useGSAP(() => { 
    gsap.to(".left-aside-sec", {
      y: 500,
      scrollTrigger: {
        trigger: ".projects-sec",
        start: "center bottom",
        scrub: true,    
      }
    })
  })

  return (
    <>
    <aside className="left-aside-sec">
      <a href={userDetails.githubLink?.stringValue} target="blank" aria-label="github">
        <LuGithub />
      </a>

      <a href={userDetails.linkedinLink?.stringValue} target="blank" aria-label="linkedin">
        <FaLinkedinIn />
      </a>

      <a href={`mailto:${userDetails.email?.stringValue}`} aria-label="email">
        <MdOutlineMail />
      </a>

      <a href="/" aria-label="portfolio">
        <TbWorldWww />
      </a>

      <div className="line"></div>
    </aside>

    </>
  );
}
