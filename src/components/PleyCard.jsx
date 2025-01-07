import React from "react";

function PleyCard(props) {
  const { image, title, desc } = props;
  return (
    <div className="flex flex-col gap-[20px] p-4 w-[150px] cursor-pointer bg-zinc-900 h-[250px] rounded-lg">
      <img className="object-cover w-[150px] h-[150px]" src={image} alt="" />
      <div className="flex flex-col gap-2">
        <h1 className="tracking-[2%] text-white text-lg font-semibold">
          {title}
        </h1>
        <p className="text-[#B3B3B3] w-[150px] font-semibold text-sm">{desc}</p>
      </div>
    </div>
  );
}

export default PleyCard;
