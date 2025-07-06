import { useGSAP } from "@gsap/react";
import gsap from "gsap"
import "./rightaside.css";

export default function RightAside({ email }) {

  useGSAP(() => { 
    gsap.to(".right-aside-sec", {
      y: -500,
      scrollTrigger: {
        trigger: ".projects-sec",
        start: "top top",
        scrub: true,    
      }
    })
  })

  return (
    <aside className="right-aside-sec">
      <div className="line"></div>

      <a href={`mailto:${email}`} className="email">
        {email}
      </a>
    </aside>
  );
}
