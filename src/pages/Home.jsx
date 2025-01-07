import React, { useEffect } from "react";
import http from "../axios";

function Home() {

  useEffect(() => {
    http.get("chart")
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    })
  }, [])
  return (
    <div>

    </div>
  );
}

export default Home;
