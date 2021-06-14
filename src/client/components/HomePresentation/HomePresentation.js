import React from "react";
import Retrato from "../../assets/images/autoretrato.svg";
import "./HomePresentation.css";

export const HomePresentation = () => {
  return (
    <>
      <div className="home-presentation">
        I am <span className="hover-text">Valentina,</span>{" "}
        <div className="hover-image">
          <img src={Retrato} alt="portrait" loading="lazy" />
        </div>
        <span className="wavy">a creative web developer and designer</span>. I
        am interested in building <span className="font-change">beautiful</span>
        , meaningful and <span className="font-change">well crafted</span>{" "}
        projects with
        <span className="color-change"> inspiring people.</span>
        <br />
        <a href="/projects" className="projects-link">
          See projects
        </a>
      </div>
    </>
  );
};
