import { useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CardButton } from '../../components'
import { ROUTES } from '../../constans'

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false)

  return (
    <header className="header bg-white lg:bg-[#F4F4F4] fixed left-0 top-0 w-full z-50 h-[74px] flex items-center lg:h-[90px]">
      <div className='container flex justify-between items-center'>
        <Link className='inline-block w-[31px] md:w-[39px]' to='/' title="BeeYou">
          <img src="./logo.png" alt="BeeYou" />
        </Link>
        <div className={`
          overflow-hidden fixed left-0 top-0 bg-white lg:bg-[#F4F4F4] w-full z-50 transition-[height]
          ${isOpenMenu ? 'h-full' : 'h-0 lg:h-full'}
          lg:static lg:flex-1 lg:px-[70px]
        `}>
          <button
            className='font-bold absolute top-5 right-7 lg:hidden'
            onClick={() => setIsOpenMenu(false)}
          >X</button>
          <ul className='px-6 py-10 lg:p-0 lg:flex lg:gap-10'>
            <li className='mb-4 lg:mb-0'>
              <NavLink className='menu-link' to='/' title="Trang chủ">
                Trang chủ
              </NavLink>
            </li>
            <li className='mb-4 lg:mb-0'>
              <NavLink className='menu-link' to={`/${ROUTES.products}`} title="Tote collection" aria-current="page">
                Tote collection
              </NavLink>
            </li>
            <li className='mb-4 lg:mb-0'>
              <NavLink className='menu-link' to={`/${ROUTES.aboutUs}`} title="Về chúng tôi">
                Về chúng tôi
              </NavLink>
            </li>
            <li className='mb-4 lg:mb-0'>
              <NavLink className='menu-link' to={`/${ROUTES.contact}`} title="Liên hệ">
                Liên hệ
              </NavLink>
            </li>
          </ul>
        </div>
        <div>
          <CardButton />
          <button
            className='ml-[34px] lg:hidden'
            onClick={() => setIsOpenMenu(true)}
          >
            <span className="icon-menu text-2xl"></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

