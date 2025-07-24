import React from 'react'

const CardHobby = ({img,text,pt}) => {
  return (
    <div className='border w-[400px] p-[40px] text-center rounded-2xl  font-serif shadow-[9px_9px]'>
        <div className='bg-[#FFEFE5] border-[2px] rounded-bl-2xl rounded-br-2xl w-[100px] h-[300px] absolute  mt-[-40px] ml-[110px] '></div>
      <img src={img} className=' relative' alt="" />
      <br />
      <h1 className='text-[30px]  font-bold'>{text}</h1>
      <p className='w-[320px]'>{pt}</p>
    </div>
  )
}

export default CardHobby
