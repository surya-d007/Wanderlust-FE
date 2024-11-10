import React from 'react'
import logo from '../assets/logo.jpg'
import HeaderAttri from '../components/HeaderAttri'
import Button from './Button'
function Header() {
  return (
    <>
    <div className='h-24 bg-white w-screen relative z-10 drop-shadow-2xl'>
      
      <div className="flex  items-center justify-center h-full">
          <img 
            src={logo} 
            className="w-32 sm:w-40 md:w-48 lg:w-56 xl:w-64 " 
            alt="My Image" 
          />
          
          <HeaderAttri text="Travel Resources" arrow={true}></HeaderAttri>
          <HeaderAttri text="Destinations" arrow={true}></HeaderAttri>
          <HeaderAttri text="Contact Us" arrow={false}></HeaderAttri>
          <Button text="Login / SignUp"></Button>
      </div>
      
    </div>
    </>
  )
}

export default Header
