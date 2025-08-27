import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'
import grid1 from '../assets/grid1.png'
import grid2 from '../assets/grid2.png'
import grid3 from '../assets/grid3.png'
import grid4 from '../assets/grid4.png'
import copy from '../assets/copy.svg'

const About = () => {
    const [hasCopied , setHasCopied] = useState(false)
    const handleCopy = () =>{ 
        navigator.clipboard.writeText('ahmadlaham792@gmail.com')
         setHasCopied(true);
         
         setTimeout(() =>{
            setHasCopied(false)
         } , 2000)
    }
  return (
    <section className='sm:px-10 px-5 my-20' id='about'>
      <div className='grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full '>
        <div className='col-span-1 xl:row-span-3'>
            <div className=' w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5'>
                <img src={grid1} alt="grid1" className='w-full sm:h-[276px] h-fit object-contain' />
                <div>
                    <p className='text-xl font-semibold mb-2 text-white font-generalsans'> Hi , I'm Ahmad</p>
                    <p className='text-[#afb0b6] text-base font-generalsans'>With 1 year of experience, I have honed my skills in frontend dev, creating dynamic and responsive websites. </p>
                </div>
            </div>
        </div>

        <div className='col-span-1 xl:row-span-3 '>
            <div className='w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5'>
                <img src={grid2} alt="grid2" className='w-full sm:h-[276px] h-fit object-contain' />
                <div>
                    <p className='text-xl font-semibold mb-2 text-white font-generalsans'>Tech Stack</p>
                    <p className='text-[#afb0b6] text-base font-generalsans'>I specialize in a variety of languages, frameworks, and tools that allow me to build dynamic and responsive websites and applications.</p>
                </div>
            </div>

        </div>

        <div className='col-span-1 xl:row-span-4'>
            <div className='w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5'>
                <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                    <Globe 
                    height={326}
                    width={326}
                    backgroundColor="rgba(0,0,0,0)"
                    backgroundImageOpacity={0.5}
                    showAtmosphere
                    showGraticules
                    globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                    bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                    
                   />
                    
                </div>
                <div>
                    <p className='text-xl font-semibold mb-2 text-white font-generalsans'>
                         I work remotely across most timezones.
                    </p>
                    <p className='text-[#afb0b6] text-base font-generalsans'>
                        I'm based in syria , with remote work availble.
                    </p>
                    <Button name="Contact Me" isBeam containerClass="w-full mt-10"/>
                </div>
            </div>
        </div>

        <div className='xl:col-span-2 xl:row-span-3'>
            <div className='w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5'>
                <img src={grid3} alt="grid3"  className='w-full sm:h-[266px] h-fit  object-contain'/>
                <div>
                    <p className='text-xl font-semibold mb-2 text-white font-generalsans'>My Passion for Coding</p>
                    <p className='text-[#afb0b6] text-base font-generalsans'>i love solving problems and building things through code. Coding isn't just my profession - it's my passion. </p>
                </div>
            </div>

        </div>

        <div className='xl:col-span-1 xl:row-span-2'>
            <div className='cursor-pointer flex justify-center items-center gap-2'>
                <div className='w-full h-full border border-black-300 bg-black-200 rounded-lg sm:p-7 p-4 flex flex-col gap-5'>

                
                <img src={grid4} alt="grid4" className='w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top ' />
                <div className='space-y-2'>
                    <p className= 'text-center text-[#afb0b6] text-base font-generalsans'>
                        Contact Me
                    </p>
                    <div onClick={handleCopy} className='cursor-pointer flex justify-center items-center gap-2'>
                        <img src={hasCopied ? 'src/assets/tick.svg' : copy } alt="" />
                        <p className='lg:text-2xl md:text-xl font-medium bg-gradient-to-r from-[#BEC1CF] from-60% via-[#D5D8EA] via-60% to-[#D5D8EA] to-100% bg-clip-text text-white'>
                            ahmadlaham792@gmail.com
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About
