import React from "react";
import styles from './index.module.scss';
import Image, {StaticImageData} from "next/image";

type Props = {
  bigCard: boolean,
  title: string
  text: string,
  icon: StaticImageData,
  className: string,
  imgPosition?: string,
  textPosition?: string,
};

export const ProjectCardDesc: React.FC<Props> = (props) => {
  return (
    <>
      {props.bigCard ? (
        <div
          className={`
            ${props.className} 
            p-10 rounded-[25px] relative overflow-hidden
            h-[716px] max-w-[474px]
          `}
        >
          <div className="flex flex-col gap-y-2.5">
            <p className="font-['Raleway',sans-serif] font-bold leading-[120%] text-5xl text-white">
              {props.title}
            </p>
            <p className="font-['Gilroy',sans-serif] leading-[150%] text-[22px] text-white">
              {props.text}
            </p>
          </div>
          <div className={`${props.imgPosition} absolute`}>
            {props.icon && (
              <Image
                src={props.icon}
                alt="project-icon"
              />
            )}
          </div>
        </div>
      ) : (
        <div
          className={`
          ${props.className} 
          rounded-[25px] relative overflow-hidden
          h-[350px] max-w-[670px]
        `}>
          <div className={`absolute max-w-[336px] py-10 ${props.textPosition}`}>
            <div className="flex flex-col justify-between h-[270px]">
              <p className="font-['Raleway',sans-serif] font-bold leading-[120%] text-5xl text-white">
                {props.title}
              </p>
              <p className="font-['Gilroy',sans-serif] leading-[150%] text-[22px] text-white">
                {props.text}
              </p>
            </div>
          </div>
          <Image src={props.icon} alt="project-img" />
        </div>
      )}
    </>
  )
}

export type { Props as ProjectCardDescProps };
export default ProjectCardDesc;
