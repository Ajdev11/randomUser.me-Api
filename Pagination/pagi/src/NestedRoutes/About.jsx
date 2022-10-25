import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="About">
      <h1>Welcome to the About Section</h1>
      <div className="About-Div">
        <Link className="aboutlink" to="/">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default About;
