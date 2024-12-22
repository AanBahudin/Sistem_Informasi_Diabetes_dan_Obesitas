import React from 'react'
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
 
 const Navbar = () => {

    const [bgOpacity, setBgOpacity] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
        const scrollTop = window.scrollY;
        const heroHeight = window.innerHeight;
        console.log(innerHeight);
        
        
        const opacity = Math.min(scrollTop / heroHeight, 1);
        setBgOpacity(opacity);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

   return (
    <div className='py-8 mx-auto px-16 flex justify-between z-10 fixed w-[90%] transition-colors duration-75 bg-lightGrey rounded-b-[8px]'
    style={{ backgroundColor: `rgba(244, 246, 255, ${bgOpacity})` }}>
        <h1 className='text-2xl font-semibold font-poppins cursor-default'>E-Health</h1>

        <section className='flex flex-row gap-x-7 items-center'>
            <a href='/#contacts' className='text-grey text-sm cursor-default hover:text-blue duration-200 ease-in-out'>Contacts</a>
            <a href='/#services' className='text-grey text-sm cursor-default hover:text-blue duration-200 ease-in-out'>Services</a>
            <a href='/#article' className='text-grey text-sm cursor-default hover:text-blue duration-200 ease-in-out'>Articles</a>
            <NavLink to='/login' className={({isActive}) => `${isActive ? 'hidden' : 'visible'} bg-blue px-8 py-2 text-sm rounded-md`} end>
                Login
            </NavLink>
        </section>
    </div>
   )
 }
 
 export default Navbar