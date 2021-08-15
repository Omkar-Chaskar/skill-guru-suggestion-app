import "./styles.css";
import React, { useState } from "react";

const guruDB = {
  webDevlopment: [
    {
      name: "Tanay Pratap",
      skill: "FrontEnd Development",
      work: "Microsoft , neogcamp",
      rating: "5 / 5"
    },
    {
      name: "Daniel Shiffman",
      skill: "FrontEnd Development",
      work: "Coding Train",
      rating: "4.8 / 5"
    },
    {
      name: "Kevin Powell ",
      skill: "FrontEnd Development , web Devloper , Css master",
      work: "Coding Train",
      rating: "4.6 / 5"
    }
  ],
  finance: [
    {
      name: "Shashank Udupa",
      skill: "Stocks , Money Managment, Finance Expert",
      work: "Avelon Meta",
      rating: "4.7 / 5"
    },
    {
      name: "Anil Lamba",
      skill: "Taxation, Author, Finance Expert",
      work: "Training and consulting in finance, Youtuber",
      rating: "4 / 5"
    },
    {
      name: " Ranveer Allahbadia ",
      skill: "Personal Finance, Finance Expert",
      work: " Youtuber",
      rating: "3 / 5"
    }
  ],
  digitalMarketing: [
    {
      name: "Abhinav Arora",
      skill: "Content Markering  ,Copywriting ,Growth Hacking",
      work: "Avelon Meta",
      rating: "4.9 / 5"
    },
    {
      name: "Ankur Aggarwal",
      skill: "Content Creator , Growth Hackes ",
      work: "Youtuber",
      rating: "4.5 / 5"
    },
    {
      name: "Darrel Wilson",
      skill: "Content Creator ,Copywriting ,Wordpress Developer",
      work: "Youtuber",
      rating: "4 / 5"
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
              marginRight: "auto",
              marginLeft: "auto",
              border: "1px solid #D1D5DB",
              width: "60%",
              margin: "1rem 0rem",
              borderRadius: "0.5rem",
              textAlign: "center"
            }}
          >
            {" "}
            <div style={{ fontSize: "larger", fontWeight: "bold" }}>
              {" "}
              {guru.name}{" "}
            </div>
            <div style={{ fontSize: "Large" }}> {guru.skill} </div>
            <div style={{ fontSize: "smaller" }}> {guru.work} </div>
            <div style={{ fontSize: "smaller" }}> {guru.rating} </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
