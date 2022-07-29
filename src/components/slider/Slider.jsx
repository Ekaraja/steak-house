import { Swiper, SwiperSlide } from 'swiper/react';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css';
// eslint-disable-next-line import/no-unresolved
import 'swiper/css/pagination';
import './slider.scss';
import { Pagination, Autoplay } from 'swiper';

const pagination = {
  clickable: true,
};

export default function Slider() {
  return (
    <Swiper
      pagination={pagination}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      loop
      autoplay={{
        delay: 4500,
      }}
    >
      <SwiperSlide>
        <article className="slider__frame">
          <div className="slider__content">
            <h1>
              <span className="highlight-black">Rabat 10%</span>
              {' '}
              na pierwsze
              zamówienie!
            </h1>
            <p>
              Do 20 stycznia złóż zamówienie na stronie i skorzystaj z
              <span className="--bold"> promocji -10%</span>
              . Spiesz się, czas
              trwania promocji do końca lutego.
            </p>
            <a href="#"><button type="button" className="btn">Zamów online</button></a>
          </div>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article className="slider__frame">
          <div className="slider__content">
            <h1>
              <span className="highlight-black">Lorem, ipsum 30%</span>
              {' '}
              Sit
              amet consectetur!
            </h1>
            <p>
              Odio maxime odit nemo voluptates dolorem eveniet rerum
              laudantium magnam
              <span className="--bold"> saepe -15%</span>
            </p>
            <a href="#"><button type="button" className="btn">Zamów online</button></a>
          </div>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        {' '}
        <article className="slider__frame">
          <div className="slider__content">
            <h1>
              <span className="highlight-black">Eveniet</span>
              {' '}
              quod assumenda velit !
            </h1>
            <p>
              Praesentium quam recusandae fugit facere quia necessitatibus
              <span className="--bold"> 1 gratis !</span>
              {' '}
              Excepturi, nulla
              nihil.
            </p>
            <a href="#"><button type="button" className="btn">Zamów online</button></a>
          </div>
        </article>
      </SwiperSlide>
    </Swiper>
  );
}
