import React from 'react'
import Featured1 from '../../assets/Home/featured1.jpg'
import Featured2 from '../../assets/Home/featured2.jpg'
import Featured3 from '../../assets/Home/featured3.jpg'
import Featured4 from '../../assets/Home/featured4.jpg'
import Featured5 from '../../assets/Home/featured5.jpg'
import Featured6 from '../../assets/Home/featured6.jpg'

function Featured() {
    const FeaturedData = [
        {
            name: 'Data Scientist',
            img: Featured1
        },
        {
            name: 'Web Devlopment',
            img: Featured2
        },
        {
            name: 'Full Stack Devloper',
            img: Featured3
        },
        {
            name: 'Devops Engineer',
            img: Featured4
        },
        {
            name: 'Cloud Computing',
            img: Featured5
        },
        {
            name: 'Cybersecurity Analyst',
            img: Featured6
        }


    ]

    return (
        <section className='max-w-6xl text-center my-10 mx-auto'>
            <div className='text-center flex flex-col items-center'>
                <h1 className='text-3xl mb-6 sm:text-4xl md:text-4xl lg:text-5xl font-bold'>Featured Job</h1>
                <div className='w-14 h-0.5 rounded-2xl bg-gray-400'></div>
            </div>
            <div className='w-full flex mt-10 flex-wrap '>
                {FeaturedData.map((elem, id) => {
                    return (
                        <div className="lg:basis-1/3 md:basis-1/2 basis-1/1 p-2  relative" key={id}>
                            <img src={elem.img} alt="" className="w-full rounded-xl  h-auto" />
                            <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                         text-white text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center">
                                {elem.name}
                            </h1>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}
export default Featured;
