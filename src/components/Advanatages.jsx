import React from 'react'
import Img1 from '../assets/guide.svg'
import Img2 from '../assets/airport.svg'
import WhiteBoxText from './WhiteBoxText'
import Img3 from '../assets/cartrip.svg'
import Button from './Button'

function Advanatages() {
  return (
    <>
    <div className='mt-[200px] md:mt-[100px] mx-8 md:mx-20'>
    <h3 className="text-3xl md:text-5xl text-left mx-2 md:mx-24 text-black mb-10">Personalized Guides</h3>
        <div class="flex flex-row mx-0">
            
            <div class="basic-full md:basis-3/4  flex justify-center">
            
                <img src={Img1} alt="World" className='h-40 mt-4 md:h-48 ms-2 md:ms-20 ' />
                <div className='ms-2 md:ms-40 mt-4'>
                    <WhiteBoxText text="Explore destinations with our local experts. Get bespoke itineraries, insider tips, and unique experiences  tailored just for you." />
                </div>
            </div>
            <div class="basis-0 md:basic-1/2 ">
            
            </div>
        </div>



        <h3 className="text-3xl md:text-5xl text-left md:text-right mx-2 md:mx-24 text-black my-10">Airport Pickups</h3>
        <div class="flex flex-row mt-10">
            <div class="hidden md:flex md:basis-3/4 justify-end  ">
                <img src={Img2} alt="World" className='h-40 mt-4 md:h-48' />
            </div>
            <div class="basis-full md:basis-1/4 flex justify-center">
                <WhiteBoxText text="Arrive stress-free with our reliable airport pickup service. Enjoy a seamless start to your trip with professional drivers and comfortable vehicles."></WhiteBoxText>
            </div>
        </div>



        
        <h3 className="text-3xl md:text-5xl text-left    text-black my-10 ">Budget Management & Transparency</h3>
        <div class="flex flex-col md:flex-row mt-10  
        sm:flex sm:items-center ">

            <div class=" flex  lg:flex-row basis-full lg:8/12 flex justify-center md::justify-start  ">
                <img src={Img3} alt="World" className='h-40 mt-4 lg:h-48 hidden   lg:m-0' />
                <WhiteBoxText text="Stay within your budget and enjoy transparent pricing for all services. Our integrated expense tracker helps you  monitor spending while ensuring clear,  upfront pricing with no hidden fees."></WhiteBoxText>
            </div>

            <div class="hidden lg:flex basis-full lg:basis-4/12  mt-10   ">
                <Button text="Plan your trip ->"></Button>
            </div>
        </div>





    

    </div>    
    </>
  )
}

export default Advanatages