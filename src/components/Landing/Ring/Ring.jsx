import React from 'react'
import { motion } from "framer-motion";
import "./Ring.scss"
const Ring = () => {
  return (
    <div className='Ring' >
 
    <motion.div
      className="ring-spin"
      animate={{
        scale: [2, 2, 2, 1, 2, 2],
        rotate: [0, 30, 60, 90, 100],
        // borderRadius: ["50%", "50%", "50%", "50%", "50%"]
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1, 1.2],
        repeat: Infinity,
        repeatDelay: 1
      }}
    >
  
      <div className='ring-patch' >
        
      </div>
      
    </motion.div> 
      </div>
  )
}

export default Ring