import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: 2018,
    title: "Intercontinental Miami-Kitchen staff",
    duration: "3months",
    details:
      "Assisted in food preparation and other tasks as needed, contributing to the overall cusses of the kitchen operations.",
  },
  {
    year: 2019,
    title: "2taste Catering-Kitchen Supervisor",
    duration: "2years",
    details:
      "Managed daily procurement of all kitchen supplies and materials. Trained, led and optimized a 15-cook team for product quality, faster delivery times and top-notch safety measures Responsible for creating 3MM+ USDA-certified meals, all made under budget.",
  },
];

const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl pb-8 font-bold text-center text-[#001b5e] ">
        Work Experience
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
