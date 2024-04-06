import React from "react";

import movieapp from '../assets/movieapp.png'
import whatsapp from "../assets/whatsapp.png"
import foodrecipe from "../assets/foodrecipe.png"
import gpt3 from "../assets/gpt3.png";
import reduxtoolkit from "../assets/reduxtoolkit.png"
import ecommerce from "../assets/ecommerce.png"
import foodrecipemern from "../assets/foodrecipemern.png"
import vrworld from "../assets/vrworld.png"
const Portfolio = () => {
  const portfolios = [
    {
      id:7,
      src:foodrecipemern,
      demo:"https://foodrecipe-mern-client-qcx7.vercel.app/",
      code:"https://github.com/ponnanapavan/foodrecipe-mern-client"
    },
    {
       id:8,
       src:vrworld,
       demo:"https://github.com/ponnanapavan/react-vr-world",
       code:"https://react-vr-world.vercel.app/"
    },
    {
      id: 1,
      src: movieapp,
      demo: "https://65bb681ee796a55c660c981f--resilient-fenglisu-0c5bb0.netlify.app/",
      code:"https://github.com/ponnanapavan/internshala.git"
    },
    
    {
      id: 2,
      src: whatsapp,
      demo: "https://chat-app-websitemern.onrender.com/",
      code:"https://github.com/ponnanapavan/chat-mern-website.git"
    },
    
    {
      id: 3,
      src: foodrecipe,
      demo: "https://65b14fde0afe752150c78859--venerable-faloodeh-be2c8c.netlify.app/",
      code:"https://github.com/ponnanapavan/gpt3-modern-layout.git"
    },
    {
      id: 4,
      src: gpt3,
      demo: "https://gpt3-modern-layout.vercel.app/",
      code:"https://github.com/ponnanapavan/gpt3-modern-layout.git"
    },
    {
          id:5,
          src:reduxtoolkit,
          demo:"https://github.com/ponnanapavan/todo-redux",
          code:"https://github.com/ponnanapavan/todo-redux"
    },
    {
      id:6,
      src:ecommerce,
      demo:"https://github.com/ponnanapavan/eccomerceapi",
      code:"https://github.com/ponnanapavan/eccomerceapi"
    },
   
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo,code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {demo && (
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    <a href={demo}>Demo</a>
                  </button>
                )}
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code}> Code</a>
             
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
