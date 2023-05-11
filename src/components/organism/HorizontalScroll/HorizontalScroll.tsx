import 'swiper/css';
import React from "react";
import styles from './index.module.scss';
import { useEffect, useRef } from "react";
import {useTranslation} from "react-i18next";
import {COMMON_TNS} from "@/lib/i18n/consts";
import SwiperCore, { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

export const HorizontalScroll = () => {
  SwiperCore.use([Autoplay]);

  const { t } = useTranslation([COMMON_TNS]);

  return (
    <div className="pb-[100px] flex flex-col gap-y-3">
      <div>
        <Swiper
          loop={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          speed={5000}
          breakpoints={{
            200: {
              slidesPerView: 1.5,
              spaceBetween: 16
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 16
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 32
            },
          }}
        >
          <SwiperSlide className="w-full max-w-[458px] lg:max-w-full">
            <button className="px-4 py-2 border rounded-full w-full text-white font-['Questrial',sans-serif] text-sm leading-[150%] md:text-2xl hover:bg-[#0046FA] hover:border-[#0046FA]">
              {t('serviceList.0')}
            </button>
          </SwiperSlide>
          <SwiperSlide className="w-full max-w-[458px] lg:max-w-full">
            <button className="px-4 py-2 border rounded-full w-full text-white font-['Questrial',sans-serif] text-sm leading-[150%] md:text-2xl hover:bg-[#0046FA] hover:border-[#0046FA]">
              {t('serviceList.1')}
            </button>
          </SwiperSlide>
          <SwiperSlide className="w-full max-w-[458px] lg:max-w-full">
            <button className="px-4 py-2 border rounded-full w-full text-white font-['Questrial',sans-serif] text-sm leading-[150%] md:text-2xl hover:bg-[#0046FA] hover:border-[#0046FA]">
              {t('serviceList.2')}
            </button>
          </SwiperSlide>
          <SwiperSlide className="w-full max-w-[458px] lg:max-w-full">
            <button className="px-4 py-2 border rounded-full w-full text-white font-['Questrial',sans-serif] text-sm leading-[150%] md:text-2xl hover:bg-[#0046FA] hover:border-[#0046FA]">
              {t('serviceList.3')}
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
      <div>
        <Swiper
          loop={true}
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          speed={5500}
          breakpoints={{
            200: {
              slidesPerView: 1.5,
              spaceBetween: 16
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 16
            },
            1024: {
              slidesPerView: 1,
              spaceBetween: 32
            },
          }}
        >
          <SwiperSlide className="w-full max-w-[458px] lg:max-w-full">
            <button className="px-4 py-2 border rounded-full w-full text-white font-['Questrial',sans-serif] text-sm leading-[150%] md:text-2xl hover:bg-[#0046FA] hover:border-[#0046FA]">
              {t('serviceList.4')}
            </button>
          </SwiperSlide>
          <SwiperSlide className="w-full max-w-[458px] lg:max-w-full">
            <button className="px-4 py-2 border rounded-full w-full text-white font-['Questrial',sans-serif] text-sm leading-[150%] md:text-2xl hover:bg-[#0046FA] hover:border-[#0046FA]">
              {t('serviceList.5')}
            </button>
          </SwiperSlide>
          <SwiperSlide className="w-full max-w-[458px] lg:max-w-full">
            <button className="px-4 py-2 border rounded-full w-full text-white font-['Questrial',sans-serif] text-sm leading-[150%] md:text-2xl hover:bg-[#0046FA] hover:border-[#0046FA]">
              {t('serviceList.6')}
            </button>
          </SwiperSlide>
          <SwiperSlide className="w-full max-w-[458px] lg:max-w-full">
            <button className="px-4 py-2 border rounded-full w-full text-white font-['Questrial',sans-serif] text-sm leading-[150%] md:text-2xl hover:bg-[#0046FA] hover:border-[#0046FA]">
              {t('serviceList.7')}
            </button>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default HorizontalScroll;
