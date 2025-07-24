import React from 'react'
import SectionMain from '../Component/SectionMain';
import Section from '../Component/Section';
// import Card from '../Component/card'
import Footer from '../Component/Footer';
import CardHobby from '../Component/CardHobby';
import SliderComponent from '../Component/SliderComponent';

const Academics = () => {
  return (
    <div className='bg-white text-black font-sans'>
      <article className='mb-[100px]'>
      <SectionMain />
      </article>
      <section>
        <Section text={'Our Features'} h1t={'Our Special Features'} width={'700px'} pt={'Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. Join us as we embark on an exciting educational journey together!'} />
       <article className='flex flex-wrap gap-[50px] justify-center mt-[100px] mb-[100px]'>
        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}
       </article>
      </section>
   <section className='mb-[100px]'>
    <Section  text={'Our Features'} h1t={'What Students Learn'} pt={'At Little Learners Academy, we strive to cultivate a love for learning and equip children with essential skills for their future success. Our academic programs cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. Some key areas of learning include'} width={'800px'} />
 <article className='flex flex-wrap gap-[50px] justify-center mt-[100px]'>
    <CardHobby img={'Foto/ss14.svg'} text={'Language Arts'} pt={'Reading, writing, storytelling, and communication skills.'} />
    <CardHobby img={'Foto/ss14.svg'} text={'Language Arts'} pt={'Reading, writing, storytelling, and communication skills.'} />
    <CardHobby img={'Foto/ss14.svg'} text={'Language Arts'} pt={'Reading, writing, storytelling, and communication skills.'} />
    <CardHobby img={'Foto/ss14.svg'} text={'Language Arts'} pt={'Reading, writing, storytelling, and communication skills.'} />
    <CardHobby img={'Foto/ss14.svg'} text={'Language Arts'} pt={'Reading, writing, storytelling, and communication skills.'} />
    <CardHobby img={'Foto/ss14.svg'} text={'Language Arts'} pt={'Reading, writing, storytelling, and communication skills.'} />
 </article>
   </section>
   <section>
    <Section text={'Our Gallery'} h1t={'Our Rooms Gallery'} pt={'Step into our Gallery and immerse yourself in a visual journey of cherished moments and unforgettable experiences at our kindergarten school.'} /> 
    <article>
        <SliderComponent text={'Classrooms'} pt={'Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement.'} />
    </article>
    <article>
      <SliderComponent text={'Library'} pt={'Our expansive library is a treasure trove of books, fostering a love for reading and supporting students'} />
    </article>
    <article>
      <SliderComponent text={'Science Lab'} pt={'Our hands-on science lab allows students to conduct experiments and explore scientific concepts in a fun and interactive way.'} />
    </article>
    <article>
      <SliderComponent text={'Computer Lab'} pt={'Equipped with age-appropriate technology, the computer lab enhances students'} />
    </article>
   <article>
    <SliderComponent text={'Garden and Nature Area'} pt={'Our garden and nature area offer an opportunity for children to connect with nature and learn about plants and the environment.'} />
   </article>
   </section>
 <Footer />
    </div>
  )
}

export default Academics