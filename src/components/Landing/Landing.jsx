import React from 'react'
import { motion } from "framer-motion";
import "./Landing.scss"
import Ring from './Ring/Ring';
const Landing = () => {
  return (
    <div className='Landing' >
      <h2>AWARD CATEGORIES</h2>
      <div className='landing-motion' >
        <motion.h3
          className="box"
          animate={{ 
            fontSize: 50, 
            x: [-600, 0] }}
          transition={{
            duration: 1,
            ease: "easeOut",
            times: [0, 1],
            repeat: Infinity,
            repeatDelay: 1
          }}
        >
          Product of the Year
        </motion.h3>
     
        <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div className='landing-circle' >
        <Ring />
      </div>
    </div>
  )
}

export default Landing