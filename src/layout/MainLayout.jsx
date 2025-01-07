import React from "react";
import LeftBar from "../components/LeftBar";
import RightBar from "../components/RightBar";

function MainLayout({ children }) {
  return (
    <>
      <LeftBar />
      <main className="mx-auto container" style={{width: "calc(100vw - 656px)"}}>{children}</main>
      <RightBar />
    </>
  );
}

export default MainLayout;
