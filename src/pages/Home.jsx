import React, { useEffect } from "react";
import PlayList from "../components/PlayList";
import KvPley from "../components/KvPley";

function Home() {
  return (
    <>
      <div
        className="h-[436px] pt-[30px]"
        style={{
          background: "linear-gradient(180deg, #3333A3 5.09%, #121212 33.4%)",
        }}
      >
        <KvPley title="Good afternoon" />
      </div>

      <div className="bg-[#121212] flex flex-col gap-[50px]">
        <PlayList title="Your top mixes" />
        <PlayList title="Made for you" />
        <PlayList title="Recently played" />
        <PlayList title="Jump back in" />
        <PlayList title="Uniquely yours" />
      </div>
    </>
  );
}

export default Home;
