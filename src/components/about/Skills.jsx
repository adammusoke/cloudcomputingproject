import React from "react";

const skillsContent = [
  { skillClass: "p95", skillPercent: "95", skillName: "JAVA" },
  { skillClass: "p95", skillPercent: "95", skillName: "SPRING" },
  { skillClass: "p95", skillPercent: "95", skillName: "SPRING BOOT" },
  { skillClass: "p98", skillPercent: "98", skillName: "AWS" },
  { skillClass: "p25", skillPercent: "65", skillName: "HTML" },
  { skillClass: "p89", skillPercent: "89", skillName: "JAVASCRIPT" },
  { skillClass: "p70", skillPercent: "70", skillName: "CSS" },
  { skillClass: "p66", skillPercent: "66", skillName: "PHP" },
  { skillClass: "p50", skillPercent: "70", skillName: "JQUERY" },
  { skillClass: "p75", skillPercent: "75", skillName: "REACT" },

];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
