import React, { useContext, useState } from 'react';
import logo from '../../../assest/LOGO.png';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../context/AuthProvider';
import toast from 'react-hot-toast';
import userImage from '../../../assest/user profile.jpg';


const Header = () => {
    const { user, userSignOut } = useContext(AuthContext);
    let arr = [true, false, false, false, false, false];
    const [style, setStyle] = useState(arr);
    const [dropDown, setDropDown] = useState(true);
    const [text] = useState("");

    const selected = (props) => {
        let newArr = [...arr];
        for (let i = 0; i < newArr.length; i++) {
            newArr[i] = false;
        }
        newArr[props] = true;
        setStyle(newArr);
    };

    const handleSignOut = () => {
        userSignOut()
            .then(() => {
                toast.success('Log out successfully!');
            })
            .then(error => console.error(error));
    };

    return (
        <div className="2xl:container 2xl:mx-auto">
            <div className="bg-green-500 rounded shadow-lg py-5 px-7">
                <nav className="flex justify-between items-center">
                    <div className="flex items-center space-x-3 lg:pr-16 pr-6">
                        <Link to='/'>
                            <img src={logo} className="mr-3 h-7 sm:h-12" alt='' />
                        </Link>
                    </div>
                    {/* For medium and plus sized devices */}
                    <div className="hidden md:flex flex-auto space-x-2">
                        <Link to='/' onClick={() => selected(0)} className={`${style[0] ? 'text-white bg-green-600' : 'text-gray-600 border border-white bg-gray-50'}  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>Home</Link>

                        <Link to='/courses' onClick={() => selected(1)} className={`${style[1] ? 'text-white bg-green-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>Courses</Link>

                        <Link to='/blog' onClick={() => selected(2)} className={`${style[2] ? 'text-white bg-green-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>Blog</Link>

                        <Link to='/faq' onClick={() => selected(3)} className={`${style[3] ? 'text-white bg-green-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>Faq</Link>


                    </div>
                    <div className=" flex space-x-5 justify-center items-center pl-2">
                        <div className="flex justify-center items-center relative cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ">
                            <Link>
                                {user?.uid || user?.email || user?.photoURL ?
                                    <>
                                        <img style={{ height: '40px', width: '40px', borderRadius: '50%' }} src={user?.photoURL} alt="" title={user?.displayName} />
                                    </>
                                    :
                                    <>
                                        <img style={{ height: '40px', width: '40px', borderRadius: '50%' }} src={userImage} alt="" title={user?.displayName} />

                                    </>
                                }
                            </Link>
                            {user?.uid ?
                                <>
                                    <button onClick={handleSignOut}>
                                        <Link onClick={() => selected(4)} className={`${style[4] ? 'text-white bg-green-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2 font-normal text-xs leading-3 shadow-md rounded mx-1`}>Sign out</Link>
                                    </button>
                                </>
                                :
                                <>
                                    <Link to='/login' onClick={() => selected(5)} className={`${style[5] ? 'text-white bg-green-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded mx-1`}>Login</Link>

                                    <Link to='/register' onClick={() => selected(6)} className={`${style[6] ? 'text-white bg-green-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded mx-1`}>Register</Link>
                                </>
                            }
                            <label for="Toggle1" className="inline-flex items-center space-x-4 cursor-pointer text-gray-100">
                                <span className="relative">
                                    <input id="Toggle1" type="checkbox" className="hidden peer" />
                                    <div className="w-10 h-6 rounded-full shadow-inner bg-white peer-checked:bg-green-400"></div>
                                    <div className="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-800"></div>
                                </span>
                            </label>
                        </div>
                    </div>
                </nav>
                {/* for smaller devcies */}
                <div className="block md:hidden w-full mt-5 ">
                    <div onClick={() => setDropDown(!dropDown)} className="cursor-pointer px-4 py-3 text-white bg-green-600 rounded flex justify-between items-center w-full">
                        <div className="flex space-x-2">
                            <span id="s1" className={`${text.length !== 0 ? '' : 'hidden'} font-semibold text-sm leading-3`}>Selected: </span><p id="textClicked" className="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer ">{text ? text : "Our Menus"}</p>
                        </div>
                        <svg id="ArrowSVG" className={`${dropDown ? '' : 'rotate-180'} transform duration-100`} width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 9L12 15L18 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                    <div className=" relative">
                        <div id="list" className={`${dropDown ? 'hidden' : 'block'} font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md`}>
                            <Link to='/' onClick={() => selected(0)} className={`${style[0] ? 'text-white bg-green-600' : 'text-gray-600 border border-white bg-gray-50'}  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded mx-1`}>Home</Link>

                            <Link to='/courses' onClick={() => selected(1)} className={`${style[1] ? 'text-white bg-green-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded mx-1`}>Courses</Link>


                            <Link to='/blog' onClick={() => selected(2)} className={`${style[2] ? 'text-white bg-green-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded mx-1`}>Blog</Link>

                            <Link to='/faq' onClick={() => selected(3)} className={`${style[3] ? 'text-white bg-green-600' : 'text-gray-600 border border-white bg-gray-50'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}>Faq</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;