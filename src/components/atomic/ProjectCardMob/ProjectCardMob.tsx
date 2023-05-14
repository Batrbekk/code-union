import React, {useEffect} from "react";
import styles from './index.module.scss';
import Image, {StaticImageData} from "next/image";
import 'aos/dist/aos.css';
import AOS from "aos";

type Props = {
  title: string
  text: string,
  icon: StaticImageData,
  className: string,
  height: string,
  imgPosition: string,
  aos: string
};

export const ProjectCardMob: React.FC<Props> = (props) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      data-aos={props.aos}
      className={`
        ${props.className} 
        p-5 rounded-[15px] ${props.height} relative overflow-hidden
      `}
    >
      <div className="flex flex-col gap-y-2.5">
        <p className="font-['Raleway',sans-serif] font-bold text-2xl leading-[120%] md:text-5xl text-white">
          {props.title}
        </p>
        <p className="font-['Gilroy',sans-serif] text-base leading-[150%] md:text-[22px] text-white">
          {props.text}
        </p>
      </div>
      <div className={`absolute ${props.imgPosition}`}>
        <Image
          priority
          src={props.icon}
          alt="project-icon"
        />
      </div>
    </div>
  )
}

export type { Props as ProjectCardMobProps };
export default ProjectCardMob;
