import React from 'react'
import { Link } from 'react-router-dom'
import Section from '../Component/Section'
import TeamMember from '../Component/TeamMember'
import Footer from '../Component/Footer'
import AnimatedTitle from '../Component/AnimetedTitle'
// import Card from '../Component/card'


const About = () => {
  return (
    <div className="w-[90%] mx-auto px-6 py-12 space-y-20 bg-white text-black">
      <img src="Foto/ss3.svg" className="w-full rounded-lg shadow-md" alt="Banner" />
      <section className="bg-white shadow rounded-lg py-6">
        <article className="text-center mb-6">
          <AnimatedTitle text="Little Learns" className="text-3xl font-bold text-blue-800" />
        </article>
        <article className="flex flex-wrap justify-center gap-8 text-lg font-medium">
          <Link to='/' className="hover:text-blue-600 transition">Home</Link>
          <Link to='/Users' className="hover:text-blue-600 transition">ToDoList</Link>
          <Link to='/About' className="hover:text-blue-600 transition">About Us</Link>
          <Link to='/Academics' className="cursor-pointer text-gray-600">Academics</Link>
          <Link to='/Addmission' className="cursor-default text-gray-600">Admissions</Link>
          <span className="cursor-default text-gray-600">Student Life</span>
          <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
            Contact us
          </button>
        </article>
      </section>

      <section className="flex flex-col md:flex-row md:justify-between items-center gap-10 border rounded-lg p-10 relative">
        <article className="relative md:max-w-[45%] text-center md:text-left">
          <img src="Foto/ss8.png" className="absolute -top-20 -left-12 w-[100px]" alt="Decor" />
          <button className="mb-4 text-blue-600 font-semibold hover:underline">Overview</button>
          <AnimatedTitle text="Welcome to Little Learners Academy" className="text-3xl font-semibold" />
        </article>
        <article className="md:max-w-[50%] text-gray-700 leading-relaxed text-center md:text-left">
          <AnimatedTitle
            text="A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."
            className="text-gray-700 leading-relaxed"
          />
        </article>
      </section>

      <section>
        <Section
          text={'Mission & Visions'}
          h1t={'Our Mission & Visions'}
          pt={'We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and personal growth.'}
        />
        <article className="flex flex-wrap justify-center gap-10 mt-8">
        {/* <Card/> */}
        </article>
      </section>

      <section>
        <Section
          text={'Our Achievements'}
          h1t={'Our Awards and Recognitions'}
          pt={'Little Learners Academy takes pride in our commitment to delivering high-quality education and outstanding student experiences. We are honored to have received various awards and recognitions for our dedication to early childhood education. These accolades reflect our teams relentless efforts in creating an exceptional learning environment for our students.'}
        />
        <article className="flex flex-wrap justify-center gap-8 mt-8">
          {/* <Card /> */}
          {/* <Card /> */}
          <Card />
        </article>
      </section>

      <section>
        <Section
          text={'Our Progressive Journey'}
          h1t={'Our History'}
          pt={'Founded with a passion for early education in 2005, our kindergarten school boasts a rich history of empowering young learners to reach their potential through innovative teaching methods and a supportive learning environment'}
        />
      </section>

      <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow relative space-y-16">
        <AnimatedTitle text="2023" className="text-4xl font-bold text-gray-800 mb-8 text-center" />

        {[
          {
            img: "Foto/ss11.png",
            title: "Resilience and Future Horizons",
            text: "Adapting to new challenges, we remained committed to our mission of providing an exceptional early education. Looking ahead with optimism, we envision a future filled with boundless possibilities as we continue shaping the leaders and thinkers of tomorrow."
          },
          {
            img: "Foto/ss10.png",
            title: "Innovation and Technology",
            text: "Innovation became the driving force behind our kindergarten's progress from 2016 to 2020. Embracing the latest educational technologies, we crafted engaging and interactive learning experiences for our students."
          },
          {
            img: "Foto/ss9.png",
            title: "Expansion and Recognition",
            text: "These years marked as a period of expansion and recognition for our school. As we extended our facilities and enhanced our curriculum, we received accolades for our commitment to quality education and innovative teaching methodologies."
          },
          {
            img: "Foto/ss12.png",
            title: "Inception and Growth",
            text: "Established in 2005, our kindergarten school began its journey with a vision to provide a nurturing space for young minds to explore, learn, and grow. Over the next five years, we witnessed significant growth."
          }
        ].map(({ img, title, text }, i) => (
          <div key={i} className="relative group flex flex-col md:flex-row items-center md:items-start gap-8">
            <img src={img} alt={title} className="w-72 md:absolute md:left-[-320px] top-0 rounded-lg shadow-lg" />
            <div className="max-w-xl text-center md:text-left">
              <AnimatedTitle text={title} className="text-2xl font-semibold text-gray-700 mb-4" />
              <AnimatedTitle text={text} className="text-lg text-gray-600 leading-relaxed" />
            </div>
          </div>
        ))}
      </div>

      <section>
        <Section
          text={'Our Teachers With Expertise'}
          h1t={'Our Team Members'}
          pt={'At Little Learners Academy, our teaching team is the heart of our educational journey. We take great pride in employing highly qualified and passionate educators who possess a deep understanding of early childhood development. Our teachers create a warm and engaging atmosphere, encouraging curiosity, instilling confidence, and fostering a love for learning.'}
        />
        <article className="flex flex-wrap justify-center gap-6 mt-8">
          <TeamMember />
          <TeamMember />
          <TeamMember />
          <TeamMember />
          <TeamMember />
          <TeamMember />
        </article>
      </section>

      <Footer />
    </div>
  )
}

export default About
