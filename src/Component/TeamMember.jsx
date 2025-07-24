import React from 'react'
import AnimatedTitle from './AnimetedTitle'


const TeamMember = () => {
  return (
    <div className='w-[500px] border-[5px] shadow-[9px_9px] rounded-2xl p-[20px]'>
      <article className='flex items-center justify-between '>
        <article className='flex items-center gap-1'>
          <img src="Foto/ss13.png" width={'70px'} alt="" />
          <AnimatedTitle text={'Ms. Sarah Anderson'} className="text-xl m-0" />
        </article>
        <img src="Foto/Button.png" className='w-[50px]' alt="" />
      </article>
      <br />
      <article className='bg-[#FFF5F0] border p-[20px] rounded-2xl'>
        <AnimatedTitle text={"Qualification:Bachelor's Degree in Early Childhood Education"} className="text-lg font-semibold m-0" />
        <br />
        <AnimatedTitle text={"Ms. Sarah is a passionate educator with over 10 years of experience in guiding young minds. Her warm and nurturing approach creates a welcoming classroom environment where children feel comfortable to explore and learn."} className="text-base m-0" />
      </article>
    </div>
  )
}

export default TeamMember
