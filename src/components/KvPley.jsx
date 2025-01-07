import React from "react";
import KvCard from "./KvCard";
import chillMix from "./kvCardImage/ChillMix.png";
import DailyMix from "./kvCardImage/DailyMix.png";
import Folk from "./kvCardImage/Folk.png";
import Pop from "./kvCardImage/PopMix.png";
import Daily5 from "./kvCardImage/Daily5.png";
import Daily4 from "./kvCardImage/Daily4.png";

function KvPley(props) {
  const { title } = props;
  return (
    <>
      <h1 className="text-[39px] ml-[35px] text-white font-bold tracking-[1px] mb-[29px]">
        {title}
      </h1>

      <div className="flex justify-start pl-[30px] gap-[31px] mb-[50px]">
        <div className="flex flex-col gap-4 items-center">
          <KvCard image={chillMix} title="Chill Mix" />
          <KvCard image={DailyMix} title="Daily Mix 1" />
          <KvCard image={Folk} title="Folk & Acoustic Mix" />
        </div>
        <div className="flex flex-col gap-4 items-center">
          <KvCard image={Pop} title="Pop Mix" />
          <KvCard image={Daily5} title="Daily Mix 5" />
          <KvCard image={Daily4} title="Daily Mix 4" />
        </div>
      </div>
    </>
  );
}

export default KvPley;
