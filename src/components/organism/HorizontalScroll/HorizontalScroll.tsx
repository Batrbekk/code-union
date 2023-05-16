import 'swiper/css';
import 'aos/dist/aos.css';
import React from "react";
import styles from './index.module.scss';
import { useTranslation } from "react-i18next";
import { COMMON_TNS } from "@/lib/i18n/consts";
import { Parallax } from 'react-scroll-parallax';

type Props = {};

export const HorizontalScroll: React.FC<Props> = (props) => {
  const { t } = useTranslation([COMMON_TNS]);

  return (
    <div
      className="flex mb-[100px] lg:max-w-[1280px] lg:px-0 mx-auto"
    >
      <Parallax
        translateY={['0%','0%']}
        translateX={['100%', '-40%']}
      >
        <div className="flex flex-col gap-y-2 md:gap-y-4 w-[200%] md:w-[150%] lg:w-full">
          <div className="flex items-center gap-2 md:gap-4">
            {[0, 1, 2, 3].map((btn) => {
              return (
                <button
                  key={btn}
                  className="px-4 py-2 border rounded-full text-white font-['Gilroy',sans-serif] text-sm leading-[150%] md:text-xl hover:bg-[#0046FA] hover:border-[#0046FA]"
                >
                  {t(`serviceList.${btn}`)}
                </button>
              );
            })}
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            {[4, 5, 6, 7].map((btn) => {
              return (
                <button
                  key={btn}
                  className="px-4 py-2 border rounded-full text-white font-['Gilroy',sans-serif] text-sm leading-[150%] md:text-xl hover:bg-[#0046FA] hover:border-[#0046FA]"
                >
                  {t(`serviceList.${btn}`)}
                </button>
              );
            })}
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export type { Props as HorizontalProps };
export default HorizontalScroll;
