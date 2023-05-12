import React from "react";
import styles from './index.module.scss';
import {useTranslation} from "react-i18next";
import {COMMON_TNS} from "@/lib/i18n/consts";
import ModalForm from "@/components/organism/ModalForm";

export const AddHeadline = () => {
  const { t } = useTranslation([COMMON_TNS]);

  const btnLog = React.useCallback(() => {
    console.log('asd');
  }, []);

  return (
    <div className="flex flex-col items-center gap-y-6 text-center px-5 pb-[68px] lg:pb-24">
      <p className="font-['Raleway',sans-serif] font-bold text-2xl leading-[120%] md:text-[54px] max-w-[826px] text-white">{t('addTitle')}</p>
      <ModalForm
        text={t('contactUs')}
        className="py-4 md:py-7 w-full md:max-w-[278px] rounded-full bg-[#0046FA] font-bold text-sm md:text-xl text-white"
      />
    </div>
  )
}

export default AddHeadline;
