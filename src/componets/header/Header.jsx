import React from 'react'
import "./Header.css"
import CTA from './CTA'
import ME from "../../assets/018.jpg"
import HeaderSocials from './HeaderSocials'
import {FaArrowRight} from "react-icons/fa"

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Alberto Giuseppe</h1>
        <h5 className='text-light'>Fullstack Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down <FaArrowRight/></a>
      </div>
   
    </header>
  )
}

export default Header