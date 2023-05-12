import Slider from "react-slick";

const settings = {
  infinite: true,
  speed: 500,
  centerMode: true,
  centerPadding: "0",
  vertical: true,
  slidesToShow: 3,
  slidesToScroll: 1
};

const reviews = [
  {
    image: './../images/facebook-1.png',
    link: 'https://www.facebook.com/nvtquynh2009/posts/662016350994071',
  },
  {
    image: './../images/facebook-1.png',
    link: 'https://www.facebook.com/nvtquynh2009/posts/662016350994071',
  },
  {
    image: './../images/facebook-1.png',
    link: 'https://www.facebook.com/nvtquynh2009/posts/662016350994071',
  },
  {
    image: './../images/facebook-1.png',
    link: 'https://www.facebook.com/nvtquynh2009/posts/662016350994071',
  },
  {
    image: './../images/facebook-1.png',
    link: 'https://www.facebook.com/nvtquynh2009/posts/662016350994071',
  },
  {
    image: './../images/facebook-1.png',
    link: 'https://www.facebook.com/nvtquynh2009/posts/662016350994071',
  }
]

export const FacebookBlock = () => {
  return (
    <section className='my-12 lg:flex'>
      <div className="mb-8 lg:w-[34%]">
        <img className="w-full" src="./../images/home-facebook-image.png" alt="Image"/>
      </div>
      <div className="lg:w-[60%]">
        <div className="lg:max-w-750 lg:pl-[150px]">
          <div className='container'>
            <h2 className='font-bold text-2xl font-svn leading-[36px] mb-1'>
              Đánh giá của các nàng
            </h2>
            <p>
              Mấy đánh giá này là lấy từ facebook qua nè, không có tự bịa ra đâu nha. Hông tin lên facebook mà xem.
            </p>
          </div>
          <Slider {...settings} className="facebook-slider mt-4">
            {reviews.map((item, idx) => <div key={idx} className="py-2 px-6">
              <a
                className="block rounded-lg overflow-hidden review-item"
                href={item.link}
                title="Facebook review"
                target="_blank"
              >
              <img src={item.image} alt="Facebook review"/>
              </a>
            </div>)}
          </Slider>
        </div>
      </div>
    </section>
  )
}
