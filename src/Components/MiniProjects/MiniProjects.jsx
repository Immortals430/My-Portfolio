import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import TopWave from "../ShapeDivider/Wave/TopWave";
import { fetchCollection } from "../../firebase/services/dbServices";
import "./miniprojects.css";

export default function MiniProjects() {
  const [miniProjects, setMiniProjects] = useState([]);

  useEffect(() => {
    fetchCollection("Mini Projects").then((data) => setMiniProjects(data));
  }, []);

  return (
    <section className="miniprojects-sec ">
      <TopWave />
      <div className="container">
        <h1>My Other Works</h1>

        <div className="grid">
          {miniProjects.map((obj, i) => (
            <div className="card" href={obj.liveLink} key={i}>
              <div className="img-container">
                <img src={obj.imageUrl} alt="thumbnail" />
              </div>

              <div className="details">
                <h3>{obj.projectName}</h3>
                <p>{obj.description}</p>

                <div className="links">
                  <span>Links:</span>
                  <a href={obj.githubLink} target="blank" aria-label="github">
                    <FaGithub size={22} />
                  </a>
                  {obj.liveLink && (
                    <a href={obj.liveLink} target="blank" aria-label="live">
                      <FiExternalLink size={22} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
