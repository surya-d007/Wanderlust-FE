import React from 'react'

import arrow from '../assets/down-arrow.png'
function HeaderAttri(props) {
  return (
    
           <a 
          className="flex items-center text-[14px] 
          sm:text-[16px] md:text-[18px] lg:text-[20px] mx-2 lg:mx-10 "
          href="#"
        >
          <span className="mr-[2px]">{props.text}</span>
          <img src={ props.arrow ? arrow : null  }  className="h-4 ms-0 mt-1 md:h-5" />
        </a>
      

  )
}

export default HeaderAttri
