import React from 'react'

function WhiteBoxText(props) {
  return (
    <>

          <div className='text-black bg-white w-[320px] md:w-[400px] lg:w-[450px]  mt-0 p-8 rounded-sm drop-shadow-2xl text-left'>
            <p className='text-1xl md:text-2xl '>{props.text}</p>
          </div>
    </>
  )
}

export default WhiteBoxText