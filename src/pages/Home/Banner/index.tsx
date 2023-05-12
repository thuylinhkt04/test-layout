import Slider from "react-slick";

const settings = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

export const BannerHome = () => {
  return (
    <div className="banner-home mb-10">
      <Slider {...settings} className="banner-slider">
        <div className='banner-image-wrapper'>
          <img className='banner-image' src="./images/banner.jpg" alt="Banner"/>
        </div>
        <div className='banner-image-wrapper'>
          <img className='banner-image' src="./images/banner.jpg" alt="Banner"/>
        </div>
        <div className='banner-image-wrapper'>
          <img className='banner-image' src="./images/banner.jpg" alt="Banner"/>
        </div>
        <div className='banner-image-wrapper'>
          <img className='banner-image' src="./images/banner.jpg" alt="Banner"/>
        </div>
        <div className='banner-image-wrapper'>
          <img className='banner-image' src="./images/banner.jpg" alt="Banner"/>
        </div>
      </Slider>
    </div>
  )
}
