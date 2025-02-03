import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiReact, DiNodejs, DiGit, DiMysql } from "react-icons/di";
import { SiFirebase } from "react-icons/si";

// Using inline style to inject CSS in the head for keyframes and styles
const style = `
  @keyframes moveEffect {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px); /* Slight movement */
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes glowEffect {
    0% {
      box-shadow: 0px 0px 15px rgba(255, 0, 255, 0.7), 0px 0px 20px rgba(0, 255, 255, 0.7);
    }
    100% {
      box-shadow: 0px 0px 25px rgba(255, 0, 255, 1), 0px 0px 30px rgba(0, 255, 255, 1);
    }
  }

  @keyframes moveBorder {
    0% {
      border-image-source: repeating-conic-gradient(from 0deg, #ff00ff 0% 20%, #00ffcc 20% 40%, #ff00ff 40% 60%, #00ffcc 60% 80%, #ff00ff 80% 100%);
    }
    10% {
      border-image-source: repeating-conic-gradient(from 30deg, #ff00ff 0% 20%, #00ffcc 20% 40%, #ff00ff 40% 60%, #00ffcc 60% 80%, #ff00ff 80% 100%);
    }
    20% {
      border-image-source: repeating-conic-gradient(from 60deg, #ff00ff 0% 20%, #00ffcc 20% 40%, #ff00ff 40% 60%, #00ffcc 60% 80%, #ff00ff 80% 100%);
    }
    30% {
      border-image-source: repeating-conic-gradient(from 90deg, #ff00ff 0% 20%, #00ffcc 20% 40%, #ff00ff 40% 60%, #00ffcc 60% 80%, #ff00ff 80% 100%);
    }
    40% {
      border-image-source: repeating-conic-gradient(from 120deg, #ff00ff 0% 20%, #00ffcc 20% 40%, #ff00ff 40% 60%, #00ffcc 60% 80%, #ff00ff 80% 100%);
    }
    50% {
      border-image-source: repeating-conic-gradient(from 150deg, #ff00ff 0% 20%, #00ffcc 20% 40%, #ff00ff 40% 60%, #00ffcc 60% 80%, #ff00ff 80% 100%);
    }
    60% {
      border-image-source: repeating-conic-gradient(from 180deg, #ff00ff 0% 20%, #00ffcc 20% 40%, #ff00ff 40% 60%, #00ffcc 60% 80%, #ff00ff 80% 100%);
    }
    70% {
      border-image-source: repeating-conic-gradient(from 210deg, #ff00ff 0% 20%, #00ffcc 20% 40%, #ff00ff 40% 60%, #00ffcc 60% 80%, #ff00ff 80% 100%);
    }
    80% {
      border-image-source: repeating-conic-gradient(from 240deg, #ff00ff 0% 20%, #00ffcc 20% 40%, #ff00ff 40% 60%, #00ffcc 60% 80%, #ff00ff 80% 100%);
    }
    90% {
      border-image-source: repeating-conic-gradient(from 270deg, #ff00ff 0% 20%, #00ffcc 20% 40%, #ff00ff 40% 60%, #00ffcc 60% 80%, #ff00ff 80% 100%);
    }
    100% {
      border-image-source: repeating-conic-gradient(from 360deg, #ff00ff 0% 20%, #00ffcc 20% 40%, #ff00ff 40% 60%, #00ffcc 60% 80%, #ff00ff 80% 100%);
    }
}


  .tech-icon-box {
    padding: 20px;
    border-radius: 15px;
    background: rgba(0, 0, 0, 0.9);
    color: #ffffff;
    text-align: center;
    font-size: 3rem;
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 120px;
    min-height: 120px;
    border: solid 4px transparent;
    border-image-slice: 1;
    animation: moveEffect 3s ease-in-out infinite, glowEffect 5s ease-in-out infinite alternate, moveBorder 5s linear infinite;
  }

  /* Style for the container */
  .techstack-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8rem;
    padding-bottom: 20px;
  }
`;

const Techstack = () => {
  return (
    <>
      <style>{style}</style>
      <div className="techstack-container">
        <div className="tech-icon-box">
          <CgCPlusPlus />
        </div>
        <div className="tech-icon-box">
          <DiJavascript1 />
        </div>
        <div className="tech-icon-box">
          <DiNodejs />
        </div>
        <div className="tech-icon-box">
          <DiReact />
        </div>
        <div className="tech-icon-box">
          <DiGit />
        </div>
        <div className="tech-icon-box">
          <SiFirebase />
        </div>
        <div className="tech-icon-box">
          <DiMysql />
        </div>
      </div>
    </>
  );
};

export default Techstack;
