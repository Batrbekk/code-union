import React from "react";
import Image from "next/image";
import styles from "./index.module.scss";
import {useTranslation} from "react-i18next";
import {COMMON_TNS} from "@/lib/i18n/consts";
import TimeIcon from "public/assets/icons/time.svg";
import BudgetIcon from "public/assets/icons/budget.svg";

type Props = {
  title: string,
  text: string,
  className: string,
  withIcons: boolean
};

export const AdvantagesCard: React.FC<Props> = (props) => {
  const { t } = useTranslation([COMMON_TNS]);

  return (
    <div className={`${props.className} p-5 md:p-8 w-full rounded-[10px] flex flex-col gap-y-4`}>
      <p className="font-['Raleway',sans-serif] font-bold text-2xl leading-[120%] md:text-4xl">
        {props.title}
      </p>
      {props.withIcons && (
        <div className="flex items-center gap-x-2">
          <div className="px-4 py-2 border  rounded-full flex items-center gap-x-1.5">
            <Image src={TimeIcon} alt="time-icon" />
            <p className="font-['Questrial',sans-serif] font-medium text-xs leading-[150%] md:text-2xl">
              {t('advantagesTime')}
            </p>
          </div>
          <div className="px-4 py-2 border  rounded-full flex items-center gap-x-1.5">
            <Image src={BudgetIcon} alt="time-icon" />
            <p className="font-['Questrial',sans-serif] font-medium text-xs leading-[150%] md:text-2xl">
              {t('advantagesBudget')}
            </p>
          </div>
        </div>
      )}
      <p className="font-['Questrial',sans-serif] text-sm leading-[150%] w-8/12 lg:w-full md:text-[22px]">
        {props.text}
      </p>
    </div>
  )
}

export type { Props as AdvantagesCardProps };
export default AdvantagesCard;
