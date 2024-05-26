import React from "react";

const educationContent = [
  {
    year: "2018",
    degree: "biomedical ENGINEERING DEGREE",
    institute: "MUK",
    details: `  I graduated with an Engineering degree from Makerere University, 
    where I developed a solid understanding of both the theoretical concepts and 
    practical applications of software development, including courses such as Advanced Algorithms 
    and Data Structures, Web Application Development, Database Systems, Software Engineering Principles, 
    Object-Oriented Programming, Computer Networks, Operating Systems, Mobile App Development,
     Artificial Intelligence, and Cybersecurity Fundamentals.`,
  },
  {
    year: "2022-To present",
    degree: "MSc Computer Science",
    institute: "MIU",
    details: `Currently pursuing my degree in Computer Science has been like holding the key to the 
    digital universe. I've unlocked the secrets of algorithms, mastered the art of coding, and 
    architected the future with cutting-edge technologies. This journey through the realms of 
    artificial intelligence, cybersecurity,
     and data science is equipping me to innovate and shape the world of tomorrow`,
  },

];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
