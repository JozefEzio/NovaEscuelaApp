import React, { useEffect, useState } from 'react'
function NavBar() {
    const [isScrolled, setIsScrolled]=useState(false);
    useEffect(()=>{
        const here=document.getElementById('hero');
        const handleScrolle=()=>{
            const windowHeight=window.scrollY;
            const heroHeight=here?.offsetHeight||100;
            windowHeight>heroHeight?setIsScrolled(true):setIsScrolled(false);
        }
        window.addEventListener('scroll', handleScrolle)
        return ()=>window.removeEventListener('scroll', handleScrolle)
    },[])
    return (
        <>
            <nav className="navbar">
                <div className="logo">Nova Escuela</div>
                <ul className={`nav-links ${isScrolled? 'scrolled':''}`}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#enrollment">Enrollment</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar