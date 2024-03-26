import React, { useEffect, useState } from 'react'
import axios  from "axios";
import { NavLink } from 'react-router-dom';
import "./style.css";

export default function Navbar() {

    const baseUrl = "https://newsportal-1.onrender.com/category/getAll";
    const [category, setCategory] = useState([]);

    useEffect(() => {

        (async ()=> {

            const res = await axios.get(baseUrl);
            setCategory(res.data);

        })()

    }, [])


  return (
    <div className="navbar bg-gray-800 text-white">
        <div className="navbar-start">
            <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-gray-800">
               
                <NavLink className=' hover:text-gray-300 duration-100 text-lg' to='/'> Home</NavLink>
               
                {
                    category.map( (cate, index) => {
                        return <NavLink className=' hover:text-gray-300 duration-100 text-lg' to={`/${cate.categoryName}`} key={index}>
                        {cate.categoryName}
                      </NavLink>
                    })
                }
            </ul>
            </div>
            <a className="btn btn-ghost text-xl">SamNews</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">

            <NavLink className=' hover:text-gray-300 duration-100 text-lg' to='/'> Home</NavLink>
             {
                category.map( (cate, index) => {
                    return <NavLink to={`/${cate.categoryName}`} className=' px-3 hover:text-gray-300 duration-100 text-lg' key={index}>
                    {cate.categoryName}
                  </NavLink>
                })
             }

            </ul>
        </div>
        </div>
    )
}
