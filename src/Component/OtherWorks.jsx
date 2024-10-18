import React from "react";
import { FaRegFolder } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

export default function OtherWorks() {
  return (
    <section className="otherworks-sec">
      <h2 className="heading">My other works</h2>
      <br />
      <div className="container">
        <div className="other-works">


          <div className="card">
            <div className="flex-container links">
              <span className="flex-container">
                <FaRegFolder size={40} className="theme" />
              </span>
              <span className="flex-container">
                <a
                  href="https://github.com/Immortals430/Alarm-Clock-App"
                  target="bank"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://immortals430.github.io/Alarm-Clock-App/"
                  target="blank"
                >
                  <LuExternalLink />
                </a>
              </span>
            </div>
            <h3 className="heading">Alarm Clock App</h3>
            <p>
              Alarm Clock App created using HTML, CSS, and Javascript. User can
              set alarm which will actually ring.
            </p>
            <ul className="flex-container">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
          </div>


          <div className="card">
            <div className="flex-container links">
              <span className="flex-container">
                <FaRegFolder size={40} className="theme" />
              </span>
              <span className="flex-container">
                <a
                  href="https://github.com/Immortals430/Money-Tracker"
                  target="blank"
                >
                  <FaGithub />
                </a>
              </span>
            </div>
            <h3 className="heading">Money Tracker</h3>
            <p>
              Money Tracker is simple productivity app in which user can track
              his income and expenses
            </p>
            <ul className="flex-container">
              <li>Nodejs</li>
              <li>ejs</li>
              <li>MongoDB</li>
            </ul>
          </div>

          <div className="card">
            <div className="flex-container links">
              <span className="flex-container">
                <FaRegFolder size={40} className="theme" />
              </span>
              <span className="flex-container">
                <a
                  href="https://github.com/Immortals430/IMDb-clone"
                  target="blank"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://immortals430.github.io/IMDb-clone/"
                  target="blank"
                >
                  <LuExternalLink />
                </a>
              </span>
            </div>
            <h3 className="heading">IMDb Clone</h3>
            <p>
              IMDb Clone is simple movie search engine in which you can search
              movie details. You can also add it to watchlist.
            </p>
            <ul className="flex-container">
              <li>HTML</li>
              <li>CSS</li>
              <li>Javascript</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
