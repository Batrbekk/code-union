import React from "react";
import Image from "next/image";
import styles from './index.module.scss';
import Logo from "public/assets/logo.svg";
import Toggle from "public/assets/toggle.svg";
import { COMMON_TNS } from "@/lib/i18n/consts";
import { useTranslation } from "react-i18next";
import Switch from "@/components/atomic/Switch";
import Button from "@/components/atomic/Button";

type Props = {};

export const Header: React.FC<Props> = (props) => {
  const { t } = useTranslation([COMMON_TNS]);

  const btnLog = React.useCallback(() => {
    console.log('asd');
  }, []);

  return (
    <>
      <header className="py-4 px-5 lg:px-[120px] md:px-5 flex items-center justify-between">
        <div className={`${styles.navLogo} flex flex-col items-start gap-x-4 md:flex-col md:items-start lg:flex-row lg:items-end`}>
          <Image src={Logo} alt="logo" />
          <p className="text-[8px] md:text-lg">Code Union</p>
        </div>
        <div className="flex items-center gap-x-10">
          <div className={`${styles.navLinks} hidden items-center gap-x-16  md:hidden lg:flex`}>
            <a href="#" className="text-[#c4c4c4] hover:text-white visited:text-[#616161] text-base">
              {t('portfolio')}
            </a>
            <a href="#" className="text-[#c4c4c4] hover:text-white visited:text-[#616161] text-base">
              {t('blog')}
            </a>
            <a href="#" className="text-[#c4c4c4] hover:text-white visited:text-[#616161] text-base">
              {t('events')}
            </a>
            <a href="#" className="text-[#c4c4c4] hover:text-white visited:text-[#616161] text-base">
              {t('vacancy')}
            </a>
          </div>
          <div className="flex items-center gap-x-4">
            <Switch className="hidden md:flex" />
            <Button text={t('contactUs')} className="px-6 py-3 rounded-full bg-[#0046FA] font-bold text-xs md:text-base" onClick={btnLog} />
            <button className="sm:block md:block lg:hidden">
              <Image src={Toggle} alt="menu-icon" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export type { Props as HeaderProps };
export default Header;
