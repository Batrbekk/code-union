import styles from "./index.module.scss";
import {useTranslation} from "react-i18next";
import {COMMON_TNS} from "@/lib/i18n/consts";
import { Dialog, Transition } from '@headlessui/react'
import React, { useCallback, useState, Fragment } from "react";

type Props = {
  text: string,
  className: string,
};

export const ModalButton: React.FC<Props> = (props) => {
  const { t } = useTranslation([COMMON_TNS]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeChip, setActiveChip] = useState<string>('');
  const [activePlatform, setActivePlatform] = useState<string>('');
  const [activeAbout, setActiveAbout] = useState<string>('');

  const initToHelper = useCallback((index) => {
    setActiveChip(index);
  }, []);

  const initToPlatform = useCallback((index) => {
    setActivePlatform(index);
  }, []);

  const initToAbout = useCallback((index) => {
    setActiveAbout(index);
  }, []);

  const toShow = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  const helperData = [
    {
      id: 1,
      text: t('bidHelpChips.0')
    },
    {
      id: 2,
      text: t('bidHelpChips.1')
    },
    {
      id: 3,
      text: t('bidHelpChips.2')
    },
    {
      id: 4,
      text: t('bidHelpChips.3')
    }
  ];
  const platformData = [
    {
      id: 1,
      text: "IOS"
    },
    {
      id: 2,
      text: "Android"
    },
    {
      id: 3,
      text: "Web"
    },
    {
      id: 4,
      text: t('bidAnother')
    }
  ];
  const aboutData = [
    {
      id: 1,
      text: t('bidAbouts.0')
    },
    {
      id: 2,
      text: t('bidAbouts.1')
    },
    {
      id: 3,
      text: t('bidAbouts.2')
    },
    {
      id: 4,
      text: t('bidAbouts.3')
    },
    {
      id: 5,
      text: t('bidAbouts.4')
    },
    {
      id: 6,
      text: t('bidAbouts.5')
    },
    {
      id: 7,
      text: t('bidAbouts.6')
    },
  ];

  return (
    <>
      <button className={`${props.className} ${styles.btn}`} onClick={toShow}>
        {props.text}
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={toShow}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full lg:max-w-[980px] transform overflow-hidden rounded-2xl bg-white px-4 py-8 lg:p-[50px] text-left align-middle shadow-xl transition-all">
                  <div className="flex flex-col gap-y-10">
                    <div>
                      <Dialog.Title
                        as="h3"
                        className="font-['Raleway',sans-serif] text-center font-bold text-xl lg:text-[32px] leading-[120%] text-[#070809] mb-[20px]"
                      >
                        {t('bidHelpTitle')}
                      </Dialog.Title>
                      <div className="grid grid-cols-2 gap-x-4 gap-y-2 w-full">
                        {helperData.map((chip) => {
                          return (
                            <div
                              key={chip.id}
                              onClick={() => {
                                initToHelper(chip.text);
                              }}
                              className={`${activeChip === chip.text ? styles.active : ''} bg-[#F1F1F1] border border-[#f1f1f1] text-[#616161] py-4 px-4 w-full rounded-full text-center cursor-pointer hover:bg-transparent hover:border-[#070809] hover:text-[#070809]`}
                            >
                              <p className="font-['Questrial',sans-serif] text-xs lg:text-xl leading-[100%]">
                                {chip.text}
                              </p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <div>
                      <Dialog.Title
                        as="h3"
                        className="font-['Raleway',sans-serif] text-center font-bold text-xl lg:text-[32px] leading-[120%] text-[#070809] mb-[20px]"
                      >
                        {t('bidPlatformsTitle')}
                      </Dialog.Title>
                      <div className="flex items-center gap-x-[10px] w-full">
                        {platformData.map((chip) => {
                          return (
                            <div
                              key={chip.id}
                              onClick={() => {
                                initToPlatform(chip.text);
                              }}
                              className={`${activePlatform === chip.text ? styles.active : ''} bg-[#F1F1F1] border border-[#f1f1f1] text-[#616161] py-4 w-full rounded-full text-center cursor-pointer hover:bg-transparent hover:border-[#070809] hover:text-[#070809]`}
                            >
                              <p className="font-['Questrial',sans-serif] text-xs lg:text-xl leading-[100%]">
                                {chip.text}
                              </p>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                    <div>
                      <Dialog.Title
                        as="h3"
                        className="font-['Raleway',sans-serif] text-center font-bold text-xl lg:text-[32px] leading-[120%] text-[#070809] mb-[20px]"
                      >
                        {t('bidAboutTitle')}
                      </Dialog.Title>
                      <div className="flex justify-center">
                        <div className="flex flex-wrap justify-center max-w-[700px] items-center gap-[10px] w-full">
                          {aboutData.map((chip) => {
                            return (
                              <div
                                key={chip.id}
                                onClick={() => {
                                  initToAbout(chip.text);
                                }}
                                className={`${activeAbout === chip.text ? styles.active : ''} bg-[#F1F1F1] border border-[#f1f1f1] text-[#616161] py-4 px-4 md:px-6 rounded-full text-center cursor-pointer hover:bg-transparent hover:border-[#070809] hover:text-[#070809]`}
                              >
                                <p className="font-['Questrial',sans-serif] text-xs lg:text-xl leading-[100%]">
                                  {chip.text}
                                </p>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export type { Props as ModalButtonProps };
export default ModalButton;
