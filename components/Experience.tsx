import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'
import { companies } from '@/data'

const Experience = () => {
  return (
    <div className='' id=''>
      <h1 className='heading'>
        My
        <span className='text-purple'> Work Experience</span>
      </h1>
      <div className='flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10'>
                {companies.map(({id,img,name,nameImg})=>(
                    <div key={id} className='flex md:max-w-60 max-w-32 gap-2 mt-4'>
                        <img src={img} alt={name} className='md:w-10 w-5'/>
                        <img src={nameImg} alt={name} className='md:w-24 w-20'/>
                    </div>
                ))}
            </div>
            
      <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'> 
        {workExperience.map((card)=>(
            <Button key={card.id} borderRadius='1.75rem' className='flex-1 text-white border-neutral-200 dark:border-slate-800' duration={Math.floor(Math.random() * 10000)+ 10000}>
                <div className='flex lg:flex-row flex-col lg:items-center  p-3 py-6 md:p-5 lg:p-10 gap-2'>
                    <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16'/>
                    <div className='lg:ms-5'>
                        <h1 className='text-start text-xl md:text-2xl font-bold'>
                            {card.title}
                        </h1>
                        <p className='text-start text-white-100 mt-3 font-semibold'>
                            {card.desc}
                        </p>
                    </div>
                </div>
            </Button>
        ))}
      </div>

      
    </div>
  )
}

export default Experience
