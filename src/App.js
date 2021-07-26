import "./styles.css";
import React, { useState } from "react";

const guruDB = {
  webDevlopment: [
    {
      name: "Tanay Pratap",
      skill: "FrontEnd Development",
      work: "Microsoft , neogcamp"
    }
  ],
  finance: [
    {
      name: "Shashank Udupa",
      skill: "Stocks , Money Managment, Finance Expert",
      work: "Avelon Meta"
    }
  ],
  digitalMarketing: [
    {
      name: "Abhinav Arora",
      skill: "Content Markering  ,Copywriting ,Growth Hacking",
      work: "Avelon Meta"
    }
  ]
};

var skillField = Object.keys(guruDB);
export default function App() {
  const [genre, setGenre] = useState("webDevlopment");

  function skillSetClickHandler(skillSet) {
    setGenre(skillSet);
  }

  return (
    <div className="App">
      <h1>Skilled Guru's of 2021</h1>
      <h2>Some of the skilled people from different Fields.</h2>
      {skillField.map(function (skillSet) {
        return (
          <span onClick={() => skillSetClickHandler(skillSet)} key={skillSet}>
            {" "}
            {skillSet}
          </span>
        );
      })}
      <ul>
        {guruDB[genre].map((guru) => (
          <li
            key={guru}
            style={{
              listStyle: "none",
              padding: "1rem",
              border: "1px solid #D1D5DB",
              width: "70%",
              margin: "1rem 0rem",
              borderRadius: "0.5rem"
            }}
          >
            {" "}
            <div style={{ fontSize: "larger" }}> {guru.name} </div>
            <div style={{ fontSize: "smaller" }}> {guru.skill} </div>
            <div style={{ fontSize: "smaller" }}> {guru.work} </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
