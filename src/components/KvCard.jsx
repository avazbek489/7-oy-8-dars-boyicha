import React from "react";

function KvCard(props) {
  const { image, title } = props;
  return (
    <div className="cursor-pointer transition-transform transform active:scale-[0.99] flex items-center w-[270px] gap-[21px] bg-[rgba(255,255,255,0.3)] h-[65px] rounded-[6px]">
      <img className="w-[82px] h-[65px] object-cover" src={image} alt="" />
      <h1 className="text-base font-semibold text-white tracking-[1%]">
        {title}
      </h1>
    </div>
  );
}

export default KvCard;
