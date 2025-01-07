import React from "react";
import PleyCard from "./PleyCard";
import Chill2 from "./Image/Chill2.png";
import PopMix2 from "./Image/PopMix2.png";
import Phelz from "./Image/Phelz.png";
import Indie from "./Image/Indie.png";
function PlayList(props) {
  const { title } = props;
  return (
    <div>
      <div className="flex gap-[370px] items-center text-white pl-5 pr-[42px] mb-[26px]">
        <h1 className="font-semibold text-[25px]">{title}</h1>
        <button className="cursor-pointer text-[#ADADAD] font-semibold text-sm">SEE ALL</button>
      </div>
      <div className="flex gap-3 px-2">
        <PleyCard
          image={Chill2}
          title="Chill Mix"
          desc="Julia Wolf, Khalid, ayokay and more"
        />
        <PleyCard
          image={PopMix2}
          title="Pop Mix"
          desc="Hey Violet, VÉRITÉ, Timeflies and more"
        />
        <PleyCard
          image={Phelz}
          title="Pheelz Mix"
          desc="WizKid, Asake, Tiwa Savage and more"
        />
        <PleyCard
          image={Indie}
          title="Indie Mix"
          desc="Joywave, The xx, The Neighbourhood and..."
        />
      </div>
    </div>
  );
}

export default PlayList;
