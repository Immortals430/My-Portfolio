import { useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import TopWave from "../ShapeDivider/Wave/TopWave";
import "./miniprojects.css";

export default function MiniProjects() {
  const [miniProjects, setMiniProjects] = useState([]);

  useEffect(() => {
  fetch("https://firestore.googleapis.com/v1/projects/portfolio-ae186/databases/(default)/documents/Mini+Projects")
  .then(res => res.json())
  .then(data => setMiniProjects(data.documents))
  .catch(err => console.log(err))
}, []);

  return (
    <section className="miniprojects-sec ">
      <TopWave />
      <div className="container">
        <h1>My Other Works</h1>

        <div className="grid">
          {miniProjects.map(({fields}, i) => (
            <div className="card" key={i}>
              <div className="img-container">
                <img src={fields.imageUrl.stringValue} alt="thumbnail" />
              </div>

              <div className="details">
                <h3>{fields.projectName.stringValue}</h3>
                <p>{fields.description.stringValue}</p>

                <div className="links">
                  <span>Links:</span>
                  <a href={fields.githubLink.stringValue} target="blank" >
                    <FaGithub size={22} />
                  </a>
                  {fields.liveLink.stringValue && (
                    <a href={fields.liveLink.stringValue} target="blank" >
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
