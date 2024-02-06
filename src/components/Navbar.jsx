import React from 'react';
import logo from "../assets/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import ActiveLink from './ActiveLink';

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className='bg-white border-b shadow-sm sticky top-0 z-10 '>
            <nav className='flex justify-between items-center px-3 max-w-5xl mx-auto'>
                
                <div className='cursor-pointer' onClick={()=> navigate("/")}>
                    <h2 className='font-bold text-2xl py-3 text-red-800 font-serif'>ExploreWorld</h2>
                </div>

                <div>
                    <ul className='flex space-x-10 text-gray-500 font-semibold'>
                        <ActiveLink to="/">Home</ActiveLink>
                        <ActiveLink to="/offers">Offers</ActiveLink>
                        <ActiveLink to="/sign-in">SignIn</ActiveLink>
                        <ActiveLink to="/blog">Blogs</ActiveLink>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;