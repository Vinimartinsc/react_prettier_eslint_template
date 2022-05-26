import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      Home
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}

export default Home;
