import React, { useRef } from 'react'
import "./dropbenefits.scss"
import { motion } from 'framer-motion'


const Dropbenefits = () => {
    const scrollRef = useRef(null)
    return (
        <div className='Dropbenefits'>
            <motion.div className='Benfits-Pill Exposure'
                initial={{}}
                whileInView={{
                    rotate: [0, -5, -10, -10],
                    y: [0, 370],
                    opacity:[0,1],
                

                }}

                viewport={{ root: scrollRef }}
            >EXPOSURE</motion.div>
            <motion.div className='Benfits-Pill Positivity'
                initial={{}}
                whileInView={{rotate: [0, 0], y: [10, 430], opacity:[0,1]}}
                viewport={{ root: scrollRef }}
            >POSITIVITY</motion.div>

            <motion.div className='Benfits-Pill Excellence'
                initial={{}}
                whileInView={{ rotate: [0, 0, 0, 0, 0, 0, 0, 0, 0, -0], y: [10, 430], opacity:[0,1] }}
                viewport={{ root: scrollRef }}
            >EXCELLENCE</motion.div>

            <motion.div className='Benfits-Pill Recognition'
                initial={{}}
                whileInView={{ rotate: [0, 0, 0, 0, 0, 0, -5, -5, -10, -10], y: [10, 360], opacity:[0,1] }}
                viewport={{ root: scrollRef }}
            >RECOGNITION</motion.div>

            <motion.div className='Benfits-Pill Pr'
                initial={{}}
                whileInView={{ rotate: [0, 0, 0, 0, 0, 0, -5, -5, -10, -20], y: [10, 320], opacity:[0,1] }}
                viewport={{ root: scrollRef }}
            >PR</motion.div>

            <motion.div className='Benfits-Pill Networking'
                initial={{}}
                whileInView={{ rotate: [0, 0, 0, 0, 0, 20], y: [10, 320], opacity:[0,1] }}
                viewport={{ root: scrollRef }}>NETWORKING</motion.div>

            <motion.div className='Benfits-Pill Diffren'
                initial={{}}
                whileInView={{ rotate: [0, 0, 0, 0, 0, 15], y: [-100, 320], opacity:[0,1] }}
                viewport={{ root: scrollRef }}
            >DIFFRENTATION</motion.div>

            <motion.div className='Benfits-Pill Increase'
                initial={{}}
                whileInView={{ rotate: [0, 0, 0, 0, -10], y: [10, 220], opacity:[0,1] }}
                viewport={{ root: scrollRef }} >INCREASE SALES</motion.div>
          
            <motion.div className='Benfits-Pill Showcase'  
            initial={{}}
                whileInView={{ rotate: [0, 0, 0, 0, 10], y: [10, 240], opacity:[0,1] }}
                viewport={{ root: scrollRef }}
                >SHOWCASING</motion.div>
        </div>
    )
}

export default Dropbenefits