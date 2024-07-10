import { testimonials } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <div>
        <h1 className='text-center text-7xl mt-[10vh] max-lg:text-5xl max-sm:text-3xl'>
            What they say about me
        </h1>
        <div className='flex flex-wrap pt-10 pb-10 items-center justify-around text-[#dbd9d9] tracking-widest max-lg:text-sm max-md:text-[13px]'>
            {testimonials.map((testimonial) => (
                <div className='h-auto drop-shadow-2xl min-h-[40vh] w-[40vw] rounded-3xl bg-[rgb(27,27,27)] p-6 gap-4 flex flex-col max-lg:w-[80%] max-md:w-[100%] flex-shrink-0 mb-6'>
                    <p className='flex-1'>{testimonial.description}</p>
                    <div className='flex items-center gap-4'>
                        <div className='w-[10vh] h-[10vh]'>
                            <Image 
                                src={testimonial.img}
                                alt={testimonial.name}
                                width={500}
                                height={500}
                                className="rounded-full object-contain"
                            />
                        </div>
                        <div className='flex flex-col'>
                            <h1>{testimonial.name}</h1>
                            <h2>{testimonial.position}</h2>
                        </div>
                    </div>
                </div>
            ))}
        </div>



    </div>
  )
}

export default Testimonials