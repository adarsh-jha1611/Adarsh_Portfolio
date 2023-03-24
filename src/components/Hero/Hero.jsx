import React from "react";
import { useInView } from 'react-intersection-observer';
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";



const Hero = () => {
  return (
    
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        
  
        <div className={css.upperElements}>
          
          
          <motion.span className="primary_Text" variants={fadeIn("right", "tween", .2, 1)}>
          👋🏻 Hey! 
            <br />
            I'm <span className="highlight">Adarsh Jha</span>,
            <br />
          </motion.span>

          <motion.span className="secondary_Text" variants={fadeIn("right", "tween", .4, 1)}>
          I'm a third-year Computer Science student at VIT, passionate about designing and constructing websites that are both useful and aesthetically pleasing in my capacity as a web developer.
<br />
I keep active with a few interests in addition to my academics. One of my favourite hobbies is singing, and I like doing it whenever I can. I also like to cook and experiment with various flavours and foods. Another hobby of mine that I find fulfilling and relaxing allows me to express my creativity: painting.
          </motion.span>

          <motion.span className="st" variants={fadeIn("right", "tween", .4, 1)}>
            I'm a programmer who loves to design things :)
          </motion.span>
          
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="./person.png" alt="" />
        </motion.div>

        <a className={css.email} href="mailto:adarsh.jha1611@gmail.com">
          Contact Me! 
        </a>

        <div className={css.lowerElements}>
          

          <motion.div variants={fadeIn("left", "tween", 0.5, 1)} className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>Programmer</span>
            <strong > X </strong>
            <span>Web Development</span>
          </motion.div>
        </div>
        
      </motion.div>
    </section>
  );
};

export default Hero;
