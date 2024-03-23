import React from 'react'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import { MdOutlineMail } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
const SocialLinks = () => {
    const links = [
        {
            id:1,
            child:(
                <>
                LinkedIn <FaLinkedin size={30} />
                </>
            ),
            href:'https://www.linkedin.com/in/mohamed-albasti-a60735200/',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                Github <FaGithub size={30} />
                </>
            ),
            href:'https://github.com/Murtaja-Albasti',
            
        },
        {
            id:3,
            child:(
                <>
                Mail <MdOutlineMail size={30} />
                </>
            ),
            href:'mailto:albasti1100@gmail.com',
            
        },
        {
            id:4,
            child:(
                <>
                Resume <BsFillPersonLinesFill size={30} />
                </>
            ),
            href:'/MOHAMED_ALBASTI_CV.pdf',
            style:'rounded-br-md',
            download:true
        },
    ]
  return (
    <div className=' hidden flex-col top-[35%] left-0 fixed lg:flex'>
        <ul>

            {links.map(({id,child,href,style,download}) =>(
                 // eslint-disable-next-line
                <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-black ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300" + " " + style}>
                <a href={href} className='flex justify-between items-center w-full text-white' download={download} target='_blank' rel='noreferrer'>
                   {child}
                </a>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default SocialLinks