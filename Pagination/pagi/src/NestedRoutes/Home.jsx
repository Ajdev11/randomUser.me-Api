import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <h1>Welcome To The HomePage</h1>
      <div className="About-Div">
        <Link className="aboutlink" to="/About">
          About
        </Link>
      </div>
    </div>
  );
}

export default Home;
