import React, { useContext } from 'react';
import logo from "../assets/logo.png"
import { Link, useNavigate } from 'react-router-dom';
import ActiveLink from './ActiveLink';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate();

    console.log(user);



    return (
        <div className='bg-white border-b shadow-sm sticky top-0 z-10 '>
            <nav className='flex justify-between items-center px-3 max-w-5xl mx-auto'>

                <div className='cursor-pointer' onClick={() => navigate("/")}>
                    <h2 className='font-bold text-2xl py-3 text-red-800 font-serif'>ExploreWorld</h2>
                </div>

                <div>
                    <ul className='flex space-x-10 text-gray-500 font-semibold'>
                        <ActiveLink to="/">Home</ActiveLink>
                        <ActiveLink to="/offers">Offers</ActiveLink>
                        <ActiveLink to="/blog">Blogs</ActiveLink>
                        <li>
                            {
                                user ? <button onClick={logOut}><Link to="/">LogOut</Link></button>
                                    :
                                    <button ><Link to="/sign-in">SignIn</Link></button>
                            }
                        </li>
                        <li>
                            {
                                user?.photoURL ? <img className="w-[35px] h-[35px] rounded-full" src={user?.photoURL} /> : <img className="w-[35px] h-[35px] rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRcCVnNJOtjNxvYRNelGKupbFvhOHcTl2vPMZgoGEogIFBc_36_gfu4OxDgY_ycVMsngM&usqp=CAU" />

                            }
                        </li>
                     
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;