import React from 'react'
import { Link } from 'react-router-dom'
import AnimatedTitle from './AnimetedTitle'

const SectionMain = () => {
  return (
    <div>
      <img src="Foto/ss3.svg" className="w-full rounded-lg shadow-md" alt="Banner" />
      <section className="bg-white shadow rounded-lg py-6 mb-[150px]">
        <article className="text-center mb-6">
          <AnimatedTitle text="Little Learns" className="text-3xl font-bold text-blue-800" />
        </article>
        <article className="flex flex-wrap justify-center gap-8 text-lg font-medium ">
          <Link to='/' className="hover:text-blue-600 transition">Home</Link>
          <Link to='/Users' className="hover:text-blue-600 transition">ToDoList</Link>
          <Link to='/About' className="hover:text-blue-600 transition">About Us</Link>
          <Link to='/Academics' className="cursor-pointer text-gray-600">Academics</Link>
          <Link to='/Addmission' className="cursor-pointer text-gray-600">Admissions</Link>
          <span className="cursor-default text-gray-600">Student Life</span>
          <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
            Contact us
          </button>
        </article>
      </section>

      <section className="flex flex-col md:flex-row md:justify-between items-center gap-10 border-[2px] rounded-lg p-10 relative  shadow-[9px_9px]">
        <article className="relative md:max-w-[45%] text-center md:text-left">
          <img src="Foto/ss8.png" className="absolute -top-20 -left-12 w-[100px]" alt="Decor" />
          <button className="mb-4 text-blue-600 font-semibold hover:underline">Overview</button>
          <AnimatedTitle text="Welcome to Little Learners Academy" className="text-3xl font-semibold" />
        </article>
        <article className="md:max-w-[50%] text-gray-700 leading-relaxed text-center md:text-left">
          <AnimatedTitle text="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential." />
        </article>
      </section>
        
    </div>
  )
}

export default SectionMain
