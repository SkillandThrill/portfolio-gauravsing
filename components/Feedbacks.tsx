import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards';
import {  testimonials } from '@/data';

const Feedbacks = () => {
  return (
    <div className='py-20' id='testimonials'>
      <h1 className='heading'>
        What other's wants to say
        <span className='text-purple'> about me</span>
      </h1>
      <div className='flex flex-col items-center max-lg:mt-10 pt-4'>
            <InfiniteMovingCards
                items={testimonials}
                direction='right'
                speed='slow'
            />
      </div>
    </div>
  )
}

export default Feedbacks
