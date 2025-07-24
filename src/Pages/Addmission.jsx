import React from 'react';
import SectionMain from '../Component/SectionMain';
import Section from '../Component/Section';
import Card from '../Component/card';
import Footer from '../Component/Footer';
import AnimatedTitle from '../Component/AnimetedTitle';

const Addmission = () => {
  return (
    <div className='bg-white text-black font-serif'>
      <article className='mb-[100px]'>
        <SectionMain />
      </article>
      <section>
        <Section 
          text={'Process'} 
          h1t={<AnimatedTitle text={'Admission Process'} />} 
          pt={<AnimatedTitle text={'Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to providing your child with an exceptional learning experience at our kindergarten school'} />} 
          width={'700px'}
        />
        <section className='flex flex-wrap justify-center gap-[100px] mt-[100px]'>
          <article className='border-[2px] w-[300px] shadow-[9px_9px] rounded-2xl p-[30px]'>
            <AnimatedTitle text="Inquiry" />
            <ul className="list-disc pl-5 mb-6">
              <li>Maintain inquiry from thoughts related to information and information that require you to listen to the recommendations.</li>
            </ul>
          </article>
          <article className='border-[2px] w-[300px] shadow-[9px_9px] rounded-2xl p-[30px]'>
            <AnimatedTitle text="School Tour" />
            <ul className="list-disc pl-5 mb-6">
              <li className="mb-2">Maintain a completed schedule for a given year, which helps you make a trip to the airport.</li>
              <li>
                <span className="font-bold">Employee experience</span>
                <ul className="list-disc pl-8 mt-1">
                  <li className="font-bold">Admissions</li>
                </ul>
              </li>
            </ul>
          </article>
          <article className='border-[2px] w-[300px] shadow-[9px_9px] rounded-2xl p-[30px]'>
            <AnimatedTitle text="Application Form" />
            <ul className="list-disc pl-5 mb-6">
              <li>Support the application from our private transportation network, including the "Administrative Services" and other applicable administrative services.</li>
            </ul>
          </article>
          <article className='border-[2px] w-[300px] shadow-[9px_9px] rounded-2xl p-[30px]'>
            <AnimatedTitle text="Parent Interview" />
            <ul className="list-disc pl-5 mb-6">
              <li className="mb-2">Review and understand what we're doing with respect to the communication system.</li>
              <li>Understand whether there is any need for a person to address matters relevant to their respective lives.</li>
            </ul>
          </article>
          <article className='border-[2px] w-[300px] shadow-[9px_9px] rounded-2xl p-[30px]'>
            <AnimatedTitle text="Student Assessment" />
            <ul className="list-disc pl-5 mb-6">
              <li>Review and discuss whether it will be necessary to ensure that they are satisfied with their personal experiences.</li>
            </ul>
          </article>
          <article className='border-[2px] w-[300px] shadow-[9px_9px] rounded-2xl p-[30px]'>
            <AnimatedTitle text="Acceptance" />
            <ul className="list-disc pl-5 mb-6">
              <li>Check out any documentation available from the administrator of the main process for payment to participate in your business.</li>
            </ul>
          </article>
        </section>

        <hr className="my-8 border-t border-gray-300" />

        <AnimatedTitle text="Free Structure" />
        <AnimatedTitle text="Our first research engagement group was the work of our management team to facilitate specific themes responsible for the service, and provide detailed information about them." />

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Program</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Age Range</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Annual Status</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Implementation</th>
                <th className="border border-gray-300 px-4 py-2 text-left">Analysis</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Memory</td>
                <td className="border border-gray-300 px-4 py-2">3–2 Years</td>
                <td className="border border-gray-300 px-4 py-2">30,000</td>
                <td className="border border-gray-300 px-4 py-2">70.5</td>
                <td className="border border-gray-300 px-4 py-2">90.0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Fine-tolerantness</td>
                <td className="border border-gray-300 px-4 py-2">3–4 Years</td>
                <td className="border border-gray-300 px-4 py-2">33,000</td>
                <td className="border border-gray-300 px-4 py-2">50.0</td>
                <td className="border border-gray-300 px-4 py-2">90.0</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Underground</td>
                <td className="border border-gray-300 px-4 py-2">&lt; 2 Years</td>
                <td className="border border-gray-300 px-4 py-2">29,000</td>
                <td className="border border-gray-300 px-4 py-2">70.0</td>
                <td className="border border-gray-300 px-4 py-2">90.0</td>
              </tr>
            </tbody>
          </table>
        </div>

        <hr className="my-8 border-t border-gray-300" />

        <AnimatedTitle text="Additional Services" />

        <div className="overflow-x-auto mb-8">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">Documentation-Secretariat</th>
                <th className="border border-gray-300 px-4 py-2 text-left">TOTA per month</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Language Resources/Programs</td>
                <td className="border border-gray-300 px-4 py-2">Not free material</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-2">Transportation/Research</td>
                <td className="border border-gray-300 px-4 py-2">NOT one month</td>
              </tr>
            </tbody>
          </table>
        </div>
        <Footer />
      </section>
    </div>
  );
};

export default Addmission;
