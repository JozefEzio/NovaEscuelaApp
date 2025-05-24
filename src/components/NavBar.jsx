import React, { useEffect, useState } from 'react'
function NavBar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isNon, setIsNon] = useState(false);
    useEffect(() => {
        const here = document.getElementById('hero');
        const handleScrolle = () => {
            const windowHeight = window.scrollY;
            const heroHeight = here?.offsetHeight || 100;
            windowHeight > heroHeight ? setIsScrolled(true) : setIsScrolled(false);
        }
        window.addEventListener('scroll', handleScrolle)
        return () => window.removeEventListener('scroll', handleScrolle)
    }, [])
    const handleShow = () => {
        setIsNon(prev => !prev)
    }
    return (
        <>
            <nav className="navbar">
                <div className="media-flex">
                    <div className="logo"><h1>Nova Escuela</h1></div>
                    <button onClick={handleShow}><i class={`fa-solid ${!isNon?'fa-bars':'fa-xmark'}` }></i></button>
                </div>
                <ul className={`nav-links ${isScrolled ? 'scrolled' : ''} ${isNon ? 'show' : ''}`} >
                    <li><a href="#about">About</a></li>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar