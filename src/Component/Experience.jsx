import React, { useState } from "react";

export default function Experience() {
  const [company, setCompany] = useState("codingNinjas");

  return (
    <section className="experience-sec" id="experience">
      <div className="container">
        <h2 className="heading">My Experience</h2>
        <br />
        <br />
        <div className="flex-container ">
          <div className="company-list">
            <div className={company === "codingNinjas" ? "theme" : ""}>
              Coding&nbsp;Ninjas
            </div>
            
            <div className="scrollbar">
              <div></div>
            </div>
          </div>

          <a href="https://drive.google.com/file/d/1En-4vIecVzcsncaS3s8OgThOUR1qsFSi/view" target="blank">
          <div className="experience-detail">
            <h3 className="heading">
              Teaching Assistant <span className="theme">@Coding Ninjas</span>
            </h3>
            <p>Sep 2023 - August 2023</p>
            <p>
              Remote(<i>Internship</i>)
            </p>
            <br />

            <div>
              As a teaching assistant, I have a opportunity to assist and guide
              students by addressing their curriculum-related queries.
              Throughout this internship, I gained a strong understanding of the
              subject matter and developed excellent communication and
              interpersonal skills.
            </div>
            <br />
            <ul>
              <li>
                Resolved over 2000 doubts of students and provided guidance on
                various topics as a Teaching Assistant.
              </li>
              <li>
                Evaluated 76 student projects, offering constructive feedback
                to enhance their learning experience.
              </li>
              <li>
                Maintained a high-quality learning environment, contributing to
                an optimized rating of 4.8.
              </li>
            </ul>
          </div>
          </a>
        </div>


        
      </div>
    </section>
  );
}
