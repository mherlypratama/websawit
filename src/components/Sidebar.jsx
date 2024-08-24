import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import Logo from "../imgs/logo1.png";
import { UilSignOutAlt, UilBars } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  return (
    <>
      {/* Bars icon for toggling sidebar */}
      <div
        className="bars"
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpanded(!expanded)}
      >
        <UilBars />
      </div>

      {/* Sidebar with animation and responsiveness */}
      <motion.div
        className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        {/* Logo */}
        <div className="logo">
          <img src={Logo} alt="logo" />
          <span>
            Ro<span>o</span>ne
          </span>
        </div>

        {/* Menu items with NavLink */}
        <div className="menu">
          {SidebarData.map((item, index) => {
            return (
              <NavLink
                to={item.link}
                className={selected === index ? "menuItem active" : "menuItem"}
                key={index}
                onClick={() => setSelected(index)}
                style={{ textDecoration: "none" }}
              >
                <item.icon />
                <span>{item.heading}</span>
              </NavLink>
            );
          })}

          {/* Sign out icon */}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
