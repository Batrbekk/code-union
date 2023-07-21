import 'swiper/css';
import 'aos/dist/aos.css';
import styles from "./index.module.scss";
import React, {useCallback, useEffect, useState} from "react";
import { useTranslation } from "react-i18next";
import { COMMON_TNS } from "@/lib/i18n/consts";
import { Parallax } from 'react-scroll-parallax';
import {CSSEffect} from "parallax-controller";
import { useScroll, animated } from "@react-spring/web";

type Props = {};

export const HorizontalScroll: React.FC<Props> = (props) => {
  const { t } = useTranslation([COMMON_TNS]);
  const { scrollYProgress } = useScroll()
  const [secondParallaxSize, setSecondParallaxSize] = useState<CSSEffect | undefined>(['3%','-25%']);
  const [activeChip, setActiveChip] = useState<Array<any>>([]);

  const initToHelper = useCallback((index) => {
    if (activeChip.includes(index)) {
      const updatedChips = activeChip.filter((item) => item !== index);
      setActiveChip(updatedChips);
    } else {
      setActiveChip([...activeChip, index]);
    }
  }, [activeChip]);

  useEffect(() => {
    if (window.innerWidth > 1200) {
      setSecondParallaxSize(['3%','-25%']);
    }

    if (window.innerWidth < 1200) {
      setSecondParallaxSize(['9.5%', '-25%']);
    }

    if (window.innerWidth < 700) {
      setSecondParallaxSize(['11%', '-25%']);
    }
  }, []);

  // @ts-ignore
  return (
    <div
      className="mb-[100px] lg:px-0 w-full"
    >
      <div className="flex flex-col gap-y-4 lg:max-w-[1280px] lg:mx-auto lg:px-0 px-4">
        <animated.div
          style={{
            transform: scrollYProgress.to(val => `translate(${val*150}%,0)`)
          }}
        >
          <div className="w-[300%] md:w-[150%] lg:w-full">
            <div className="flex items-center gap-2 md:gap-4">
              {[0, 1, 2, 3].map((btn) => {
                return (
                  <button
                    key={btn}
                    onClick={() => {
                      initToHelper(t(`serviceList.${btn}`));
                    }}
                    className={`${activeChip.find((item) => item === t(`serviceList.${btn}`)) ? `${styles.active}` : `text-white`} font-['Gilroy',sans-serif] text-sm leading-[150%] md:text-xl px-4 py-2 border rounded-full`}
                  >
                    {t(`serviceList.${btn}`)}
                  </button>
                );
              })}
            </div>
          </div>
        </animated.div>
        <animated.div
          style={{
            transform: scrollYProgress.to(val => `translate(-${val*150}%,0)`)
          }}
        >
          <div className="w-[300%] md:w-[150%] lg:w-full">
            <div className="flex items-center gap-2 md:gap-4">
              {[4, 5, 6, 7].map((btn) => {
                return (
                  <button
                    key={btn}
                    onClick={() => {
                      initToHelper(t(`serviceList.${btn}`));
                    }}
                    className={`${activeChip.find((item) => item === t(`serviceList.${btn}`)) ? `${styles.active}` : `text-white`} font-['Gilroy',sans-serif] text-sm leading-[150%] md:text-xl px-4 py-2 border rounded-full`}
                  >
                    {t(`serviceList.${btn}`)}
                  </button>
                );
              })}
            </div>
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export type { Props as HorizontalProps };
export default HorizontalScroll;
