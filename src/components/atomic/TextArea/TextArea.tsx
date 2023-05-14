import React, {ChangeEvent, useState} from "react";
import styles from './index.module.scss';

type Props = {
  isError: boolean;
  placeholder: string;
  inputChange: (value: string) => void;
}

export const TextArea: React.FC<Props> = (props) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setValue(event.target.value);
    props.inputChange(event.target.value);
  };

  return (
    <textarea
      value={value}
      onChange={handleChange}
      placeholder={props.placeholder}
      className={`${props.isError ? 'bg-[#ffebeb]' : 'bg-transparent'} h-[150px] resize-none p-4 md:p-6 border border-[#c4c4c4] rounded-[25px] w-full focus-visible:outline-0 focus:border-[#070809] text-sm placeholder:text-sm font-['Gilroy',sans-serif] leading-[100%] placeholder:leading-[100%] font-medium placeholder:font-medium lg:text-xl lg:placeholder:text-xl placeholder:text-[#c3c3c3] text-[#070809]`}
    />
  )
}

export type { Props as TextAreaProps };
export default TextArea;
