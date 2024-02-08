import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { IoRestaurantSharp } from "react-icons/io5";
import { AuthContext } from '../Provider/AuthProvider';


const NavSection = () => {
    const [toggle, setToggle] = useState(false)
    const { user, logOut } = useContext(AuthContext)
    const navigate = useNavigate();
  
    return (
        <nav className='bg-white border-b shadow-sm sticky top-0 z-10 '>
            <div className='flex justify-between items-center px-3 max-w-5xl mx-auto'>
                <div className='flex justify-center items-center gap-2'>
                    <div className='cursor-pointer' onClick={() => navigate("/")}>
                        <h2 className='font-bold text-2xl py-3 text-red-900 font-serif'>ExploreWorld</h2>
                    </div>
                </div>
                <span className="md:hidden text-xl">
                    {
                        toggle ? <MdOutlineRestaurantMenu onClick={() => setToggle(!toggle)} /> : <HiOutlineMenuAlt2 onClick={() => setToggle(!toggle)} />
                    }
                </span>
                <ul className={`flex space-x-5 items-center duration-200 z-50 flex-col py-5 md:p-0 text-white md:text-gray-500 font-semibold bg-opacity-80 top-14 bg-black md:bg-transparent font-serif w-full md:w-auto md:flex-row gap-3 absolute md:static  ${toggle ? "left-0" : "-left-full"}`}>
                    <li>
                        <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/offers" className={({ isActive }) => isActive ? "active" : ""}>Offers</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}>Blogs</NavLink>
                    </li>

                    <li>
                        {
                            user ? <button onClick={logOut}><Link to="/">SignOut</Link></button>
                                :
                            <button><Link to="/sign-in">SignIn</Link></button>
                        }
                    </li>
                    
                    <li>
                        {
                            user?.photoURL && user?.photoURL ? <img className="w-[35px] h-[35px] rounded-full" src={user?.photoURL} title={user?.displayName} alt="" /> :
                            
                           user && <img className="w-[35px] h-[35px] rounded-full" src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" title={user?.displayName} />
                        }
                    </li>

                </ul>
            </div>

        </nav>
    );
};

export default NavSection;