import React from 'react'
import { projectExperience, WhatDoIHelp } from '../../utils/data'
import css from './Experties.module.scss'
import {motion} from 'framer-motion'
import {SiLeetcode} from "react-icons/si"
import {HiOutlineDocumentMagnifyingGlass} from "react-icons/hi2"


import {fadeIn, staggerContainer, textVariant} from '../../utils/motion.js'
const Experties = () => {
  return (
    <section className={css.wrapper}>
        <a className="anchor" id="experties"></a>
        <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}>


            {/* left side */}
            <div className={css.leftSide}>
                {
                    projectExperience.map((exp, i)=> {
                        return <motion.div variants = {fadeIn("right", "tween", (i+1)*0.2, 1)} className={css.exp} key={i}>
                            <div style={{background: exp.bg}} className="flexCenter">
                                <exp.icon size={25} color="white"/>
                            </div>
                            <div>
                                <span>{exp.name}</span>
                                <span className='secondaryText'>{exp.work}</span>  
                            </div>
                           
                        </motion.div>
                    })
                }
            </div>


            {/* right */}
            <motion.div
            variants={textVariant(0.5)}
            className={css.rightSide}>

                <span className='primaryText'>Let's Connect! </span>
                {/* {WhatDoIHelp.map((paragraph, i)=> <span className='secondaryText' key={i}>{paragraph}</span>)} */}
    
                <div className={`flexCenter ${css.icons}`}>

                <a href="https://github.com/adarsh-jha1611" target="_blank"><img src="./github.png" alt="" /></a>

                <a href="https://www.linkedin.com/in/adarsh-jha-2213601ab/" target="_blank"><img src="./linkedin.png" alt="" /></a>

                <a href="https://twitter.com/AdarshJ25972196" target="_blank"><img src="./twitter.png" alt="" /></a>
                <a href="https://leetcode.com/adarsh_jha1611/" target="_blank"><img src="./leetcode.png" alt="" /></a>
                
                </div>
                <div className={`flexCenter ${css.resume}`}>
                <a href="https://docs.google.com/document/d/1Ra2NbLxO5GWdZ7GyVHpSqRqQrrxKamT2/edit?usp=sharing&ouid=115673814765788752688&rtpof=true&sd=true" target="_blank"><img src="./resume.png" alt="" /><span className="secondaryText"> Resume</span></a>

                </div>
                
            

                <div className={`flexCenter ${css.stats}`}>
                    <div className={`flexCenter ${css.stat}`}>
                        <span className='primaryText'>155+</span>
                        <span className='secondaryText'>Leetcode Problems</span>
                    </div>
                    <div className={`flexCenter ${css.stat}`}>
                        <span className='primaryText'>400+</span>
                        <span className='secondaryText'>Programming questions</span>
                    </div>
                </div>
                <div className={`flexCenter ${css.about}`}>
                    <span className='secondaryText'> I love to do programming in <strong><img src="./java.png" alt="" /></strong>, as it forces you to be precise! platforms like Leetcode, HackerRank are helpful for practicing. </span>
                </div>
                <div className={`flexCenter ${css.aboutphone}`}>
                    <span className='secondaryText'> I am a <strong><img src="./java.png" alt="" /></strong>Programmer</span>
                </div>
            </motion.div>
        </motion.div>
    </section>
  )
}

export default Experties