import { FC } from 'react';
import { ProductCardItem } from '../../../components'
import { ProductItem } from '../../../types/index'
import Slider, { ResponsiveObject } from "react-slick";

const settingDesktop: ResponsiveObject = {
  breakpoint: 9999,
  settings: "unslick",
}

const settingMobile: ResponsiveObject = {
  breakpoint: 1024,
  settings: {
    arrows: false,
  infinite: true,
  speed: 500,
  centerMode: true,
  centerPadding: "20px",
  slidesToShow: 2,
  slidesToScroll: 1,
  },
}

const settings = {
  responsive: [
    settingDesktop,
    settingMobile,
  ],
};

interface ProductSectionProps {
  title: string;
  description: string;
  products: ProductItem[]
  classes?: string;
}

export const ProductsBlock:FC<ProductSectionProps> = ({
  title, description, products, classes
}) => {
  return (
    <section className={`mb-8 ${classes}`}>
      <div className='container'>
        <h2 className='font-bold text-2xl font-svn leading-[36px] mb-1'>
          {title}
        </h2>
        <p>
          {description}
        </p>
        <Slider {...settings} className="lg:grid lg:grid-cols-4 lg:gap-8">
          {products.map((item, idx) => <div key={idx} className='px-1 py-8'>
            <ProductCardItem item={item}/>
          </div>)}
        </Slider>
      </div>
    </section>
  )
}
