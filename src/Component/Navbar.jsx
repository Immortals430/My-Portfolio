import React, { useEffect, useRef, useState } from "react";

export default function Navbar() {

  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const navbarRef = useRef()


  useEffect(() => {
    const showNavbar = () => {
      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
    showNavbar()
  }, [lastScrollY])



  const handleScroll = (e) => {
    let scrollY = window.scrollY
    if(lastScrollY >= scrollY){
      setShowNavbar(true)
    }
    else setShowNavbar(false)
    setLastScrollY(scrollY)
  }

  return (
    <nav className={`${showNavbar && "showNavbar"} "nav-sec"`} id="nav-sec">
      
        <div><a href="#about">About</a></div>
        <div><a href="#experience">Experiene</a></div>
        <div><a href="#my-work">Works</a></div>
        <div><a href="#contact">Contacts</a></div>

    </nav>
  );
}
