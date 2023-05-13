import { FC, useRef, useState } from 'react';
import { ProductItem } from '../types/index'
import { formatCurrency } from '../utils/index'
import Button from './Button'

const ProductCardItem: FC<{item: ProductItem}> = ({
  item
}) => {
  const { name, image, price, types } = item
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | string>('auto');

  return (
    <div style={{height: height}}>
      <div
        ref={ref}
        className='product-card-item shadow-card'
      >
        <div className='mb-3 mr-[-8px] ml-[-8px] mt-[-8px]'>
          <img
            className='w-full rounded-lg md:rounded-2xl'
            src={image}
            alt={name}
            onLoad={() => {
              if (ref?.current) {
                const fullHeight = ref.current.offsetHeight + 40;
                setHeight(fullHeight);
              }
            }}
          />
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
      </div>
    </div>
  )
}

export default ProductCardItem