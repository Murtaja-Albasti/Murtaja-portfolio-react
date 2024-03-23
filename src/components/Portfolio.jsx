import React from 'react'
import AMA_shop from '../assets/portfolio/AMA-shop.png'
import HolyQuran from '../assets/portfolio/HolyQuran.png'
import KheffaStartup from '../assets/portfolio/KheffaStartup.png'



const Portfolio = () => {
  

  const portfolios = [
    {
      id:1,
      src:AMA_shop,
      link:'https://github.com/Murtaja-Albasti/AMA-shop-application'
    },
    {
      id:2,
      src:HolyQuran,
      link:'https://github.com/Murtaja-Albasti/AMA-shop-application'
    },
    {
      id:3,
      src:KheffaStartup,
      link:'https://github.com/Murtaja-Albasti/SPA-kheffa-startup'
    },
  ]
  return (
    <div name="portfolio" className=' bg-gradient-to-b from-black to-blue-950 w-full text-white md:h-screen '>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-blue-950'>Portfolio</p>
          <p className=' py-6 '>Check out some of my work right here</p>
        </div>

        <div className='justify-center items-center grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
        {
          portfolios.map(({id,src,link}) =>(
            
          <div key={id} className=' shadow-md shadow-blue-900 rounded-lg '>
            <img src={src} alt="" className=" rounded-md duration-200 hover:scale-105"/>
            <div className='flex items-center justify-center'>
              <a href={link}><button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Github repo.</button></a>
            </div>
          </div>
        
          ))
        }
        </div>
        

      </div>
    </div>
  )
}

export default Portfolio