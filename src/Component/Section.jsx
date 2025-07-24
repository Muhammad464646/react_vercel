import React from 'react'
import AnimatedTitle from './AnimetedTitle'
const Section = ({ text, h1t, pt, width }) => {
  return (
    <div style={{ display: "flex", justifyContent: 'center', width: width , margin:"auto"}}>
      <article className='text-center'>
        <button className='border-[3px] rounded-2xl p-[6px] shadow-2xl '>{text}</button>
        <h1 text={h1t} className="text-[40px] font-bold" />
        <p text={pt} />
      </article>
    </div>
  )
}

export default Section
