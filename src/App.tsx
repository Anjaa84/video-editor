import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import "./App.css";
import Snowflakes from "./components/Snowflakes";

const topics: string[] = [
  "What’s the most inspiring advice you’ve ever received?",
  "If you could relive one day in your life, which day would you choose and why?",
  "Describe a small act of kindness that had a big impact on you.",
  "What’s your go-to strategy for overcoming challenges?",
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
      {/* Three.js Canvas for Snowflake Animation */}
      {/* <Canvas className="canvas" camera={{ position: [0, 0, 10], fov: 75 }}>
        <ambientLight intensity={1.0} />
        <Snowflakes />
      </Canvas> */}

      {/* Main Content */}
      <div className="content">
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
            <h2>Topic:</h2>
            <p>{selectedTopic}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
