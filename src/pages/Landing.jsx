import React from 'react'
import Header from '../components/Header'
import GradientBG from '../components/GradientBG'
import Welcome from '../components/Welcome'
import Advanatages from '../components/Advanatages'
import PlacesVisit from '../components/PlacesVisit'
import Footer from '../components/Footer'
import './Landing.css'



export default function Landing() {
  return (
    <>

    <Header></Header>
    <>
        <GradientBG l="-70px" t="-200px" rr="-70px" tt="-200px"/>
        <GradientBG l="-70px" t="1200px" rr="-70px" tt="1200px"/>
        <GradientBG l="-70px" t="2600px" rr="-70px" tt="2600px"/>
    </>
    <Welcome></Welcome>
    <Advanatages></Advanatages>
    <PlacesVisit></PlacesVisit>
    <Footer></Footer>
    
    </>
  )
}
