import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          // "Frontend Developer ",
          // "Climber ",
          // "Open Source Contributor ",
          // "Music Lover ",
          "Full Stack Developer",
          "Illustrator",
          "Graphic Designer",
          "Explorer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
