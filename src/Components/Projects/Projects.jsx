import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { fetchCollection } from "../../firebase/services/dbServices";
import "./projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchCollection("Major Projects").then((data) =>
      setProjects(data.reverse())
    );
  }, []);

  return (
    <section className="projects-sec" id="projects-sec">
      <div className="container">
        <h1>My Projects</h1>

        {projects.map((obj, i) => (
          <div className="project" key={i}>
            <img
              src={obj.imageUrl}
              alt="thumbnail"
              className={i % 2 && "order-2"}
            />

            <div>
              <p className="project-type">Major Project</p>
              <h2>{obj.projectName}</h2>
              <p className="desc">{obj.description}</p>
              <div className="techs">{obj.technologies}</div>
              <div className="flex gap-4">
                <a href={obj.githubLink} target="blank" aria-label="github">
                  <FaGithub className="links" size={22} />
                </a>
                <a href={obj.liveLink} target="blank" aria-label="live">
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
