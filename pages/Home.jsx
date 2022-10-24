import React from 'react'
import AboutUs from '../components/aboutUs/AboutUs'
import Hero from '../components/hero/Hero'
import Ourcore from '../components/ourcore/Ourcore'
import ProgAndEvents from '../components/progAndEvents/ProgAndEvents'
import Pv from '../components/pv/Pv'
import Partners from '../components/partners/Partners'
import Schprog from '../components/schprog/Schprog'
import RecentFeeds from '../components/recentFeeds/RecentFeeds'
import DontMiss from '../components/dontMiss/DontMiss'
import Testimonials from '../components/testimonials/Testimonials'
import NavBar from '../components/nav/NavBar'
import Footer from '../components/footer/Footer'
import { ParallaxProvider } from 'react-scroll-parallax'

function Home() {
  return (
    <>
    <ParallaxProvider>
      
    <NavBar/>
    <Hero/>
    <Ourcore/>
    <AboutUs/>
    <Pv/>
    <ProgAndEvents/>
    <Partners/>
    <Schprog/>
    <RecentFeeds/>
    <DontMiss/>
    <Testimonials/>
    <Footer/>
    </ParallaxProvider>
    </>
  )
}
//<Hero/>
  //   <Ourcore/>
  //   <AboutUs/>
  //   <Pv/>
  //   <ProgAndEvents/>
  //   <Partners/>
  //   <Schprog/>
  //   <RecentFeeds/>
  //   <DontMiss/>
  //   <Testimonials/>
  //   <Footer/>
export default Home