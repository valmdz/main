import React from "react";
import "./Project.css";
import * as Projects from "./Projects.js";
import Github from "../../assets/icons/github.svg";
import Website from "../../assets/icons/website.svg";
import Process from "../../assets/icons/process.svg";
import Figma from "../../assets/icons/figma.svg";

export const Project = () => {
  return (
    <>
      <div className="projects-group">
        {Projects.projects.projects.map((p) => (
          <div className="project-element" key={p.id}>
            <img src={p.image} alt="project preview" loading="lazy" />

            <div>
              <h1>{p.title}</h1>
              <h2>{p.about}</h2>
              <h2>
                <span className="highlight">Year: </span> {p.year}
              </h2>
              <h2>
                <span className="highlight">Setting:</span> {p.setting}
              </h2>
              <h2 className="keywords">
                <span className="highlight">Stack:</span>{" "}
                {p.keywords.map((keyword) => " " + keyword + " / ")}
              </h2>
              <div className="icons-link">
                {p.links.website && (
                  <a
                    href={p.links.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Website"
                  >
                    <img src={Website} alt="icon" className="icon" />
                  </a>
                )}

                {p.links.github && (
                  <a
                    href={p.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github"
                  >
                    <img src={Github} alt="icon" className="icon" />
                  </a>
                )}

                {p.links.process && (
                  <a
                    href={p.links.process}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Process"
                  >
                    <img src={Process} alt="icon" className="icon" />
                  </a>
                )}
                {p.links.figma && (
                  <a
                    href={p.links.figma}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Figma"
                  >
                    <img src={Figma} alt="icon" className="icon" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
