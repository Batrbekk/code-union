import styles from './index.module.scss';
import {useTranslation} from "react-i18next";
import {COMMON_TNS} from "@/lib/i18n/consts";

export const Headline = () => {
  const { t } = useTranslation([COMMON_TNS]);

  return (
    <div className="flex flex-col items-center px-5 lg:container mx-auto py-20 text-center mb-10">
      <div className="md:max-w-[868px] flex flex-col items-center gap-y-4">
        <p className="font-bold text-2xl leading-[130%] font-['Raleway',sans-serif] md:text-5xl md:leading-[64px] text-white">
          {t('headlineTitle.0')} <span className="text-[#0046FA]">{t('headlineTitle.1')}</span>
        </p>
        <p className="max-w-[632px] text-[#616161] text-base leading-[150%] font-['Questrial',sans-serif] font-semibold md:text-2xl md:leading-[150%]">
          {t('headlineDesc')}
        </p>
      </div>
    </div>
  )
}

export default Headline;
