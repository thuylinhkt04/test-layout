import { FC } from 'react';

interface ButtonProps {
  text: string;
  classes?: string;
}

const Button:FC<ButtonProps> = ({
  text, classes
}) => {
  return (
    <button className={`bg-primary px-2 lg:px-7 py-2 w-full rounded-xl hover:bg-primary/70 transition-all ${classes}`}>
      <span className="font-bold font-svn">
        {text}
      </span>
    </button>
  )
}

export default Button