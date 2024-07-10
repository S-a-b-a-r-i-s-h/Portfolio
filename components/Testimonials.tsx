import { testimonials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Testimonials = () => {
  return (
    <div>
      <h1 className="text-center text-7xl mt-[10vh] max-lg:text-5xl max-sm:text-3xl">
        What they say about me
      </h1>
      <div className="flex flex-wrap pt-10 pb-10 items-center justify-around text-[#dbd9d9] tracking-widest max-lg:text-sm max-md:text-[13px]">
        {testimonials.map((testimonial) => (
          <div className="h-auto drop-shadow-2xl min-h-[40vh] w-[40vw] rounded-3xl bg-[rgb(27,27,27)] p-6 gap-4 flex flex-col max-lg:w-[80%] max-md:w-[100%] flex-shrink-0 mb-6">
            <p className="flex-1">{testimonial.description}</p>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className="w-[10vh] h-[10vh]">
                  <Image
                    src={testimonial.img}
                    alt={testimonial.name}
                    width={500}
                    height={500}
                    className="rounded-full object-contain"
                  />
                </div>
                <div className="flex flex-col">
                  <h1>{testimonial.name}</h1>
                  <h2>{testimonial.position}</h2>
                </div>
              </div>
              <Link href={testimonial.linkedin}>
                <svg
                  width="40px"
                  height="40px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22 3.47059V20.5294C22 20.9194 21.8451 21.2935 21.5693 21.5693C21.2935 21.8451 20.9194 22 20.5294 22H3.47059C3.08056 22 2.70651 21.8451 2.43073 21.5693C2.15494 21.2935 2 20.9194 2 20.5294V3.47059C2 3.08056 2.15494 2.70651 2.43073 2.43073C2.70651 2.15494 3.08056 2 3.47059 2H20.5294C20.9194 2 21.2935 2.15494 21.5693 2.43073C21.8451 2.70651 22 3.08056 22 3.47059ZM7.88235 9.64706H4.94118V19.0588H7.88235V9.64706ZM8.14706 6.41177C8.14861 6.18929 8.10632 5.96869 8.02261 5.76255C7.93891 5.55642 7.81542 5.36879 7.65919 5.21039C7.50297 5.05198 7.31708 4.92589 7.11213 4.83933C6.90718 4.75277 6.68718 4.70742 6.46471 4.70588H6.41177C5.95934 4.70588 5.52544 4.88561 5.20552 5.20552C4.88561 5.52544 4.70588 5.95934 4.70588 6.41177C4.70588 6.86419 4.88561 7.29809 5.20552 7.61801C5.52544 7.93792 5.95934 8.11765 6.41177 8.11765C6.63426 8.12312 6.85565 8.0847 7.06328 8.00458C7.27092 7.92447 7.46074 7.80422 7.62189 7.65072C7.78304 7.49722 7.91237 7.31346 8.00248 7.10996C8.09259 6.90646 8.14172 6.6872 8.14706 6.46471V6.41177ZM19.0588 13.3412C19.0588 10.5118 17.2588 9.41177 15.4706 9.41177C14.8851 9.38245 14.3021 9.50715 13.7799 9.77345C13.2576 10.0397 12.8143 10.4383 12.4941 10.9294H12.4118V9.64706H9.64706V19.0588H12.5882V14.0529C12.5457 13.5403 12.7072 13.0315 13.0376 12.6372C13.3681 12.2429 13.8407 11.9949 14.3529 11.9471H14.4647C15.4 11.9471 16.0941 12.5353 16.0941 14.0176V19.0588H19.0353L19.0588 13.3412Z"
                    fill="#dbd9d9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
