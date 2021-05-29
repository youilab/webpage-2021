import React, { useEffect, useState } from "react";
import {
    Link
  } from "react-router-dom";


  
  
  export const Navbar = () => {
    
    
      const [open, setOpen] = useState(false)
      const handleClick = ()=> {
        setOpen(!open)
      }

      const [isIntersecting, setIsIntersecting] = useState(false)
      
     

      useEffect(() => {
        const sectionOneObserver = new IntersectionObserver(function(
          entries,
          sectionOneObserver
        ) {
          entries.forEach(entry => {
            if(!entry.isIntersecting) {
              setIsIntersecting(true)
            } else {
              setIsIntersecting(false)
            }
          });
        },
        {
          rootMargin: "-20% 0% 0% 0%"
        });
          const sectionOne = document.querySelector(".nav-shift");

        sectionOneObserver.observe(sectionOne);

        const appearOptions = {
          treshold: 1,  //Unless the observer is totally intersecting with my entry
          rootMargin: "0px 0px -600px 0px"
        };

        
        const appearOnScroll = new IntersectionObserver(function(
          entries, 
          appearOnScroll
        ) {
          entries.forEach(entry => {
            if(!entry.isIntersecting) {
              return;
            } else {
              entry.target.classList.add('appear');
              appearOnScroll.unobserve(entry.target);
            }
          });
        }, 
        appearOptions);

        const faders = document.querySelectorAll(".fade-in");
        faders.forEach(fader => {
          appearOnScroll.observe(fader);
        })
          
      }, [])


      


    return (
      <header className={isIntersecting? "nav-changed" : null}>
      <nav className="top-bar">
        <div className="left">
        <Link to="/">
          <img src="/Assets/img/logos/logo-navbar.png" alt="Logo You-i Lab"/>
        </Link>
        </div>
        <div className="right">
          <ul className={`nav-links ${open ? 'open' : ""}`}>
            <li  onClick={handleClick} className={open ? "fade" : null }>
              <Link to="/">Home</Link>
            </li>
            <li  onClick={handleClick} className={open ? "fade" : null }>
              <Link to="/about">About Us</Link>
            </li>
            <li  onClick={handleClick} className={open ? "fade" : null }>
              <Link to="/projects">Projects</Link>
            </li>
            <li  onClick={handleClick} className={open ? "fade" : null }>
              <Link to="/publications">Publications</Link>
            </li>
            <li  onClick={handleClick} className={open ? "fade" : null }>
              <Link to="/blog">Blog</Link>
            </li>
            <li  onClick={handleClick} className={open ? "fade" : null }>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
          <div
            className={`hamburger hamburger--squeeze js-hamburger ${open ? 'is-active' : ""}`}
            onClick={handleClick}
          >
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </div>
        </div>
        <a href="https://www.ipicyt.edu.mx/"><img className="logos" id="ipicyt" src="/Assets/img/logos/logo-ipicyt.png" alt="ipicyt" /></a>
        <a href="https://www.ipicyt.edu.mx/Cns/cns.php"><img className="logos" id="cns" src="/Assets/img/logos/logo-cns.png" alt="cns" /></a>
            
      </nav>
    </header>
  );
};
