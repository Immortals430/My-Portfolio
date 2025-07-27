import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import "./projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);
 
  useEffect(() => {
    fetch("https://firestore.googleapis.com/v1/projects/portfolio-ae186/databases/(default)/documents/Major+Projects")
    .then(res => res.json())
    .then(data => setProjects(data.documents.reverse()))
    .catch(err => console.log(err))
  }, []);

  return (
    <section className="projects-sec" id="projects-sec">
      <div className="container">
        <h1>My Projects</h1>

        {projects.map(({fields}, i) => (
          <div className="project" key={i}>
            <div className={`img-container ${i % 2 && "order-2"}`}>
              <img src={fields.imageUrl?.stringValue} alt="thumbnail" />
            </div>

            <div>
              <p className="project-type">Major Project</p>
              <h2>{fields.projectName?.stringValue}</h2>
              <p className="desc">{fields.description?.stringValue}</p>
              <div className="techs">{fields.technologies?.stringValue}</div>
              <div className="links-container">
                <a href={fields.githubLink.stringValue} target="blank" aria-label="github">
                  <FaGithub className="links" size={22} />
                </a>
                <a href={fields.liveLink.stringValue} target="blank" aria-label="live">
                  <FiExternalLink className="links" size={22} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
