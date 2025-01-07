import React from "react";
import userPlus from "../image/userPlus.svg";
import exit from "../image/exit.svg";
import ghost from "../image/ghost.svg";
function RightBar() {
  let int = ">";
  return (
    <div className="fixed text-[#ccc] w-[346px] h-screen pt-[14px] pl-5 bg-black right-0 top-0">
      <div className="flex items-center justify-between">
        <h4 className="tracking-[1%]">Friend Activity</h4>
        <div className="flex items-center gap-">
          <img className="cursor-pointer" src={userPlus} alt="" />
          <img className="cursor-pointer" src={exit} alt="" />
        </div>
      </div>
      <p className="mt-[23px] mb-[23px] w-[250px] font-[450]">
        Let friends and followers on Spotify see what you’re listening to.
      </p>

      <div className="flex flex-col gap-5 mb-[21px]">
        <img className="w-[150px] h-[50px]" src={ghost} alt="" />
        <img className="w-[150px] h-[50px]" src={ghost} alt="" />
        <img className="w-[150px] h-[50px]" src={ghost} alt="" />
      </div>
      <p className="w-[250px] mb-[23px]">
        Go to Settings {int} Social and enable “Share my listening activity on
        Spotify.’ You can turn this off at any time.
      </p>
      <div className="flex items-center justify-center">
        <button className="w-[220px] text-[#171717] btn tracking-[14%] text-lg font-bold h-[55px] bg-white rounded-full">
          SETTINGS
        </button>
      </div>
    </div>
  );
}

export default RightBar;
