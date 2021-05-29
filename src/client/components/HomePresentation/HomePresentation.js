import React from "react";
import Retrato from "../../assets/images/autoretrato.png";
import "./HomePresentation.css";

const skills = [
  "React",
  "JS",
  "CSS",
  "HTML",
  "NodeJS",
  "SQL",
  "Storybook",
  "Postman",
  "Knex",
  "Git",
  "Storybook",
  "Adobe XD",
  "Figma",
  "Photoshop",
  "Illustrator",
  "InDesign",
];

export const HomePresentation = () => {
  return (
    <>
      <div className="home-presentation">
        Hola! I am <span className="hover-text">Valentina,</span>{" "}
        <div className="hover-image">
          <img src={Retrato} alt="portrait" />
        </div>
        <span className="wavy">a creative web developer and designer</span>. I
        am interested in building meaningful and{" "}
        <span className="font-change">well crafted</span> projects with
        <span className="color-change"> inspiring people.</span>

      </div>
      {/* <ul className="skills-home">
        {skills.map((skill) => (
          <li id={skill}>{skill}</li>
        ))}
      </ul> */}
    </>
  );
};
