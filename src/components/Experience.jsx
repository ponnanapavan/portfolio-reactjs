import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import  react from '../assets/react.png'
import tailwindcss from '../assets/tailwind.png'
import github from '../assets/github.png'
import mongodb from '../assets/mongoDb.png'
import expressjs from '../assets/expressjs.png'
import nodejs from '../assets/nodejs.png'
import dsa from '../assets/dsa.png'
const Experience = () => {
    const skills=[
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'

        },
        {
            id:2,
            src:css,
            title:'CSS',
            style:'shadow-blue-500'

        },
        {
            id:3,
            src:javascript,
            title:'JAVASCRIPT',
            style:'shadow-yellow-500'

        },
        {
            id:4,
            src:react,
            title:'REACT',
            style:'shadow-blue-600'

        },
        {
            id:5,
            src:tailwindcss,
            title:'TAILWIND-CSS',
            style:'shadow-sky-500'

        },
        {
            id:6,
            src:github,
            title:'GITHUB',
            style:'shadow-gray-500'
        },
        {
            id:7,
            src:mongodb,
            title:'MONGODB',
            style:'shadow-green-500'
        },
        {
            id:8,
            src:expressjs,
            title:'EXPRESS JS',
            style:'shadow-white'
        },
        {
            id:9,
            src:nodejs,
            title:'NODE JS',
            style:'shadow-green-700'
        },
        {
            id:10,
            src:dsa,
            title:'DSA',
            style:'shadow-violet-500'
        }
    ]
  return (
    <div name='skills' className='bg-gradient-to-b from-gray-800 to-black w-full h-full'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Skills</p>
            <p className='py-6'> These are the technologies I've worked </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            {skills.map(({id,src,title,style})=>(
                   <div key={id} className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg ${style}`}>
                   <img src={src} className='w-20 mx-auto' alt="" />
                   <p className='mt-4'>{title}</p>
               </div>
            ))}
            
        </div>
      </div>
    </div>
  )
}

export default Experience
