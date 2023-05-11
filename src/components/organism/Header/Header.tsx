import Image from "next/image";
import styles from './index.module.scss';
import Logo from "public/assets/logo.svg";
import { COMMON_TNS } from "@/lib/i18n/consts";
import { useTranslation } from "react-i18next";
import Switch from "@/components/atomic/Switch";
import Button from "@/components/atomic/Button";
import React, { useEffect, useState } from "react";
import DrawerMenu from "@/components/organism/DrawerMenu";

type Props = {};

export const Header: React.FC<Props> = (props) => {
  const { t } = useTranslation([COMMON_TNS]);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  const btnLog = React.useCallback(() => {
    console.log('asd');
  }, []);

  return (
    <div className={`sticky top-0 w-full z-10 bg-[#070809] ${scroll ? 'shadow-lg shadow-[rgba(255,255,255,0.4)]': ''}`}>
      <header className="py-4 px-5 lg:container mx-auto md:px-5 flex items-center justify-between">
        <div className={`${styles.navLogo} flex flex-col items-start gap-x-4 md:flex-col md:items-start lg:flex-row lg:items-end`}>
          <Image src={Logo} alt="logo" />
          <p className="text-[8px] md:text-lg text-white">Code Union</p>
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
            <Button text={t('contactUs')} className="text-white px-6 py-3 rounded-full bg-[#0046FA] font-bold text-xs md:text-base" onClick={btnLog} />
            <DrawerMenu />
          </div>
        </div>
      </header>
    </div>
  );
};

export type { Props as HeaderProps };
export default Header;
