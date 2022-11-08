import React from 'react'
import { motion } from 'framer-motion'
import "./benefits.scss"
import Dropbenefits from './Dropbenefits/Dropbenefits'

const Benefits = () => {
      return (
            <div className='Benefits' >
                  <h2>BENEFITS</h2>
                  <Dropbenefits />
                  <div className='price-tags' >
                        <div className='tag' >
                              <div className='tag-holder'>PRIDE</div>
                              <motion.div className='price-tags'
                                    animate={{
                                          scale: [1, 1, 1, 1, 1],
                                          rotate: [-5, 0, 5, 0, -5],
                                          y: [250, 250, 250, 250, 250],
                                          originY: [0, 0, 0, 0, 0]

                                    }}
                                    transition={{
                                          duration: 3,
                                          ease: "linear",
                                          times: [0, 0.2, 0.5, 0.8, 1, 1.2],
                                          repeat: Infinity,
                                          repeatDelay: 0
                                    }}>
                                    <div className='motion-string' >

                                    </div>
                                    <div className='motion-tag' >

                                    </div>
                              </motion.div>
                              <h3 className='tag-title-footer' >Awards trophy</h3>
                        </div>
                        <div className='tag' >
                              <div className='tag-holder'>PROMOTION</div>
                              <motion.div className='price-tags'
                                    animate={{
                                          scale: [1, 1, 1, 1, 1],
                                          rotate: [-5, 0, 5, 0, -5],
                                          y: [250, 250, 250, 250, 250],
                                          originY: [0, 0, 0, 0, 0]

                                    }}
                                    transition={{
                                          duration: 3,
                                          ease: "linear",
                                          times: [0, 0.2, 0.5, 0.8, 1, 1.2],
                                          repeat: Infinity,
                                          repeatDelay: 0,
                                          delay: 0.2
                                    }}>
                                    <div className='motion-string'
                                          >

                                    </div>
                                    <div className='motion-tag' style={{ backgroundColor: "#ffb615" }}

                                    >

                                    </div>
                              </motion.div>
                              <h3 className='tag-title-footer' >Certificate</h3>

                        </div>
                        <div className='tag' >
                              <div className='tag-holder'>PRESTIGE</div>
                              <motion.div className='price-tags'
                                    animate={{
                                          scale: [1, 1, 1, 1, 1],
                                          rotate: [-5, 0, 5, 0, -5],
                                          y: [250, 250, 250, 250, 250],
                                          originY: [0, 0, 0, 0, 0]

                                    }}
                                    transition={{
                                          duration: 3,
                                          ease: "linear",
                                          times: [0, 0.2, 0.5, 0.8, 1, 1.2],
                                          repeat: Infinity,
                                          repeatDelay: 0,
                                          delay: 0.3
                                    }}>
                                    <div className='motion-string' >

                                    </div>
                                    <div className='motion-tag' >

                                    </div>
                              </motion.div>
                              <h3 className='tag-title-footer' >Digital seal</h3>

                        </div>
                        <div className='tag' >
                              <div className='tag-holder'>MOTIVATION</div>
                              <motion.div className='price-tags'
                                    animate={{
                                          scale: [1, 1, 1, 1, 1],
                                          rotate: [-5, 0, 5, 0, -5],
                                          y: [250, 250, 250, 250, 250],
                                          originY: [0, 0, 0, 0, 0]

                                    }}
                                    transition={{
                                          duration: 3,
                                          ease: "linear",
                                          times: [0, 0.2, 0.5, 0.8, 1, 1.2],
                                          repeat: Infinity,
                                          repeatDelay: 0,
                                          delay: 0.4
                                    }}>
                                    <div className='motion-string' >

                                    </div>
                                    <div className='motion-tag' style={{ backgroundColor: "#ffb615" }}>

                                    </div>
                              </motion.div>
                              <h3 className='tag-title-footer' >Coffee Table</h3>

                        </div>
                  </div>
            </div>
      )
}

export default Benefits