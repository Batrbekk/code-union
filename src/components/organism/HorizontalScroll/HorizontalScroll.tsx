import 'swiper/css';
import React, { useEffect, useRef, useState } from "react";
import styles from './index.module.scss';
import { useTranslation } from "react-i18next";
import { COMMON_TNS } from "@/lib/i18n/consts";
import AOS from "aos";
import 'aos/dist/aos.css';

type Props = {};

export const HorizontalScroll: React.FC<Props> = (props) => {
  const { t } = useTranslation([COMMON_TNS]);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHorizontalScrollEnd, setHorizontalScrollEnd] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = 'hidden';

    const handleScroll = () => {
      const scrollContainer = scrollContainerRef.current;
      if (scrollContainer) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
        const isEnd = scrollLeft + clientWidth >= scrollWidth;
        setHorizontalScrollEnd(isEnd);
      }
    };

    const handleWheel = (event: WheelEvent) => {
      if (document.body.style.overflowY === 'hidden') {
        if (event.deltaY !== 0) {
          setScrollLeft((prevScrollLeft) => prevScrollLeft + event.deltaY);
        }
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      window.addEventListener('wheel', handleWheel, { passive: false });
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);

  useEffect(() => {
    if (scrollContainerRef.current && contentRef.current) {
      scrollContainerRef.current.scrollTo({ left: scrollLeft });
    }
  }, [scrollLeft]);

  useEffect(() => {
    if (isHorizontalScrollEnd) {
      document.body.style.overflowX = 'hidden';
      document.body.style.overflowY = '';
    }
  }, [isHorizontalScrollEnd]);

  return (
    <div
      className={`${isHorizontalScrollEnd ? 'overflow-x-hidden' : 'overflow-x-scroll'} ${styles.scrollHidden} mb-[100px]`}
      ref={scrollContainerRef}
    >
      <div
        id="chips"
        className="h-[230px] lg:h-[116px] md:h-[230px] w-[100%] lg:w-[86%] relative items-start gap-y-3"
        ref={contentRef}
      >
        <div className="flex flex-col absolute md:left-[50%] lg:left-[80%] md:px-4 lg:px-0 w-full gap-y-4">
          <div className="flex flex-col gap-y-2 md:gap-y-4 w-full">
            <div className="flex items-center gap-2 md:gap-4">
              {[0, 1, 2, 3].map((btn) => {
                return (
                  <button
                    key={btn}
                    className="px-4 py-2 border rounded-full text-white font-['Gilroy',sans-serif] text-sm leading-[150%] md:text-xl lg:text-2xl hover:bg-[#0046FA] hover:border-[#0046FA]"
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
                    className="px-4 py-2 border rounded-full text-white font-['Gilroy',sans-serif] text-sm leading-[150%] md:text-xl lg:text-2xl hover:bg-[#0046FA] hover:border-[#0046FA]"
                  >
                    {t(`serviceList.${btn}`)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export type { Props as HorizontalProps };
export default HorizontalScroll;
