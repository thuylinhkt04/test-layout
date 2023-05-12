import React from 'react'
import Layout from './../../layout'
import { BannerHome } from './Banner'
import { IntroBlock } from './IntroBlock'
import { NewProduct } from './NewProduct'
import { ProductsBlock } from './ProductsBlock'
import { InstagramBlock } from './InstagramBlock'
import { FacebookBlock } from './FacebookBlock'
import { ProductItem, ProductTypes } from '../../types/index'


const products: ProductItem[] = [
  {
    name: 'Túi Totes Cactus Bag nữ tính xành điệu',
    image: './../images/product-1.jpg',
    price: 320000,
    types: [ ProductTypes.pink, ProductTypes.blue, ProductTypes.yellow, ProductTypes.white],
  },
  {
    name: 'Túi Totes Cactus Bag nữ tính xành điệu',
    image: './../images/product-1.jpg',
    price: 320000,
    types: [ ProductTypes.pink, ProductTypes.blue, ProductTypes.yellow, ProductTypes.white],
  },
  {
    name: 'Túi Totes Cactus Bag nữ tính xành điệu',
    image: './../images/product-1.jpg',
    price: 320000,
    types: [ ProductTypes.pink, ProductTypes.blue, ProductTypes.yellow, ProductTypes.white],
  },
  {
    name: 'Túi Totes Cactus Bag nữ tính xành điệu',
    image: './../images/product-1.jpg',
    price: 320000,
    types: [ ProductTypes.pink, ProductTypes.blue, ProductTypes.yellow, ProductTypes.white],
  }
]

const Homepage = () => {
  return (
    <Layout>
      <BannerHome />
      <IntroBlock />
      <NewProduct />
      <ProductsBlock
        title='Tote giá “nóng”'
        description='Đống này đang giảm giá nên rất "nóng”. Bạn còn chờ gì nữa mà "phỏng tay” ngay đi'
        products={products}
      />
      <ProductsBlock
        title='Tote bán chạy'
        description='Ra bao nhiêu hàng cũng bán không kịp với mấy cô mà, mà cứ như vậy là Bee thích à nha, hehe'
        products={products}
        classes='text-center lg:text-left'
      />
      <ProductsBlock
        title='Tote nổi bật'
        description='Ra bao nhiêu hàng cũng bán không kịp với mấy cô mà, mà cứ như vậy là Bee thích à nha, hehe'
        products={products}
      />
      <FacebookBlock />
      <InstagramBlock />
    </Layout>
  )
}

export default Homepage;
