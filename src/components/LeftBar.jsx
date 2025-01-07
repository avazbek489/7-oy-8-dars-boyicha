import React from "react";
import home from "../image/home.svg";
import search from "../image/search.svg";
import library from "../image/library.svg";
import library_S from "../image/library_S.svg";
import liked from "../image/liked.svg";
import { Link } from "react-router-dom";

function LeftBar() {
  return (
    <div className="fixed w-[310px] h-screen bg-black top-0 pt-[70px] pl-[30px] pr-[39px] text-white">
      <div className="flex flex-col gap-5 mb-[49px]">
        <Link to="/" className="flex items-center gap-5">
          <img className="w-8 h-8" src={home} alt="" />
          <h2 className="font-bold text-lg">Home</h2>
        </Link>
        <a href="#" className="flex items-center gap-5">
          <img className="opacity-60 w-8 h-8" src={search} alt="" />
          <h2 className="font-bold text-opacity-60 text-white text-lg">
            Search
          </h2>
        </a>
        <a href="#" className="flex items-center gap-5">
          <img className="opacity-60 w-8 h-8" src={library} alt="" />
          <h2 className="font-bold opacity-60 text-lg">Your Library</h2>
        </a>
      </div>
      <div className="flex flex-col gap-5 border-b border-[#282828] pb-5">
        <Link to="/" className="opacity-60 flex items-center gap-5">
          <img className="w-8 h-8" src={library_S} alt="" />
          <h2 className="font-bold text-lg">Create Playlist</h2>
        </Link>
        <Link to="/likes" className="flex items-center gap-5">
          <img className="w-8 h-8" src={liked} alt="" />
          <h2 className="font-bold text-lg">Liked Songs</h2>
        </Link>
      </div>
      <div className="h-[150px] overflow-y-scroll text-[#B3B3B3] mt-[22px] flex flex-col gap-[18px]">
        <a href="#">Chill Mix</a>
        <a href="#">Insta Hits</a>
        <a href="#">Your Top Songs 2021</a>
        <a href="#">Mellow Songs</a>
        <a href="#">Anime Lofi & Chillhop Music</a>
        <a href="#">BG Afro “Select” Vibes</a>
        <a href="#">Afro “Select” Vibes</a>
        <a href="#">Happy Hits!</a>
        <a href="#">Deep Focus</a>
        <a href="#">Instrumental Study</a>
        <a href="#">OST Compilations</a>
        <a href="#">Nostalgia for old souled mill...</a>
        <a href="#">Mixed Feelings</a>
      </div>
    </div>
  );
}

export default LeftBar;
