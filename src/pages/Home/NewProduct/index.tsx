import { Button } from '../../../components'

export const NewProduct = () => {
  return (
    <section className='mb-8'>
      <div className='container lg:flex'>
        <div className='lg:order-last lg:w-1/2 lg:pl-20'>
          <img className='w-full' src="./../images/home-new-product.png" alt="Siêu phẩm Tote mới ra lò"/>
        </div>
        <div className='lg:order-first lg:w-1/2'>
          <h2 className='font-bold text-2xl font-svn leading-[36px] mb-1'>
            Siêu phẩm Tote mới ra lò
          </h2>
          <p className='mb-8'>
            Mới "chế" ra cái Tote mới các bác ạ. Thông tin mô tả sơ bộ các bác đọc ở dưới nhé. em đi đóng hàng
            giao cho khách phát
          </p>
          <div className='bg-white rounded-2xl shadow-[0_6px_36px_rgba(0,0,0,0.1)] px-4 py-7 relative lg:px-10 lg:py-8'>
            <div className='absolute rotate-45 w-[18px] h-[88px] bg-[#FCD4D4]/70 top-[-28px] left-[4px]'></div>
            <p className='font-medium mb-6'>Thông tin mô tả sơ bộ</p>
            <ul>
              <li className='flex mb-4'>
                <span className='pr-3'>
                  <img className='w-5' src="./../images/icon-textile.png" alt="Chất vải"/>
                </span>
                <p className='flex-1'>Chất vải canvas mềm mịn, không xù, không nhão</p>
              </li>
              <li className='flex mb-4'>
                <span className='pr-3'>
                  <img className='w-5' src="./../images/icon-types.png" alt="Chất vải"/>
                </span>
                <p className='flex-1'>Bee có 5 màu cho bạn lựa canh: Xanh dương, Hồng baby, Vàng chanh,...</p>
              </li>
              <li className='flex mb-4'>
                <span className='pr-3'>
                  <img className='w-5' src="./../images/icon-size.png" alt="Chất vải"/>
                </span>
                <p className='flex-1'>Size túi: 38*34*7cm</p>
              </li>
              <li className='flex mb-4'>
                <span className='pr-3'>
                  <img className='w-5' src="./../images/icon-zipper.png" alt="Chất vải"/>
                </span>
                <p className='flex-1'>Túi có khoá kéo, túi con tiện lợi cho nàng sử dụng</p>
              </li>
            </ul>
            <Button classes="mt-4 w-full lg:w-auto" text="Tìm hiểu thêm" />
          </div>
        </div>
      </div>
    </section>
  )
}
