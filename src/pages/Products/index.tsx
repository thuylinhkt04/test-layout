import { useState, useEffect } from 'react';
import { PAGING_LIMIT } from '../../constans'
import Layout from './../../layout'
import { CardItem, Pagination } from '../../components'
import { ProductCardItemRaw, ProductCardItem } from '../../types/index'
import { ProductsData } from '../../mockup/index'

const dataRaw: ProductCardItemRaw[] = ProductsData?.products;
const data: ProductCardItem[] =  dataRaw.map(item => {
  const newItem: ProductCardItem = {
    id: item.id,
    title: item.title,
    imageSrc: item.image.src,
    price: Number(item.variants[0].price),
    originalPrice: Number(item.variants[0].compare_at_price),
    inventoryManagement: item.variants[0].inventory_management,
    inventoryQuantity: item.variants[0].inventory_quantity,
  }
  return newItem
});

const Products = () => {
  const [ products, setProducts ] = useState<ProductCardItem[]>(data)
  const [ productsOnPage, setProductsOnPage ] = useState<ProductCardItem[]>(data)

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      q: { value: string };
    };
    const q = target.q.value.toLowerCase();
    if (!q) {
      setProducts(data)
      return
    }
    const newData = data.filter(item => item.title.toLowerCase().includes(q)) || []
    setProducts(newData)
  }

  return (
    <Layout>
      <div className='container'>
        <form
          name="search-form"
          className='relative inline-block mt-3'
          onSubmit={(e) =>onSearch(e)}
        >
          <input
            type="text"
            name='q'
            placeholder="Tìm kiếm"
            className='bg-white pr-8 pl-3 py-2 rounded-lg placeholder:text-stone-300'
          />
          <button type='submit' className='absolute top-1/2 right-2 translate-y-[-50%]'>
            <span className='icon-search text-stone-300'></span>
          </button>
        </form>
        {productsOnPage.length > 0 ?
          <div className='my-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-8'>
            { productsOnPage.map((item, idx) => <CardItem key={idx} item={item} />)}
          </div>
        :
          <div className='min-h-[200px] flex items-center justify-center'>Không tìm thấy sản phẩm</div>
        }
        <Pagination
          items={products}
          onPageChange={setProductsOnPage}
        />
      </div>
    </Layout>
  )
}

export default Products;
