import React, { useContext } from "react";
import "./Services.css";
import Card from "../CardService/Card";
import HeartEmoji from "../../imgs/heartemoji.png";
import Glasses from "../../imgs/glasses.png";
import Humble from "../../imgs/humble.png";
// import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  // const theme = useContext(themeContext);
  // const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color:  "" }}>Our Innovative</span>
        <span>Services</span>
        <span>
        Kami menyediakan solusi teknologi terdepan untuk memantau dan 
        <br />
        mengelola perkebunan kelapa sawit secara efisien dan transparan.
        <br />
        Melalui teknologi blockchain dan drone rover, kami membawa revolusi 
        <br />
        dalam pengelolaan perkebunan.
        </span>
        {/* <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a> */}
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Monitoring"}
            detail={"Pemantauan otomatis dengan Drone Rover untuk kesehatan tanaman, kebutuhan pemupukan, dan pengendalian hama."}
          />
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Data Management"}
            detail={"Pengelolaan data perkebunan dengan Blockchain untuk transparansi dan akuntabilitas yang lebih baik."}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={"Automation"}
            detail={
              "Automatisasi proses pemeliharaan tanaman, seperti pemupukan dan penyemprotan, berdasarkan data real-time."
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
