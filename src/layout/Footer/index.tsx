import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='py-8 bg-white'>
      <div className='container lg:flex justify-between'>
        <ul className='flex flex-wrap mx-[-12px] mb-7 lg:mx-0 lg:mb-0'>
          <li className='w-6/12 px-[12px] lg:w-auto lg:pr-10 lg:pl-0'>
            <Link to='/' title="Sản phẩm hot" className='font-svn text-sm hover:underline'>
              Sản phẩm hot
            </Link>
          </li>
          <li className='w-6/12 px-3 lg:w-auto lg:px-10'>
            <Link to='/' title="Hot deal tháng 12" className='font-svn text-sm hover:underline'>
            Hot deal tháng 12
            </Link>
          </li>
          <li className='w-6/12 px-3 lg:w-auto lg:px-10'>
            <Link to='/' title="Sản phẩm bán chạy" className='font-svn text-sm hover:underline'>
              Sản phẩm bán chạy
            </Link>
          </li>
          <li className='w-6/12 px-3 lg:w-auto lg:px-10'>
            <Link to='/' title="Anotner links" className='font-svn text-sm hover:underline'>
              Anotner links
            </Link>
          </li>
        </ul>
        <div className='flex justify-between items-center'>
          <small className="pr-5">&copy; 2020 beebag.com.vn</small>
          <ul className="flex gap-5">
            <li>
              <a href='/' title="facebook" target="_blank" className="transition-colors hover:text-blue">
                <span className='icon-facebook text-2xl'></span>
                <span className="sr-only">Facebook</span>
              </a>
            </li>
            <li>
              <a href='/' title="Instagram" target="_blank" className="transition-colors hover:text-blue">
                <span className='icon-instagram text-2xl'></span>
                <span className="sr-only">Instagram</span>
              </a>
            </li>
            <li>
              <a href='/' title="Youtube" target="_blank" className="transition-colors hover:text-blue">
                <span className='icon-youtube text-2xl'></span>
                <span className="sr-only">Youtube</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
