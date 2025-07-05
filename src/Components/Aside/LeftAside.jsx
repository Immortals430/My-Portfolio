import { TbWorldWww } from "react-icons/tb";
import { FaLinkedinIn } from "react-icons/fa6";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMail } from "react-icons/md";
import "./leftaside.css";

export default function LeftAside({ userDetails }) {
  return (
    <aside className="left-sec">
      <a href={userDetails.githubLink} target="blank" aria-label="github">
        <LuGithub />
      </a>

      <a href={userDetails.linkedinLink} target="blank" aria-label="linkedin">
        <FaLinkedinIn />
      </a>

      <a href={`mailto:${userDetails.email}`} aria-label="email">
        <MdOutlineMail />
      </a>

      <a href="/" aria-label="portfolio">
        <TbWorldWww />
      </a>

      <div className="line"></div>
    </aside>
  );
}
