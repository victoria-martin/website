import React, { useState, useEffect } from "react";
import { Document } from "react-pdf";
import EDCUATION, { EDUCATION_EN, EDUCATION_FR, WORK_EXP } from "../../constants/resume.js";
import { v4 as uuid } from "uuid";
import { Tech } from "./Tech.js";

const Row = ({ year, duration, entity, city, description }) => {
  return (
    <>
      <div className="resume__row">
        <div className="resume__row__start">
          <span>{year}</span>
          <span>{duration}</span>
        </div>
        <div className="resume__row__end">
          <span>
            {entity} - {city}
          </span>
          <span>{description}</span>
        </div>
      </div>
    </>
  );
};

const Section = ({ text }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (text === "education") {
      setData(EDUCATION_EN);
    } else if (text === "work experience") setData(WORK_EXP);
  }, [text]);

  return (
    <>
      <h3>{text}</h3>

      {text === "education" || text === "work experience" ? (
        data.map((e, n) => (
          <Row
            year={e.year}
            duration={e.duration}
            entity={e.entity}
            city={e.city}
            description={e.description}
            key={uuid()}
          />
        ))
      ) : (
        <Tech />
      )}
    </>
  );
};

const Resume = () => {
  const [language, setLanguage] = useState("english");
  const [data, setData] = useState([]);

  const ENGLISH_TITLES = ["education", "work experience", "skills"];
  const FRENCH_TITLES = ["formation", "expérience professionnelle", "compétences"];

  useEffect(() => {
    language === "english" ? setData(ENGLISH_TITLES) : setData(FRENCH_TITLES);
  }, [language]);

  return (
    <div className="resume">
      <span>Resume</span>
      {/*
      TODO: Fill English job descriptions
      <button onClick={() => setLanguage(language === "english" ? "french" : "english")}>SWITCH LANGUAGE</button> */}
      {data.map((e, i) => (
        <Section text={e} key={uuid()} />
      ))}
    </div>
  );
};

export default Resume;
