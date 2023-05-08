import React from "react";
import Accordian from "../Accordian";

const AboutUsSection5 = () => {
  return (
    <div className="bg-base1 padding-1 padding-2">
      <div className="space-y-4 border-b border-[#21272D] pb-12">
        <h1 className="text-4xl font-light">Frequently Asked Questions</h1>
        <p className="uppercase text-primary">Lorem Ipsum</p>
      </div>
      <div className="flex justify-end pt-6 md:pt-16">
        <div className="w-full md:w-[70%]">
          <Accordian
            title="Do You Rent To International Visitors?"
            detail="Viverra accumsan in nisl scelerisque nisi. At risus viverra adipiscing at in tellus. Integer neq ualiquam vestibulum en morbi blandit cursi us risus ultrices ataugue ut lectus arcu sed done."
          />
          <Accordian
            title="Do You Rent To International Visitors?"
            detail="Viverra accumsan in nisl scelerisque nisi. At risus viverra adipiscing at in tellus. Integer neq ualiquam vestibulum en morbi blandit cursi us risus ultrices ataugue ut lectus arcu sed done."
          />
          <Accordian
            title="Do You Rent To International Visitors?"
            detail="Viverra accumsan in nisl scelerisque nisi. At risus viverra adipiscing at in tellus. Integer neq ualiquam vestibulum en morbi blandit cursi us risus ultrices ataugue ut lectus arcu sed done."
          />
          <Accordian
            title="Do You Rent To International Visitors?"
            detail="Viverra accumsan in nisl scelerisque nisi. At risus viverra adipiscing at in tellus. Integer neq ualiquam vestibulum en morbi blandit cursi us risus ultrices ataugue ut lectus arcu sed done."
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection5;
