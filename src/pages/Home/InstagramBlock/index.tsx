import Slider, { ResponsiveObject } from "react-slick";

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
    centerPadding: "70px",
    slidesToShow: 2,
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
        <h2 className='font-bold text-2xl font-svn leading-[36px] mb-1'>
          BeeYou trên Instagram
        </h2>
        <p>
          Follow BeeYou trên instagram để có cơ hội tham gia các chương trình ưu đãi dành riêng cho người dùng Instagram
        </p>
        <a href='/' className='text-blue inline-flex items-center gap-2' title="instagr.am/beeyoufashion">
          <span className='icon-instagram font-bold'></span>
          <span className='underline font-bold'>instagr.am/beeyoufashion</span>
        </a>
      </div>
      <Slider {...settings}>
        {images.map((item, idx) => <div key={idx} className='px-[15px]'>
          <div className="bg-white p-1 rounded-lg lg:rounded-2xl lg:p-2">
            <img className="w-full" src={item} alt="BeeYou trên Instagram"/>
          </div>
        </div>)}
      </Slider>
    </section>
  )
}
