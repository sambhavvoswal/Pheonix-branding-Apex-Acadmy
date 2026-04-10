import React, { useState } from 'react'
import logo from '../assets/apex-logo.png'
import { IoMdSearch } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

const menu = ['Home', 'Courses', 'Results', 'Faculty', 'About Us', 'Contact']

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <nav className='absolute inset-x-0 top-0 z-50 w-full bg-gray-800 text-white overflow-x-hidden'>
                <div className='mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-3 md:px-6'>
                    <img className='h-12 w-auto md:h-14' src={logo} alt="Apex Logo" />

                    <div className='flex-1 text-center text-lg font-bold uppercase tracking-wide md:hidden'>
                        Apex Academy
                    </div>

                    {/* Desktop Navigation */}
                    <div className='hidden md:block'>
                        <ul className='flex flex-wrap justify-center gap-4 text-sm md:text-base'>
                            {menu.map((item) => (
                                <li key={item}><a href='#' className='hover:text-orange-400'>{item}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Desktop actions */}
                    <div className='hidden md:flex flex-wrap items-center justify-center gap-3'>
                        <IoMdSearch className='text-xl' />
                        <IoCall className='text-xl' />
                        <button className='border border-white hover:bg-gray-600 text-white font-bold py-2 px-4 rounded'>Student Login</button>
                        <button className='bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded'>Enroll Now</button>
                    </div>

                    {/* Mobile menu toggle */}
                    <button
                        type='button'
                        className='inline-flex items-center justify-center rounded-md border border-white p-2 text-white hover:bg-white/10 md:hidden'
                        aria-label='Toggle navigation menu'
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        {menuOpen ? <HiX className='h-6 w-6' /> : <HiMenu className='h-6 w-6' />}
                    </button>
                </div>
            </nav>

            {/* Mobile slide-out menu */}
            <div className={`fixed inset-y-0 right-0 z-50 w-[85vw] max-w-xs transform bg-gray-900 text-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='flex items-center justify-between border-b border-gray-700 px-4 py-4'>
                    <span className='text-lg font-semibold'>Menu</span>
                    <button
                        type='button'
                        className='inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10'
                        aria-label='Close menu'
                        onClick={() => setMenuOpen(false)}
                    >
                        <HiX className='h-6 w-6' />
                    </button>
                </div>

                <div className='px-4 py-6'>
                    <ul className='flex flex-col gap-4 text-base'>
                        {menu.map((item) => (
                            <li key={item}>
                                <a
                                    href='#'
                                    className='block rounded-md px-3 py-2 text-white hover:bg-gray-800 hover:text-orange-400'
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className='mt-6 flex flex-col gap-3'>
                        <button className='w-full rounded-md border border-white bg-transparent px-4 py-3 text-white hover:bg-gray-800'>Student Login</button>
                        <button className='w-full rounded-md bg-orange-500 px-4 py-3 text-white hover:bg-orange-600'>Enroll Now</button>
                    </div>

                    <div className='mt-6 flex items-center justify-start gap-3 text-xl text-white'>
                        <IoMdSearch />
                        <IoCall />
                    </div>
                </div>
            </div>

            {/* Mobile overlay */}
            {menuOpen && (
                <button
                    type='button'
                    className='fixed inset-0 z-40 bg-black/50 md:hidden'
                    onClick={() => setMenuOpen(false)}
                    aria-label='Close mobile menu overlay'
                />
            )}
        </>
    )
}

export default Navbar