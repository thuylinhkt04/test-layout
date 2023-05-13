import { FC, useRef, useState } from 'react';
import { ProductCardItem } from '../types/index'
import { formatCurrency, formatNumber } from '../utils/index'
import Button from './Button'

const CardItem: FC<{item: ProductCardItem}> = ({ item }) => {
  const { title, imageSrc, price, originalPrice, inventoryManagement, inventoryQuantity } = item
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | string>('auto');
  const isDiscount = price === originalPrice;
  const percentDiscount = Math.round(price/originalPrice);

  const getInventory = () => {
    if (inventoryManagement == null) {
      return <div className='text-sm'>Còn hàng</div>
    }
    if (inventoryQuantity > 0) {
      return <div className='text-sm'>Còn {formatNumber(inventoryQuantity)} sản phẩm</div>
    }
    return <div className='text-sm text-stone-400'>Hết hàng</div>
  }

  return (
    <div style={{height: height}}>
      <div
        ref={ref}
        className='product-card-item shadow-card'
      >
        <div className='mb-3 mr-[-8px] ml-[-8px] mt-[-8px]'>
          <img
            className='w-full rounded-lg md:rounded-2xl'
            src={imageSrc}
            alt={title}
            onLoad={() => {
              if (ref?.current) {
                const fullHeight = ref.current.offsetHeight + 40;
                setHeight(fullHeight);
              }
            }}
          />
        </div>
        <h3 className='font-bold font-svn mb-1'>{title}</h3>
        <div className='font-bold font-svn'>
          <span className='text-blue'>{formatCurrency(price)} đ</span>
          {isDiscount && <>
            <div
              className='
                absolute top-0 left-0 rounded-tl-lg bg-red-400 text-white px-2 py-1 text-sm
                lg:top-[-4px] lg:left-[-4px] lg:rounded-tl-xl
              '
            >-{percentDiscount}%</div>
            <span className='pl-3 text-red-400 text-sm line-through'>{formatCurrency(originalPrice)} đ</span>
          </>}
        </div>
        {getInventory()}
        <div className='product-card-item__btn'>
          <Button classes="w-full lg:w-auto" text="Mua ngay" />
        </div>
      </div>
    </div>
  )
}

export default CardItem