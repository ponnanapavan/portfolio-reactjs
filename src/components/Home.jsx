import React from 'react';
import HeroImage from '../assets/heroImage (2).png';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between h-full px-4">
        <div className="flex flex-col justify-center h-full   md:w-auto ">
          <h2 className="text-2xl sm:text-5xl font-bold text-white">
            <span className="typing-animation">I'm a Full Stack Developer</span>
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm ponnana Pavan, transitioning to web development with a keen interest in crafting innovative solutions. Eager to explore React, Tailwind, Nodejs, and Expressjs to build impactful web applications.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className='flex justify-center items-center mx-auto w-full'>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl object-fit sm:ml-10"
            style={{ width: '100%' }} 
          />
        </div>
      </div>

      {/* Media Query for text typing animation */}
      <style>
        {`
          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }

          .typing-animation {
            display: inline-block;
            overflow: hidden;
            white-space: nowrap;
            border-right: 0.15em solid transparent; /* Adjust the border style */
            background: linear-gradient(to right, #ff6ec7, #ff7e5f, #ffcedb); /* Gradient colors */
            -webkit-background-clip: text; /* Apply the gradient to text */
            background-clip: text; /* Apply the gradient to text */
            color: transparent; /* Hide the original text */
            animation: typing 4s steps(70, end) infinite; /* Adjust duration and steps as needed */
          }

          @media screen and (max-width: 768px) {
            .rounded-2xl {
              max-height: 300px; /* Adjust the max-height for mobile */
              max-width: 90%;
            }
          }

          @media screen and (min-width: 1024px) {
            .rounded-2xl {
              max-height: 450px; /* Set max-height for large screens */
              max-width: 90%;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Home;
