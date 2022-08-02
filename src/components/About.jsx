import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Islam, nice to meet you.</p>
          </div>
          <div>
            <p>
              My name is Islam, and I’m learning to be a frontend developer. In
              my spare time, I read different literature and I’m developing
              myself. Also improve my hard skills and soft skills. Doing
              basketball and want to work on interesting endings
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
