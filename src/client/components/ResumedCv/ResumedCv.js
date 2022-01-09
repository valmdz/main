import React from "react";
import "./ResumedCv.css";
const skills = ['React', 'JS', 'CSS', 'HTML', 'NodeJS', 'SQL', 'Storybook', 'Postman', 'Knex', 'Git', 'Storybook', 'Adobe XD', 'Figma', 'Photoshop', 'Illustrator', 'InDesign', 'After Effects']

export const ResumedCv = () => {
  return (
    <div className="cv">
      <h1>Skills</h1>
      <ul className="cv-list cv-grid">
        {skills.map(skill => <li id={skill}>{skill}</li>)}
      </ul>

      <h1>Experience</h1>
      <ul className="cv-list">
      <li>
          <span className="year">August 2021 - now </span>Digital product design intern{" "}
          <span className="at">ᐳ </span>
          <span>TrackMan </span>
        </li>
        <li>
          <span className="year">2020 - now </span>Web designer{" "}
          <span className="at">ᐳ </span>
          <span>Freelancer </span>
        </li>
        <li>
          <span className="year">2020 - 2021</span>Sales advisor{" "}
          <span className="at">ᐳ </span>
          <span>Uniqlo Denmark </span>
        </li>
        <li>
          <span className="year">2018 </span>Architect collaborator{" "}
          <span className="at">ᐳ </span>
          <span>MAP urban strategies </span>
        </li>
        <li>
          <span className="year">2016 - 2017 </span>Architect{" "}
          <span className="at">ᐳ </span>
          <span> Freelancer </span>
        </li>
        <li>
          <span className="year">2014 - 2015 </span> Ciudad de Truque{" "}
          <span className="at">ᐳ </span>
          <span> Junior Architect </span>
        </li>
        <li>
          <span className="year">2014 </span>Tarq Arquitectos{" "}
          <span className="at">ᐳ </span>
          <span> Junior Architect</span>
        </li>
        <li>
          <span className="year">2013 </span>
          Tenate studio <span className="at">ᐳ </span>
          <span> Junior Architect </span>
        </li>
      </ul>

      <h1>Education</h1>
      <ul className="cv-list">
        <li >
          <span className="year">2020 - 2021 </span> Web development bootcamp{" "}
          <span className="at">ᐳ </span>
          <span>Hack your Future </span>
        </li>
        <li>
          <span className="year">2020 - 2021 </span>UX design{" "}
          <span className="at">ᐳ </span>
          <span>ReDi school </span>
        </li>
        <li>
          <span className="year">2016 - 2018 </span> Msc Design for Sustainable
          Development <span className="at">ᐳ </span>
          <span>Chalmers University of Technology </span>
        </li>
        <li>
          <span className="year">2013 - 2014 </span> Year of exchange program in
          Architecture <span className="at">ᐳ </span>
          <span>University of Oulu </span>
        </li>
        <li>
          <span className="year">2010 - 2015 </span>Bachelor in Architecture{" "}
          <span className="at">ᐳ </span>
          <span>Tec de Monterrey </span>
        </li>
      </ul>

      <h1>Extra courses</h1>
      <ul className="cv-list">
        <li>
          <span className="year">ongoing </span>Learning Chrome Web Developer
          Tools
          <span className="at">ᐳ </span>
          <span>LinkedIn Education </span>
        </li>
        <li>
          <span className="year">2021 </span>CSS Animation
          <span className="at">ᐳ </span>
          <span>LinkedIn Education </span>
        </li>
        <li>
          <span className="year">2021 </span>Learning typescript
          <span className="at">ᐳ </span>
          <span> LinkedIn Education </span>
        </li>
        <li>
          <span className="year">2020 </span>Visual Elements of User Interface
          Design<span className="at">ᐳ </span>
          <span> California Institute of Arts (CalArts) </span>
        </li>
        <li>
          <span className="year">2015 </span> Fundamentals of Graphic Design
          <span className="at">ᐳ </span>
          <span>California Institute of Arts (CalArts) </span>
        </li>
        <li>
          <span className="year">2015 </span> Introduction to Typography
          <span className="at">ᐳ </span>
          <span>California Institute of Arts (CalArts) </span>
        </li>
      </ul>
    </div>
  );
};
