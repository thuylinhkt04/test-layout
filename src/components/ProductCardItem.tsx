import { FC, useRef, useState, useLayoutEffect } from 'react';
import { ProductItem } from '../types/index'
import { formatCurrency } from '../utils/index'
import Button from './Button'

const ProductCardItem: FC<{item: ProductItem}> = ({
  item
}) => {
  const { name, image, price, types } = item
  const ref = useRef<HTMLAnchorElement>(null);
  const [height, setHeight] = useState<number>(444);

  useLayoutEffect(() => {
    if (ref?.current) {
      // const fullHeight = ref.current.offsetHeight + 40;
      // setHeight(fullHeight);
    }
  }, []);

  return (
    <div className='product-card-item' style={{height: height}}>
      <a ref={ref} className='product-card-item__inner block bg-white rounded-lg md:rounded-2xl shadow-card cursor-pointer p-3 md:p-5 text-left'>
        <div className='mb-3 mr-[-8px] ml-[-8px] mt-[-8px]'>
          <img className='w-full rounded-lg md:rounded-2xl' src={image} alt={name} />
        </div>
        <h3 className='font-bold font-svn mb-1'>{name}</h3>
        <div className='text-blue font-bold font-svn mb-2'>{formatCurrency(price)} đ</div>
        <div className='flex gap-2'>
          {types.map((i, idx) => <span
            key={idx}
            className={`w-4 h-4 rounded-full shadow-[0_3px_8px_rgba(0,0,0,0.15)] bg-${i}`}
          ></span>)}
        </div>
        <div className='product-card-item__btn'>
          <Button classes="w-full lg:w-auto" text="Mua ngay" />
        </div>
      </a>
    </div>
  )
}

export default ProductCardItem