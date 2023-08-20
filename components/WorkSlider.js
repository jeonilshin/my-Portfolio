import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { BsCodeSlash } from 'react-icons/bs';
import { Autoplay, Pagination, Navigation } from "swiper";
import Image from 'next/image';

export const workSlider = {
  slides: [
    {
      images: [
        { 
          title: 'tiitle',
          path: '/thumb1.jpg',
        },
        { 
          title: 'title',
          path: '/thumb2.jpg',
        },
        { 
          title: 'title',
          path: '/thumb3.jpg',
        },
        { 
          title: 'title',
          path: '/thumb4.jpg',
        },
      ],
    },
    {
      images: [
        { 
          title: 'title',
          path: '/thumb4.jpg',
        },
        { 
          title: 'title',
          path: '/thumb1.jpg',
        },
        { 
          title: 'title',
          path: '/thumb2.jpg',
        },
        { 
          title: 'title',
          path: '/thumb3.jpg',
        },
      ],
    },
  ],
};

// ... (imports)

const WorkSlider = () => {
  return (
    <Swiper 
      speed={4000}
      spaceBetween={10}
      pagination={{
        clickable: true
      }}
      autoplay={{
        delay: 9000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className='h-[280px] sm:h-[480px]'
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer'>
              {slide.images.map((image, index) => {
                return (
                  <div className='relative rounded-lg overflow-hidden flex items-center justify-center group' key={index}>
                    <div className='flex items-center justify-center relative overflow-hidden group'>
                      <Image src={image.path} width={500} height={300} alt='' />
                      <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#003297] to-[#00094B] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                      <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                        <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                          <div className='delay-100'>Source</div>
                          <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150'>Code</div>
                          <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'>
                            <BsCodeSlash />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;