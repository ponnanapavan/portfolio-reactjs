import React from "react";

import movieapp from '../assets/movieapp.png'
import whatsapp from "../assets/whatsapp.png"
import foodrecipe from "../assets/foodrecipe.png"
import gpt3 from "../assets/gpt3.png";
import reduxtoolkit from "../assets/reduxtoolkit.png"
import ecommerce from "../assets/ecommerce.png"
import foodrecipemern from "../assets/foodrecipemern.png"
import vrworld from "../assets/vrworld.png"
import blog from "../assets/blog.png"
const Portfolio = () => {
  const portfolios = [
    {
      id:7,
      src:foodrecipemern,
      demo:"https://foodrecipe-mern-client-qcx7.vercel.app/",
      code:"https://github.com/ponnanapavan/foodrecipe-mern-client",
      title:"FullStack Foodrecipe"
    },
    {
       id:8,
       src:vrworld,
       demo:"https://react-vr-world.vercel.app/",
       code:"https://github.com/ponnanapavan/react-vr-world",
       title:"React VR"
    },
    {
      id: 1,
      src: movieapp,
      demo: "https://65bb681ee796a55c660c981f--resilient-fenglisu-0c5bb0.netlify.app/",
      code:"https://github.com/ponnanapavan/internshala.git",
      title:"ReactJs MovieApp"
    },
    
    {
      id: 2,
      src: whatsapp,
      demo: "https://chat-app-websitemern.onrender.com/",
      code:"https://github.com/ponnanapavan/chat-mern-website.git",
      title:"Mern Chat_app"

    },
    
    {
      id: 3,
      src: foodrecipe,
      demo: "https://65b14fde0afe752150c78859--venerable-faloodeh-be2c8c.netlify.app/",
      code:"https://github.com/ponnanapavan/gpt3-modern-layout.git",
      title:"Reactjs foodRecipe"
    },
    {
      id: 4,
      src: gpt3,
      demo: "https://gpt3-modern-layout.vercel.app/",
      code:"https://github.com/ponnanapavan/gpt3-modern-layout.git",
      title:"ReactJs Modern Layout"
    },
    {
          id:5,
          src:blog,
          demo:"https://github.com/ponnanapavan/mern_client",
          code:"https://github.com/ponnanapavan/mern_client",
          title:"FullStack Blog"
    },
    {
      id:6,
      src:ecommerce,
      demo:"https://github.com/ponnanapavan/eccomerceapi",
      code:"https://github.com/ponnanapavan/eccomerceapi",
      title:"FullStack Ecommerce"
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

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, src, demo,code, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex justify-center items-center text-1xl font-bold mt-2">
                {title}
              </div>
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
