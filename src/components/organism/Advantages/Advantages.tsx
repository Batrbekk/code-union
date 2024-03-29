import {useTranslation} from "react-i18next";
import {COMMON_TNS} from "@/lib/i18n/consts";
import AdvantagesCard from "@/components/atomic/AdvantagesCard";
import {useEffect} from "react";
import AOS from "aos";
import 'aos/dist/aos.css';

export const Advantages = () => {
  const { t } = useTranslation([COMMON_TNS]);

  const cardData = [
    {
      id: 1,
      title: t('advantagesCard1.0'),
      text: t('advantagesCard1.1'),
      className: "bg-[#0046FA] lg:max-w-[550px]",
      withIcons: true
    },
    {
      id: 2,
      title: t('advantagesCard2.0'),
      text: t('advantagesCard2.1'),
      className: "bg-[#00BA77] lg:max-w-[300px]",
      withIcons: false
    },
    {
      id: 3,
      title: t('advantagesCard3.0'),
      text: t('advantagesCard3.1'),
      className: "bg-[#0089ED] lg:max-w-[400px]",
      withIcons: false
    },
  ]

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="px-5 lg:px-0 flex lg:container lg:max-w-[1280px] mx-auto flex-col items-start gap-y-8">
      <div className="flex flex-col gap-y-4">
        <p className="text-white font-bold font-['Raleway',sans-serif] text-[28px] leading-[130%] md:text-[54px] md:leading-[120%] w-1/2">
          {t('advantagesTitle')}
        </p>
        <p className="text-white text-base leading-[150%] font-['Gilroy',sans-serif] md:text-[22px] md:leading-[150%]">
          {t('advantagesDesc')}
        </p>
      </div>
      <div data-aos="fade-up" className="flex flex-col lg:flex-row items-center gap-y-3 w-full lg:gap-x-4 lg:items-stretch">
        {cardData.map((card) => {
          return (
            <AdvantagesCard
              key={card.id}
              title={card.title}
              text={card.text}
              className={card.className}
              withIcons={card.withIcons}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Advantages;
