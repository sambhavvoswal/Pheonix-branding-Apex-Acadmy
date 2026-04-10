import { useState, useEffect, useRef } from 'react'
import logo from '../assets/apex-logo.png'
import { IoMdSearch } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { HiMenu, HiX } from "react-icons/hi";

const menu = ['Home', 'Courses', 'Results', 'Faculty', 'About Us', 'Contact']

const Navbar = () => {
    const [menuOpen, setMenuOpen]     = useState(false)
    const [visible, setVisible]       = useState(true)
    const [scrolled, setScrolled]     = useState(false)
    const lastScrollY                 = useRef(0)

    useEffect(() => {
        const onScroll = () => {
            const current = window.scrollY
            setVisible(current < lastScrollY.current || current < 60)
            setScrolled(current > 40)
            lastScrollY.current = current
        }
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    return (
        <>
            <style>{`
                .nav-link {
                    position: relative;
                    font-family: 'Nunito', sans-serif;
                    font-size: 0.875rem;
                    font-weight: 600;
                    color: rgba(255,255,255,0.85);
                    text-decoration: none;
                    padding: 4px 2px;
                    transition: color 0.25s ease;
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -2px; left: 0;
                    width: 0; height: 1.5px;
                    background: #FF6B35;
                    border-radius: 2px;
                    transition: width 0.3s cubic-bezier(0.4,0,0.2,1);
                }
                .nav-link:hover { color: #fff; }
                .nav-link:hover::after { width: 100%; }

                .mobile-link {
                    display: block;
                    font-family: 'Nunito', sans-serif;
                    font-size: 1rem;
                    font-weight: 700;
                    color: rgba(255,255,255,0.8);
                    padding: 10px 14px;
                    border-radius: 10px;
                    transition: all 0.2s ease;
                    text-decoration: none;
                }
                .mobile-link:hover {
                    background: rgba(255,107,53,0.12);
                    color: #FF6B35;
                    padding-left: 20px;
                }
            `}</style>

            <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet" />

            <nav
                style={{
                    position: 'fixed',
                    insetInline: 0,
                    top: scrolled ? '12px' : '0px',
                    zIndex: 50,
                    transform: visible ? 'translateY(0)' : 'translateY(-120%)',
                    transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1), top 0.4s ease, background 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease',
                    margin: scrolled ? '0 16px' : '0',
                    borderRadius: scrolled ? '16px' : '0px',
                    background: scrolled
                        ? 'rgba(13, 24, 39, 0.55)'
                        : 'rgba(13, 24, 39, 0.75)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: scrolled
                        ? '1px solid rgba(255,255,255,0.10)'
                        : '1px solid transparent',
                    boxShadow: scrolled
                        ? '0 8px 32px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.07)'
                        : 'none',
                }}
            >
                <div className='mx-auto flex items-center justify-between gap-4 px-4 py-3 md:px-6'>

                    {/* Logo */}
                    <img className='h-10 w-auto md:h-12 shrink-0' src={logo} alt="Apex Logo" />

                    {/* Mobile title */}
                    <div
                        className='flex-1 text-center text-base font-black uppercase tracking-wide md:hidden'
                        style={{ fontFamily: "'Nunito', sans-serif", color: '#fff' }}
                    >
                        Apex Academy
                    </div>

                    {/* Desktop nav links */}
                    <ul className='hidden md:flex items-center gap-6'>
                        {menu.map((item) => (
                            <li key={item}>
                                <a href='#' className='nav-link'>{item}</a>
                            </li>
                        ))}
                    </ul>

                    {/* Desktop actions */}
                    <div className='hidden md:flex items-center gap-3'>
                        {/* Search */}
                        <button
                            className='w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200'
                            style={{
                                background: 'rgba(255,255,255,0.07)',
                                border: '1px solid rgba(255,255,255,0.10)',
                                color: 'rgba(255,255,255,0.7)',
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.14)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
                        >
                            <IoMdSearch size={16} />
                        </button>

                        {/* Call */}
                        <button
                            className='w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-200'
                            style={{
                                background: 'rgba(255,255,255,0.07)',
                                border: '1px solid rgba(255,255,255,0.10)',
                                color: 'rgba(255,255,255,0.7)',
                            }}
                            onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,0.14)'}
                            onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.07)'}
                        >
                            <IoCall size={15} />
                        </button>

                        {/* Student Login */}
                        <button
                            className='text-sm font-bold px-4 py-2 rounded-lg transition-all duration-200'
                            style={{
                                fontFamily: "'Nunito', sans-serif",
                                background: 'rgba(255,255,255,0.07)',
                                border: '1px solid rgba(255,255,255,0.15)',
                                color: 'rgba(255,255,255,0.85)',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.13)'
                                e.currentTarget.style.color = '#fff'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                                e.currentTarget.style.color = 'rgba(255,255,255,0.85)'
                            }}
                        >
                            Student Login
                        </button>

                        {/* Enroll Now */}
                        <button
                            className='text-sm font-bold px-5 py-2 rounded-lg transition-all duration-300'
                            style={{
                                fontFamily: "'Nunito', sans-serif",
                                background: '#FF6B35',
                                color: '#fff',
                                boxShadow: '0 4px 14px rgba(255,107,53,0.35)',
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.background = '#e85a25'
                                e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,107,53,0.5)'
                                e.currentTarget.style.transform = 'scale(1.03)'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.background = '#FF6B35'
                                e.currentTarget.style.boxShadow = '0 4px 14px rgba(255,107,53,0.35)'
                                e.currentTarget.style.transform = 'scale(1)'
                            }}
                        >
                            Enroll Now
                        </button>
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        type='button'
                        className='inline-flex items-center justify-center rounded-lg p-2 md:hidden transition-all duration-200'
                        style={{
                            background: 'rgba(255,255,255,0.07)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            color: '#fff',
                        }}
                        aria-label='Toggle navigation menu'
                        onClick={() => setMenuOpen((prev) => !prev)}
                    >
                        {menuOpen ? <HiX className='h-5 w-5' /> : <HiMenu className='h-5 w-5' />}
                    </button>
                </div>
            </nav>

            {/* Mobile drawer */}
            <div
                className='fixed inset-y-0 right-0 z-50 w-[80vw] max-w-xs md:hidden'
                style={{
                    transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
                    transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
                    background: 'rgba(10, 18, 32, 0.88)',
                    backdropFilter: 'blur(24px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                    borderLeft: '1px solid rgba(255,255,255,0.09)',
                    boxShadow: '-16px 0 48px rgba(0,0,0,0.5)',
                }}
            >
                {/* Drawer header */}
                <div
                    className='flex items-center justify-between px-5 py-4'
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
                >
                    <span
                        className='text-base font-black text-white'
                        style={{ fontFamily: "'Nunito', sans-serif" }}
                    >
                        Menu
                    </span>
                    <button
                        type='button'
                        className='flex items-center justify-center rounded-lg p-1.5 transition-all duration-200'
                        style={{
                            background: 'rgba(255,255,255,0.07)',
                            border: '1px solid rgba(255,255,255,0.12)',
                            color: '#fff',
                        }}
                        aria-label='Close menu'
                        onClick={() => setMenuOpen(false)}
                    >
                        <HiX className='h-5 w-5' />
                    </button>
                </div>

                <div className='px-4 py-6 flex flex-col gap-6'>
                    {/* Nav links */}
                    <ul className='flex flex-col gap-1'>
                        {menu.map((item) => (
                            <li key={item}>
                                <a
                                    href='#'
                                    className='mobile-link'
                                    onClick={() => setMenuOpen(false)}
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Divider */}
                    <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)' }} />

                    {/* CTA buttons */}
                    <div className='flex flex-col gap-3'>
                        <button
                            className='w-full rounded-xl py-3 text-sm font-bold transition-all duration-200'
                            style={{
                                fontFamily: "'Nunito', sans-serif",
                                background: 'rgba(255,255,255,0.07)',
                                border: '1px solid rgba(255,255,255,0.15)',
                                color: 'rgba(255,255,255,0.85)',
                            }}
                        >
                            Student Login
                        </button>
                        <button
                            className='w-full rounded-xl py-3 text-sm font-bold transition-all duration-200'
                            style={{
                                fontFamily: "'Nunito', sans-serif",
                                background: '#FF6B35',
                                color: '#fff',
                                boxShadow: '0 4px 16px rgba(255,107,53,0.35)',
                            }}
                        >
                            Enroll Now
                        </button>
                    </div>

                    {/* Icons row */}
                    <div className='flex items-center gap-3'>
                        {[<IoMdSearch size={18} />, <IoCall size={17} />].map((icon, i) => (
                            <button
                                key={i}
                                className='flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200'
                                style={{
                                    background: 'rgba(255,255,255,0.07)',
                                    border: '1px solid rgba(255,255,255,0.10)',
                                    color: 'rgba(255,255,255,0.7)',
                                }}
                            >
                                {icon}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile overlay */}
            {menuOpen && (
                <button
                    type='button'
                    className='fixed inset-0 z-40 md:hidden'
                    style={{ background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(2px)' }}
                    onClick={() => setMenuOpen(false)}
                    aria-label='Close mobile menu overlay'
                />
            )}
        </>
    )
}

export default Navbar