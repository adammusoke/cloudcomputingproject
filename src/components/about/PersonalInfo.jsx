import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Adam" },
  { meta: "last name", metaInfo: "Musoke" },
  { meta: "Age", metaInfo: "31 Years" },
  { meta: "Nationality", metaInfo: "African" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "United States" },
  { meta: "phone", metaInfo: "" },
  { meta: "Email", metaInfo: "dmmusoke@gmail.com" },

  { meta: "langages", metaInfo: "English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
