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
              <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.916341 0.166687C0.695327 0.166687 0.483366 0.254485 0.327085 0.410765C0.170805 0.567045 0.0830078 0.779007 0.0830078 1.00002C0.0830078 1.22103 0.170805 1.433 0.327085 1.58928C0.483366 1.74556 0.695327 1.83335 0.916341 1.83335H15.083C15.304 1.83335 15.516 1.74556 15.6723 1.58928C15.8285 1.433 15.9163 1.22103 15.9163 1.00002C15.9163 0.779007 15.8285 0.567045 15.6723 0.410765C15.516 0.254485 15.304 0.166687 15.083 0.166687H0.916341ZM0.0830078 6.00002C0.0830078 5.77901 0.170805 5.56705 0.327085 5.41076C0.483366 5.25448 0.695327 5.16669 0.916341 5.16669H15.083C15.304 5.16669 15.516 5.25448 15.6723 5.41076C15.8285 5.56705 15.9163 5.77901 15.9163 6.00002C15.9163 6.22103 15.8285 6.433 15.6723 6.58928C15.516 6.74556 15.304 6.83335 15.083 6.83335H0.916341C0.695327 6.83335 0.483366 6.74556 0.327085 6.58928C0.170805 6.433 0.0830078 6.22103 0.0830078 6.00002ZM0.0830078 11.0009C0.0830078 10.7798 0.170805 10.5679 0.327085 10.4116C0.483366 10.2553 0.695327 10.1675 0.916341 10.1675H15.083C15.304 10.1675 15.516 10.2553 15.6723 10.4116C15.8285 10.5679 15.9163 10.7798 15.9163 11.0009C15.9163 11.2219 15.8285 11.4338 15.6723 11.5901C15.516 11.7464 15.304 11.8342 15.083 11.8342H0.916341C0.695327 11.8342 0.483366 11.7464 0.327085 11.5901C0.170805 11.4338 0.0830078 11.2219 0.0830078 11.0009Z" fill="white"/>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export type { Props as HeaderProps };
export default Header;
