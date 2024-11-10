import React from 'react'

function GradientBG({ l, t , rr  ,tt }) {
  console.log(`GradientBG props - left: ${l}, top: ${t}`); 

  return (
    <>
    <div className={`absolute z-100`} style={{ left: l, top: t, overflow: 'hidden' , overflowX: 'hidden' , maxWidth: '100vw' }}>
    <svg width="100%" height="1356" viewBox="0 0 1440 1356" fill="none" xmlns="http://www.w3.org/2000/svg">
<g style={{ mixBlendMode: "color" }} opacity="0.7" filter="url(#filter0_f_6_241)">
<path d="M278.388 400.619C241.421 406.271 91.1811 365.318 -91.8495 695.977C-553.493 698.674 -383.784 721.276 -272.071 752.189C-38.3336 1025.29 253.234 964.443 739.583 900.822L863.4 676.444L1024.99 574.884C1357.47 478.474 315.354 394.967 278.388 400.619Z" fill="url(#paint0_linear_6_241)"/>
</g>
<defs>
<filter id="filter0_f_6_241" x="-796.987" y="0.347809" width="2287.35" height="1354.68" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
<feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_6_241"/>
</filter>
<linearGradient id="paint0_linear_6_241" x1="474.217" y1="287.572" x2="202.255" y2="1009.01" gradientUnits="userSpaceOnUse">
<stop stop-color="#9D50FA"/>
<stop offset="1" stop-color="#FA55D8"/>
</linearGradient>
</defs>
</svg>

       
    </div>


    <div className={`absolute z-100 me-[70px]`} style={{ right: rr, top: tt, overflow: 'hidden' , maxWidth: '100vw'}}>
      <svg width="100%" height="1962" viewBox="0 0 1121 1962" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g style={{ mixBlendMode: "color" }} opacity="0.7" filter="url(#filter0_f_5_238)">
      <path d="M654.343 498.368C833.245 -41.6721 1029.15 374.949 1003.39 1255.91C919.771 1451.08 702.382 1561.41 641.285 1560.96C580.189 1560.51 435.439 1419.7 401.435 1279.53L414.167 841.827L654.343 498.368Z" fill="url(#paint0_linear_5_238)" fill-opacity="0.7"/>
      <path d="M654.343 498.368C833.245 -41.6721 1029.15 374.949 1003.39 1255.91C919.771 1451.08 702.382 1561.41 641.285 1560.96C580.189 1560.51 435.439 1419.7 401.435 1279.53L414.167 841.827L654.343 498.368Z" stroke="black"/>
      </g>
      <defs>
      <filter id="filter0_f_5_238" x="0.932846" y="-143.262" width="1405.25" height="2104.72" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
      <feGaussianBlur stdDeviation="200" result="effect1_foregroundBlur_5_238"/>
      </filter>
      <linearGradient id="paint0_linear_5_238" x1="901.357" y1="1470.01" x2="488.836" y2="377.258" gradientUnits="userSpaceOnUse">
      <stop stop-color="#9D50FA"/>
      <stop offset="1" stop-color="#FA55D8"/>
      </linearGradient>
      </defs>
      </svg>


    </div>

    </>
  )
}

export default GradientBG
