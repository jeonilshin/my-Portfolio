import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import {
  RxArrowTopRight
} from 'react-icons/rx';

import {
  BiCodeAlt
} from 'react-icons/bi';

import {
  PiBracketsCurlyBold,
} from 'react-icons/pi';

import {
  AiOutlineCloud,
  AiOutlineApple
} from 'react-icons/ai'

import { FreeMode, Pagination } from 'swiper';

export const serviceData = [
  {
    icon: <PiBracketsCurlyBold />,
    title: 'Frontend',
    description: '웹 애플리케이션 또는 소프트웨어의 UI를 담당하는 부분을 말합니다.',
  },
  {
    icon: <BiCodeAlt />,
    title: 'Backend',
    description: '웹 애플리케이션 또는 소프트웨어의 서버를 담당하는 부분을 말합니다.',
  },
  {
    icon: <AiOutlineCloud />,
    title: 'Cloud Computing',
    description: '클라우드컴퓨팅 환경에서 애플리케이션을 개발하고 운영하는 역할을 말합니다.',
  },
  {
    icon: <AiOutlineApple />,
    title: 'iOS 앱 개발',
    description: '애플의 iOS 운영 체제를 사용하는 모바일 위한 애플리케이션을 개발하는 역할을 말합니다.',
  }
];

const ServiceSlider = () => {
  return (
    <Swiper 
      style={{
        "--swiper-pagination-color": "#skyblue",
        "--swiper-pagination-bullet-inactive-color": "#skyblue",
      }}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15
        },

      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300'>
              <div className='text-4xl text-accent mb-4'>{item.icon}</div>
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[350] leading-normal'>{item.description}</p>
              </div>
              <div className='text-3xl'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300'/>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
