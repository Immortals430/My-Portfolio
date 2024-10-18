import { useEffect, useState } from 'react'
import Navbar from './Component/Navbar'
import Head from './Component/Head'
import About from './Component/About'
import Experience from './Component/Experience'
import MyWorks from './Component/MajorProject'
import OtherWorks from './Component/OtherWorks'
import Contact from './Component/Contact'
import LeftFixedComp from './Component/LeftFixedComp'
import RightFixedComp from './Component/RightFixedComp'

function App() {


  return (
    <>
    <Navbar />
    <main>

    <Head />
    <About />
    <Experience />
    <MyWorks />
    <OtherWorks />
    <Contact />

    </main>
    <LeftFixedComp />
    <RightFixedComp />
    </>
  )
}

export default App
