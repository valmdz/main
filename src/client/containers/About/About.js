import React from "react";
import Portrait from "../../assets/images/Valentina.png";
import CvLink from "../../assets/images/SeeCv-link-01.svg";
import { ResumedCv } from "../../components/ResumedCv/ResumedCv";
import "./About.css";

export const About = () => {
  return (
    <div className="about">
      <img src={Portrait} alt="portrait" className="portrait-valentina" />
      <h2 className="content">
        I am web developer/architect based in Copenhagen, Denmark.
        <br /> I did my bachelor's in Architecture at{" "}
        <a
          href="https://tec.mx/es/estudios-creativos/arquitecto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tec de Monterrey
        </a>{" "}
        , where I took a year of exchange in Finland at the{" "}
        <a
          href="https://www.oulu.fi/architecture/"
          target="_blank"
          rel="noopener noreferrer"
        >
          University of Oulu
        </a>
        . I graduated from my master's in sustainable Architecture from{" "}
        <a
          href="https://www.chalmers.se/en/education/programmes/masters-info/Pages/Architecture-and-Planning-Beyond-Sustainability.aspx"
          target="_blank"
          rel="noopener noreferrer"
        >
          Chalmers University of Technology
        </a>
        . <br /> When I moved to Denmark I took the challenge to learn web
        development by taking online courses in HTML, CSS, JS and UX/UI. The
        more I learned about IT, the more I realized I wanted to learn more, so
        I joined a web development bootcamp offered by an amazing organization
        called{" "}
        <a
          href="https://www.hackyourfuture.dk/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hack your Future.
        </a>{" "}
        <br />
      </h2>
      <h2 className="content">
        {" "}
        My combination of skills allows me to have a more holistic view of
        processes and work at different stages of projects. I love co-creating
        so if you want to collaborate drop me a line at →{" "}
        <a href="mailto:valentina.mdz@gmail.com">valentina.mdz@gmail.com</a>
      </h2>
      <a
        href="https://drive.google.com/file/d/1-biFp_9_1kSKhDjHquzrZresdX5RHTlH/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="circle-link"
      >
        <img src={CvLink} alt="circle" />
      </a>
      <ResumedCv />
      <></>
    </div>
  );
};
