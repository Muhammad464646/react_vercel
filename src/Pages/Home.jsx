import React, { useRef, useState, useEffect } from 'react';
import Card from '../Component/card';
import Section from '../Component/Section';
import Navigate from '../Component/Navigate';
import Footer from '../Component/Footer';
import { Link } from 'react-router-dom';
import AnimatedTitle from '../Component/AnimetedTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import './style.css';
import axios from 'axios';
import { motion } from "framer-motion";

const Home = () => {
  const [data, setData] = useState([]);
  const api = 'https://68500a03e7c42cfd17971736.mockapi.io/data/data'
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  useEffect(() => {
    async function GetData() {
      try {
        const res = await axios.get(api);
        setData(res.data);
      } catch (err) {
        console.error(err);
      }
    }
    GetData();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="font-sans bg-white text-gray-800">
        <AnimatedTitle text="SIUUUUUUUUUUU" className="text-4xl font-bold text-center text-blue-600" />

        <img src="Foto/ss3.svg" className="w-full" alt="Banner" />

        <section className="py-6 bg-white shadow">
          <article className="text-center mb-4"></article>
          <article className="flex justify-center gap-6 flex-wrap">
            <Link to='/' className="text-lg cursor-pointer hover:text-blue-600 ">Home</Link>
            <Link to='/Users' className="text-lg cursor-pointer hover:text-blue-600">ToDoList</Link>
            <Link to='/About' className=" text-lg hover:text-blue-600 transition">About Us</Link>
            <Link to='/Academics' className="text-lg cursor-pointer hover:text-blue-600">Academics</Link>
            <Link to='/Addmission' className=" text-lg cursor-default text-gray-600">Admissions</Link>
            <AnimatedTitle text="Student Life" className="text-lg hover:text-blue-600" />
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Contact us
            </button>
          </article>
        </section>

        <section className="flex flex-wrap justify-center items-center gap-10 p-6 bg-gray-50">
          <img src="Foto/ss1.png" alt="Welcome" className="max-w-md rounded" />
          <article className="max-w-xl space-y-4">
            <AnimatedTitle text="Welcome to Little Learners Academy" className="text-2xl font-bold" />
            <AnimatedTitle text="Where Young Minds Blossom and Dreams Take Flight." className="text-xl text-blue-700 font-semibold" />
            <AnimatedTitle text="Our kindergarten school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!" className="text-gray-600" />
            <article className="flex gap-10 flex-wrap">
              <article>
                <AnimatedTitle text="7000+" className="text-3xl font-bold text-blue-600" />
                <AnimatedTitle text="Students Passed Out" />
              </article>
              <article>
                <AnimatedTitle text="+37" className="text-3xl font-bold text-blue-600" />
                <AnimatedTitle text="Awards & Recognitions" />
              </article>
              <article>
                <AnimatedTitle text="+15" className="text-3xl font-bold text-blue-600" />
                <AnimatedTitle text="Educational Programs" />
              </article>
            </article>
          </article>
        </section>

        <section className="p-8 bg-white text-center space-y-4">
          <button className="bg-yellow-400 px-6 py-2 text-white font-semibold rounded hover:bg-yellow-500">
            Children Deserve Bright Future
          </button>
          <AnimatedTitle text="Our Benefits" className="text-3xl font-bold" />
          <AnimatedTitle text="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, we aim to lay a strong foundation for your child's future." className="max-w-2xl mx-auto text-gray-600" />
          <article className="flex flex-wrap justify-center gap-12 mt-6">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </article>
        </section>

        <section className="p-10 bg-gray-100 text-center space-y-6">
          <Section
            text="Their Happy Words 🤗"
            h1t="Our Testimonials"
            pt="Our testimonials are heartfelt reflections of the nurturing environment we provide, where children flourish both academically and emotionally."
          />
          <article className="flex flex-wrap gap-6 justify-center">
            <img src="Foto/ss5.svg" className="w-64 h-auto" alt="Testimonial 1" />
            <img src="Foto/ss5.svg" className="w-64 h-auto" alt="Testimonial 2" />
            <img src="Foto/ss5.svg" className="w-64 h-auto" alt="Testimonial 3" />
          </article>
        </section>

        <section className="p-10 text-center bg-white space-y-6">
          <Section
            text="Explore More"
            h1t="Navigate through our Pages"
            pt="Your gateway to discovering a wealth of valuable information about our kindergarten school. Feel free to explore and learn more about the enriching experiences that await your child."
          />
          <article className="flex justify-center flex-wrap gap-10 mt-6">
            <Navigate />
            <Navigate />
            <Navigate />
            <Navigate />
          </article>
        </section>

        <footer className="bg-blue-900 text-white py-10 mt-20">
          <Footer />
        </footer>
      </div>
    </motion.div>
  );
};

export default Home;
