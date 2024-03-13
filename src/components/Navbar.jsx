import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-scroll'
const Navbar = () => {
    const links=[
        {
            id:1,
            link:'home',
        },
        {
            id:2,
            link:'about',
        },
        {
            id:3,
            link:'portfolio',
        },
        {
            id:4,
            link:'skills'
        },
        {
            id:5,
            link:'contact',
        }
    ]
    const [nav,setNav]=useState(false);
  return (
    <div className='flex justify-between items-center w-full h-20 text-white fixed bg-black px-4'>
        <div>
            <h1 className='text-5xl font-signature ml-2'>Pavan</h1>
        </div>
        <ul className='hidden md:flex'>
            {
                links.map(link =>(
 <li key={link.id} className='px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200'>
    <Link to={link.link} smooth duration={500}>{link.link}</Link>
 </li>
                ))
            }
           
        </ul>
        <div onClick={()=>setNav(!nav)} className='cursor-pointer px-4 z-10 text-gray-600 md:hidden'>
           {nav ? <FaTimes size={30}/> :  <FaBars size={30}/>}
        </div>
        {nav &&
           <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to bg-gray-700 text-white'>
           {
                   links.map(link =>(
                       <li key={link.id} className='px-4 cursor-pointer capitalize py-6 text-4xl text-white hover:scale-105 duration-200'><Link onClick={()=>setNav(!nav)} to={link.link} smooth duration={500}>{link.link}</Link></li>
                   ))
               }
           </ul>
        }
        
      
    </div>
  )
}

export default Navbar
