import React from 'react'
import Homeimg2 from '../../assets/Home/Homeimg2.jpg'
  
function SetsApart() {
    return (
        <section className='w-full py-10 mx-auto bg-gray-100 my-3'>
            <div className='text-center flex flex-col items-center'>
                <h1 className='text-3xl mb-6 sm:text-4xl md:text-4xl lg:text-5xl font-bold'>Whats Set Us Apart</h1>
                <div className='w-14 h-0.5 rounded-2xl bg-gray-400'></div>
            </div>
            <div className='max-w-6xl mx-auto mt-5 flex flex-col md:flex-row items-center '>
                <p className='basis-3/4 mx-6'>What sets Cyberspace-Inc apart is our unwavering commitment to excellence, integrity, and innovation. We prioritize the needs of both job seekers and employers, striving to exceed expectations and deliver results that drive mutual success. With a user-friendly interface, robust search functionality, and personalized job matching algorithms, we make it easy for candidates to find the perfect job and for employers to identify the ideal candidate </p>
                <div className='basis-3/4 h-60 mx-6  my-6 flex md:justify-end justify-center'>
                <img src={Homeimg2}   className=' rounded-xl w-[80%]' alt="" />
                </div>
            </div>


        </section>
    )
}

export default SetsApart