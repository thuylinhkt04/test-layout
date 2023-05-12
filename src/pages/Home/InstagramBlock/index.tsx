import Slider, { ResponsiveObject } from "react-slick";
import { HeadingBlock } from '../../../components'

const settingDesktop: ResponsiveObject = {
  breakpoint: 9999,
  settings: {
    centerPadding: "70px",
    slidesToShow: 4,
  },
}

const settingMobile: ResponsiveObject = {
  breakpoint: 1024,
  settings: {
    centerPadding: "95px",
    slidesToShow: 1,
  },
}

const settings = {
  arrows: false,
  infinite: true,
  speed: 500,
  centerMode: true,
  slidesToScroll: 1,
  responsive: [
    settingDesktop,
    settingMobile,
  ],
};

const images = [
  './../images/instagram-1.jpg',
  './../images/instagram-1.jpg',
  './../images/instagram-1.jpg',
  './../images/instagram-1.jpg',
  './../images/instagram-1.jpg',
  './../images/instagram-1.jpg',
  './../images/instagram-1.jpg',
  './../images/instagram-1.jpg',
]

export const InstagramBlock = () => {
  return (
    <section className='text-center my-12'>
      <div className='container mb-8 lg:mb-10'>
        <HeadingBlock
          title='BeeYou trên Instagram'
          description='Follow BeeYou trên instagram để có cơ hội tham gia các chương trình ưu đãi dành riêng cho người dùng Instagram'
        />
        <a href='/' className='text-blue inline-flex items-center gap-2' title="instagr.am/beeyoufashion">
          <span className='icon-instagram font-bold'></span>
          <span className='underline font-bold'>instagr.am/beeyoufashion</span>
        </a>
      </div>
      <Slider {...settings}>
        {images.map((item, idx) => <div key={idx} className='px-[6px] lg:px-[15px]'>
          <div className="bg-white p-1 rounded-lg lg:rounded-2xl lg:p-2">
            <img className="w-full rounded-lg lg:rounded-2xl" src={item} alt="BeeYou trên Instagram"/>
          </div>
        </div>)}
      </Slider>
    </section>
  )
}
