import React from "react";
import { motion } from "framer-motion";
import css from "./Portfolio.module.scss";
import { fadeIn, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="portfolio"></a>

      <div className={`innerWidth flexCenter ${css.container}`}>


        <motion.div variants={textVariant(.4)} className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primary1Text">My Latest Works 🚀</span>
            <p style={{marginTop: "10px"}}>Perfect solution for digital experience</p>
          </div>
          <a href="https://github.com/adarsh-jha1611" target="_blank"><span className="secondaryText">Explore More Works</span></a>
        </motion.div>


        <div className={`flexCenter ${css.showCase}`}>
          <a href="https://github.com/adarsh-jha1611/Travel-Vadodara" target="_blank"><motion.img variants={fadeIn("up", "tween", .5, .6)} src="./showCase1.png" alt="project" /></a>
         <a href="https://avior.vercel.app/" target="_blank"><motion.img variants={fadeIn("up", "tween", .9, .6)} src="./showCase3.png" alt="project" /></a>
         <a href="https://adarsh-jha1611.github.io/ADI/" target="_blank"><motion.img variants={fadeIn("up", "tween", .7, .6)} src="./showCase2.png" alt="project" />
</a>
          
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
