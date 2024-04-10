import React, { useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import '../../App.css'

export const Main = () => {
  const [showNav, setShowNav] = useState(true);

  return (
    <div>
      <header style={{ color: "white" , display:'flex', flexDirection:'row'}}>
        <GiHamburgerMenu onClick={() => setShowNav(!showNav)} />
        <div className="poste"></div>
      </header>
      <Navbar show={showNav} />
    </div>
  );
};
