import React from "react";
import { useRouter } from "next/router";
import styles from "./index.module.scss";
import { useTranslation } from "react-i18next";
import { COMMON_TNS } from "@/lib/i18n/consts";

type Props = {
    className: string,
};

export const Switch: React.FC<Props> = (props) => {
    const router = useRouter();

    const { t, i18n } = useTranslation([COMMON_TNS]);

    const handleSelectLang = (lang: string) => {
        const l = lang;
        i18n.changeLanguage(l);
        router.push(router.pathname, router.asPath, { locale: l });
    };

    return (
      <div className={`${styles.switcher} ${props.className} px-6 py-3 border rounded-full border-[rgba(255,255,255,0.4)] hover:border-white flex items-center gap-x-2 cursor-pointer`}>
        <a
          onClick={() => handleSelectLang('ru')}
          className={router.locale === 'ru' ? 'text-white':'text-[rgba(255,255,255,0.2)]'}
        >
            RU
        </a>
        <span className="text-white">/</span>
        <a
          onClick={() => handleSelectLang('en')}
          className={router.locale === 'en' ? 'text-white':'text-[rgba(255,255,255,0.2)]'}
        >
            EN
        </a>
      </div>
    );
}

export type { Props as SwitchProps };
export default Switch;
