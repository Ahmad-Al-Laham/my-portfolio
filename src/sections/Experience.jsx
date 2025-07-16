import { Canvas } from '@react-three/fiber'
import React from 'react'
import {workExperiences }from '../constance'
import { div } from 'three/tsl'
const Experience = () => {
  return (
    <section className='sm:px-10 px-5' id='work'>
        <div className='w-full text-neutral-400'>
            <h3 className='sm:text-4xl text-3xl font-semibold bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-transparent'>
                My Work Experience
            </h3>
            <div className='grid py-[20px] pb-[40px] grid-cols-1 gap-5 mt-1'>
                <div className='col-span-2 rounded-lg bg-black-200 border border-[#1C1C21]'>
                    <div className='sm:py-10 py-5 sm:px-5 px-2.5'>
                        {workExperiences.map(({id , name , pos , icon , duration , title , animation }) =>(
                                <div key={id} className='group grid grid-cols-[auto_1fr] items-start gap-5  transition-all ease-in-out duration-500 cursor-pointer hover:bg-[#1C1C21] rounded-lg sm:px-5 px-2.5'>
                                    <div className='flex flex-col h-full justify-start items-center py-2'>
                                        <div className='rounded-3xl w-16 h-16 p-2 bg-[#1f1f24]'>
                                            <img src={icon} alt="logo" className='h-full w-full' />
                                        </div>
                                        <div className='flex-1 w-0.5 mt-4 h-full bg-[#1C1C21] group-hover:bg-[#404052] group-last:hidden'/>
                                    </div>
                                    <div className='sm:p-5 px-2.5 py-5'>
                                        <p className='font-bold text-white'>
                                                {name}
                                        </p>
                                        <p className='text-sm mb-5 '>
                                            {pos} -- {duration}
                                        </p>
                                        <p className='group-hover:text-white transition ease-in-out duration-500'>
                                            {title}
                                        </p>
                                    </div>
                                </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      
    </section>
  )
}

export default Experience
