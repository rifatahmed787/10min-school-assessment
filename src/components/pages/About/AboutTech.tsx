import React from "react";

const AboutTech = () => {
  return (
    <div>
      <div className=" rounded-sm flex gap-[5px] p-1 ">
  {["HOVER ME", "HOVER ME", "HOVER ME"].map((text, idx) => (
    <p
      key={idx}
      className="flex-1 w-full h-full overflow-hidden group cursor-pointer rounded-sm transition-all duration-500 bg-[#212121] border border-[#ff5a91] flex justify-center items-center hover:flex-[4]"
    >
      <span
        className="-rotate-90 group-hover:rotate-0 p-2 h-full text-center uppercase text-[#ff568e] tracking-wide transition-all duration-500"
       
      >
        {text}
      </span>
    </p>
  ))}
</div>

    </div>
  );
};

export default AboutTech;
