import React from "react";

const experienceContent = [
  {
    year: "   December 2023 - To present",
    position: " Software Engineer",
    compnayName: "Scale AI",
    details: `  Designed and developed a highly functional Artificial Intelligence models for Open AI (Chat GPT Improvements).
                `,
  },
 
  {
    year: "2018 - 2021",
    position: "Full-Stack Java Developer",
    compnayName: "Shenuems Biomedical",
    details: `Built microservice based applications.
     Developed user-friendly web applications using Java, Spring, MySQL, and React.js, resulting in a notable boost in user engagement.
    `,
  },
];
const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
