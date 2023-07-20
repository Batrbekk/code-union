import 'swiper/css';
import 'aos/dist/aos.css';
import React, {useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import { COMMON_TNS } from "@/lib/i18n/consts";
import { Parallax } from 'react-scroll-parallax';
import {CSSEffect} from "parallax-controller";

type Props = {};

export const HorizontalScroll: React.FC<Props> = (props) => {
  const { t } = useTranslation([COMMON_TNS]);
  const [firstParallaxSize, setFirstParallaxSize] = useState<CSSEffect | undefined>(['-30%','50%']);
  const [secondParallaxSize, setSecondParallaxSize] = useState<CSSEffect | undefined>(['22%','-50%']);

  useEffect(() => {
    if (window.innerWidth > 1200) {
      setFirstParallaxSize(['-30%','50%']);
      setSecondParallaxSize(['22%','-50%']);
    }

    if (window.innerWidth < 1200) {
      setFirstParallaxSize(['-45%', '50%']);
      setSecondParallaxSize(['45%', '-50%']);
    }

    if (window.innerWidth < 700) {
      setFirstParallaxSize(['-42%', '50%']);
      setSecondParallaxSize(['45%', '-50%']);
    }
  }, []);

  // @ts-ignore
  return (
    <div
      className="mb-[100px] lg:px-0 w-full"
    >
      <Parallax
        className="mb-4 lg:max-w-[1280px] lg:mx-auto"
        translateY={['0%','0%']}
        translateX={firstParallaxSize}
      >
        <div className="w-[200%] md:w-[150%] lg:w-full">
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
        </div>
      </Parallax>
      <Parallax
        className="lg:max-w-[1280px] lg:mx-auto"
        translateY={['0%','0%']}
        translateX={secondParallaxSize}
      >
        <div className="w-[300%] md:w-[150%] lg:w-full">
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
