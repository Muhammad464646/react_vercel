import React from 'react'
import AnimatedTitle from './AnimetedTitle'

const Card = () => {
  return (
    <div>
      <article className='border-[2px] w-[400px] p-[50px] relative max-w-sm bg-white border-gray-200 rounded-lg shadow-[9px_9px_0px_1px_rgba(0,0,0,0.8)]'>
        <img src="Foto/ss4.png" className='absolute w-[70px] mt-[-50px] ml-[-30px]' alt="" />
        <AnimatedTitle text="Holistic Learning Approach" className="text-[25px]" />
        <AnimatedTitle text="Our curriculum focuses on nurturing cognitive, social, emotional, and physical development, ensuring a well-rounded education." />
      </article>
    </div>
  )
}

export default Card
