'use client'
import React from 'react'
import styles from '../styles/bg.module.css'

const HomeBg = () => {
  return (
    
    <div className={` ${styles.octagonBg} z-[-10] w-screen h-screen fixed`}>
<div className='w-full h-full bg-white opacity-20' ></div>
    </div>
  )
}

export default HomeBg