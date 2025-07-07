import "./navbar.css";

export default function Navbar({ resumeLink }) {
  return (
    <nav className="nav-sec">
      <div className="nav-left-sec">
        <a href="/">VK</a>
      </div>
      <div className="nav-right-sec  ">
        <a href="#about-sec">About</a>
        <a href="#projects-sec">Project </a>
        <a href="#contact-sec">Contact</a>
        <a href={resumeLink} target="blank" className="resume">
          Resume
        </a>
      </div>
    </nav>
  );
}
