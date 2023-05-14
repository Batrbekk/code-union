import 'swiper/css';
import React, {useEffect, useState} from "react";
import styles from './index.module.scss';
import {useTranslation} from "react-i18next";
import {COMMON_TNS} from "@/lib/i18n/consts";
import AOS from "aos";
import 'aos/dist/aos.css';

type Props = {};

export const HorizontalScroll: React.FC<Props> = (props) => {
  const { t } = useTranslation([COMMON_TNS]);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init();
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Определение момента, когда выезжающий компонент должен стать видимым
      if (scrollPosition > windowHeight * 0.05) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Добавление прослушивателя события скролла при монтировании компонента
    window.addEventListener('scroll', handleScroll);

    // Удаление прослушивателя события скролла при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div data-aos="fade-down" className="mb-[100px] pl-5 lg:pl-[14%] h-[230px] lg:h-[116px] md:h-[230px] relative items-start gap-y-3">
      <div id="chips" className={`${isVisible ? styles.visible : ''} ${styles.container} flex flex-col gap-y-4`}>
        <div className="flex items-center flex-wrap gap-2 md:gap-4">
          {[0,1,2,3,4,5,6,7].map((btn) => {
            return (
              <button key={btn} className="px-4 py-2 border rounded-full text-white font-['Gilroy',sans-serif] text-sm leading-[150%] md:text-xl lg:text-2xl hover:bg-[#0046FA] hover:border-[#0046FA]">
                {t(`serviceList.${btn}`)}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export type { Props as HorizontalProps };
export default HorizontalScroll;
