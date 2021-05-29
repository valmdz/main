import React from "react";
import "./Project.css";
import * as Projects from "./Projects.js";
import Github from "../../assets/icons/github.svg";
import Website from "../../assets/icons/website.svg";

// import Retrato from "../../assets/images/projects/project-";

export const Project = () => {
  return (
    <>
      <div className="projects-group">
        {Projects.projects.projects.map((p) => (
          <div className="project-element" key={console.log(p.id + p.title)}>
            <h1>{p.title}</h1>
            <img src={p.image} alt="project preview" />
            <h2>{p.about}</h2>
            <h2>Year: {p.year}</h2>
            <h2>Setting: {p.setting}</h2>

            {/* {
            p.keywords.forEach(element => console.log(element))
            } */}
            <div className="icons-link">
              {p.links.website && (
                <a href={`${p.links.website}`}>
                  <img src={Website} alt="icon" className="icon" />
                </a>
              )}

              {p.links.github && (
                <a href={`${p.links.github}`}>
                  <img src={Github} alt="icon" className="icon" />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
