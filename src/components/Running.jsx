import React from "react";
import Marquee from "react-fast-marquee";

function Running() {
  const data = [
    "1.5+ Years of Experience",
    "Clean Code Practices",
    "Pixel-Perfect and Clean UI",
    "Responsive Design",
    "Performance Optimization",
    "Accessibility First",
  ];
  return (
    <Marquee
      className="bg-[#b2eb35] py-3 text-black"
      pauseOnHover={true}
      speed={100}
    >
      {data.map((item, index) => (
        <div key={index} className="flex items-center gap-2 mx-5">
          <span className="w-2 h-2 bg-black rounded-full" />
          <span className="mx-2 text-lg font-[600]">{item}</span>
        </div>
      ))}
    </Marquee>
  );
}

export default Running;
