import { FC } from 'react';

interface Props {
  title: string;
  description: string;
}

const HeadingBlock:FC<Props> = ({ title, description }) => {
  return (
    <>
      <h2 className='
        font-bold text-2xl font-svn leading-normal mt-8 mb-1
        lg:text-5xl lg:leading-normal
      '>
        {title}
      </h2>
      <p>{description}</p>
    </>
  )
}

export default HeadingBlock