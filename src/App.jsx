/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

import DarkModeToggle from './components/DarkModeToggle'
import Navbar from './components/NavBar'
import HeroSection from './components/HeroSection'
import Summary from './components/Summary'
import SkillsSection from './components/SkillsSection'
import RecentWorkSection from './components/RecentWorks'
import AboutMe from './components/Aboutme'
import Contact from './components/Contact'
import Footer from './components/Footer'
import GoToTop from './components/GoToTop'


function App() {
  // const [count, setCount] = useState(0)
  return (
    <>
      {/* <!---DARK MODE TOGGLE----> */}
<DarkModeToggle />
    <header>
      {/* <!---Navbar--> */}
      <Navbar/>
    </header>
    {/* <!---HERO SECTION----> */}
    <HeroSection/>
    {/* <!--Summary Section---> */}
    <Summary/>
  {/* <!--Skills Section--> */}
    <SkillsSection/>
    {/* <!-- My Recent Work Section --> */}
    <RecentWorkSection/>
    {/* <!----About Me Section-------> */}
    <AboutMe/>
    {/* <!---Get In Touch Section----> */}
    <Contact/>
    {/* <!--Footer--> */}
    <Footer/>
    {/* <!-- Go to top section --> */}
    <GoToTop/>

    </>
  )
}
export default App