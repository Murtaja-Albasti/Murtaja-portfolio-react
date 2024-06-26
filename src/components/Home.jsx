import React from 'react'
import HeroImg from '../assets/myPic.png'
import { FaArrowRightLong } from "react-icons/fa6";
import {Link} from 'react-scroll'
import Typed from "typed.js"




function Home() {
   


    const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Full-stack dev.', 'Reverse Engineer.', 'Game Hacker.', 'AI researcher.'],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);


  return (
    <div name="home" className='w-full bg-gradient-to-b from-black via-black to-blue-950 h-screen'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-6xl font-bold text-gray-500'>
                    i'am <span ref={el} className=' text-indigo-800'>Full-Stack Developer</span>
                </h2>
                <p className='text-gray-500 py-4 max-w-md '>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem omnis cum excepturi sapiente tempore cupiditate ipsum dolorum ipsa architecto culpa exercitationem alias delectus quisquam, quaerat similique animi assumenda eligendi eaque.
                </p>

                <div>
                    <Link to='portfolio' smooth duration={500} className=' group  text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-700 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className=' mx-2 group-hover:rotate-90 duration-300'>
                        <FaArrowRightLong  />
                        </span>
                    </Link>
                </div>
            </div>
            <div className=' bg-gradient-to-tr from-black to-blue-950 rounded-2xl mx-20'>
                <img src={HeroImg} alt="my profile" className=' rounded-2xl mx-auto  w-2/3  md:w-full' />
            </div>
        </div>
    </div>
  )
}

export default Home