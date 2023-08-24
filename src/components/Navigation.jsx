import React from "react";

const Navigation = () => {
  return (
    <nav>
      <div className="logo">
        <img src="./images/nikelogo.png" alt="nile" width={70} />
      </div>

      <ul className="listitems">
        <li href="#">Home</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button className="loginbtn">Login</button>
    </nav>
  );
};

export default Navigation;
