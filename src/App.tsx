import React, { useState } from "react";
import "./App.css";
const snowflakeVideo = require("./components/snowflakes.mp4");
// Define the types for clarity
const topics: string[] = [
  "What’s the most inspiring advice you’ve ever received?",
  "If you could relive one day in your life, which day would you choose and why?",
  "Describe a small act of kindness that had a big impact on you.",
  "What’s one goal you’re working towards right now?",
  "What’s a fear you’ve conquered, and how did it change you?",
  "What’s a book, movie, or song that deeply influenced you, and how did it impact your perspective?",
];

const App: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [disabledTiles, setDisabledTiles] = useState<number[]>([]);

  const handleClick = (index: number) => {
    setSelectedTopic(topics[index]);
    setDisabledTiles((prev) => [...prev, index]);
  };

  return (
    <div className="App">
      {/* Full-screen snowflake video background */}
      <div className="background-video-container">
        <video
          className="background-video"
          autoPlay
          loop
          muted
          playsInline
          src={snowflakeVideo}
        />
      </div>

      {/* Main UI content */}
      <div className="main-content">
        <h1>Pick a Number</h1>
        <div className="tiles">
          {topics.map((_, index) => (
            <div
              key={index}
              className={`tile ${
                disabledTiles.includes(index) ? "disabled" : ""
              }`}
              onClick={() =>
                !disabledTiles.includes(index) && handleClick(index)
              }
            >
              {index + 1}
            </div>
          ))}
        </div>
        {selectedTopic && (
          <div className="topic-display">
            <p>{selectedTopic}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
