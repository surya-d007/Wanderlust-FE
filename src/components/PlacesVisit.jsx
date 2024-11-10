import React from 'react'
import Img1 from '../assets/1.jpg'
import Img2 from '../assets/12.jpg'
import Img3 from '../assets/123.jpg'
import Img4 from '../assets/1234.jpg'
import Img5 from '../assets/12345.jpg'
import Img6 from '../assets/123456.jpg'


function PlacesVisit() {
  return (
    <div className='mx-4 md:mx-20 lg:mx-24 my-32'>
        <h1 className='text-black text-5xl md:text-6xl text-left m-0 md:mx-4 my-12'>Discover hidden gems</h1>
        <h3 className='text-black text-3xl text-left m-0 md:mx-4 my-12'>Explore <span className='text-5xl'> Breathtaking Destinations</span> and uncover  the world's beauty.  From iconic landmarks to  hidden gems, our platform offers endless adventures. Start exploring now!</h3>
        <div class="flex flex-row">

                <div>
                    <img src={Img5} alt="Image 1" className="zoomable-image object-cover h-[250px]  md:h-[400px] w-32 md:w-96 my-7 rounded-3xl drop-shadow-2xl" />
                    <img src={Img6} alt="Image 1" className="zoomable-image object-cover h-32 md:h-60 w-32  md:w-96 rounded-3xl drop-shadow-2xl" />
                </div>
            
                <div class="basis-1/3  mx-4 md:mx-10">
                <img src={Img3} alt="Image 1" className="zoomable-image object-cover h-32  md:h-60 w-96 rounded-3xl my-7 drop-shadow-2xl" />
                <img src={Img4} alt="Image 1" className="zoomable-image object-cover h-[250px] md:h-[400px] w-96  rounded-3xl drop-shadow-2xl" />
                    
                </div>
            
                <div class="basis-1/3">
                <img src={Img1} alt="Image 1" className="zoomable-image object-cover h-[250px] md:h-[400px] w-96 my-7 rounded-3xl drop-shadow-2xl" />
                <img src={Img2} alt="Image 1" className="zoomable-image object-cover h-32 md:h-60 w-96 rounded-3xl drop-shadow-2xl" />
                
                </div>
        </div>
    </div>
    
  )
}

export default PlacesVisit