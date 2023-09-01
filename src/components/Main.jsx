import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import main from "../assets/main2.jpg";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src={main}
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center  items-center ">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            Edison Cardenas
          </h1>
          <div
            className="flex sm:text-1xl text-1xl pt-2 text-gray-900"
            onClick={(e) => {
              window.location.href = "mailto:edisoncardenas151999@gmail.com";
            }}
          >
            Contact me hi@edison.gg
          </div>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Full stack web Developer",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Coder",
                1000,
                "Tech Enthusiast",
                1000,
              ]}
              wrapper="div"
              cursor={true}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-52 max-w-[200px] w-full">
            <a href="https://www.facebook.com/edison.cardenas.549436/">
              <FaFacebookF size={40} className="cursor-pointer" />
            </a>
            <a href="https://github.com/edisoncardenas151999">
              <FaGithub size={40} className="cursor-pointer" />
            </a>
            <a href="https://www.linkedin.com/in/edison-cardenas/">
              <FaLinkedinIn size={40} className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
