import React from "react";
import PrimaryButtonCOmponent from "../buttons/primary-button.component";

function TalkToAnExpertComponent() {
  return (
    <div className="bg-primary text-center lg:text-left text-white p-4 lg:p-10 rounded-lg lg:flex lg:items-center lg:justify-between">
      <div className="lg:w-1/2">
        <h1 className="font-bold text-lg lg:text-xl">
          Still have questions? Talk to an expert
        </h1>
        <p className="mt-2 mb-3 lg:mb-0 lg:text-lg">
          Our experts will help you choose the perfect diamond for your budget
          and style.
        </p>
      </div>
      <PrimaryButtonCOmponent className="bg-white text-primary w-1/2 lg:w-fit mx-auto lg:mx-0 hover:bg-transparent hover:text-white border-2 border-white transition-all duration-200">
        Talk to an expert
      </PrimaryButtonCOmponent>
    </div>
  );
}

export default TalkToAnExpertComponent;
