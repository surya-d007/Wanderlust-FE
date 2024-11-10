import React from 'react'
import WorldImg from '../assets/world.svg'
import WhiteBoxText from './WhiteBoxText'
import Button from './Button'

function Welcome() {
  return (
    <>
         <div className=" text-black mt-[60px] md:mt-[140px] text-left mx-10 md:mx-16 lg:ms-20 z-90  relative ">
          <h1 className=" text-3xl md:text-6xl drop-shadow-2xl">Welcome to Wanderlust</h1>
          <p className="text-2xl md:text-[40px] 
          ">Your Ultimate Travel Planner</p>

          <div className="container md:mx-10  mt-10">
              <div className="grid grid-cols-2 md:grid-cols-2 gap-2">
                  <div className="">
                    <WhiteBoxText text="Explore Destinations: Get inspired by our curated list of must-visit places around the globe. Discover hidden gems, top attractions, and local favorites.">
                        </WhiteBoxText>
                      
                  </div>
                  <div className="hide-on-small-screen">
                      <div className=" z-100 mt-0 md:mt-0  relative">
                        <img src={WorldImg} alt="World"  className=' h-60 z-100 h-40 md:h-80  absolute  hide-on-small-screen '/>
                  </div>
                  
              </div>
              
          </div> 
          
          </div>

          <div className='mt-14 ms-16'>
          <Button text="Get Started ->"></Button>
          </div>

</div>

    </>
  )
}

export default Welcome