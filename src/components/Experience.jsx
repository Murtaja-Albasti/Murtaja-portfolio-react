import React from 'react'; 
import html from "../assets/html.png"
import css from "../assets/css.png"
import sql from "../assets/sql.png"
import tensorflow from "../assets/tensorflow.png"
import xdbg64 from "../assets/xdbg64.png"
import github from "../assets/github.png"
import tailwind from "../assets/tailwind.png"
import scikitLearn from "../assets/scikitLearn.png"
import react from "../assets/react.png"
import javascript from "../assets/javascript.png"



const Experience = () => {

    const techs = [
        {
            id:1,
            src:html,
            title:'HTML',
            style:'shadow-orange-500'
        },
        {
            id:2,
            src:css,
            title:'css',
            style:'shadow-blue-500'
        },
        {
            id:3,
            src:sql,
            title:'SQL',
            style:'shadow-gray-400'
        },
        {
            id:4,
            src:tensorflow,
            title:'TENSORFLOW',
            style:'shadow-orange-800'
        },
        {
            id:5,
            src:scikitLearn,
            title:'SCIKITLEARN',
            style:'shadow-blue-500'
        },
        {
            id:6,
            src:github,
            title:'GITHUB',
            style:'shadow-gray-400'
        },
        {
            id:7,
            src:xdbg64,
            title:'xdbg64',
            style:'shadow-red-900'
        },
        {
            id:8,
            src:tailwind,
            title:'TAILWIND',
            style:'shadow-sky-400'
        },
        {
            id:9,
            src:react,
            title:'REACT',
            style:'shadow-blue-600'
        },
        {
            id:10,
            src:javascript,
            title:'javascript',
            style:'shadow-yellow-500'
        },
    ]
  return (
    <div name='experience' className=' bg-gradient-to-b from-blue-950 to-black w-full h-screen'>
        <div className='text-white max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold border-b-4 border-blue-900 p-2 inline'>
                        Experience
                    </p>
                    <p className='py-6'>these are the technologies i've worked with</p>
                </div>
                <div className=' w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>


                        {techs.map(({id,src,title,style})=>(
                                <div key={id} className={` shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                                <img src={src} alt="" className=' w-20 mx-auto'/>
                                <p className='mt-4'>
                                    {title}
                                </p>
                            </div>
                        ))}

                    
                </div>
        </div>
    </div>
  )
}

export default Experience