import React from 'react';
import { StyledHero } from '../../Styles/Body/Hero.styled';
import ContainerSizes from '../../Hooks/ContainerSizes';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import Products from './Products';

import dataItems from '../../dataItems';
import { useCart } from '../../context/CartContext';

const Hero = () => {
  const {cartAberto} = useCart();
  const [slideState, setSlideState] = React.useState(3);
  const {small, xsmall, large, medium, xlarge} = ContainerSizes();

  React.useEffect(() => {
    if(xsmall) {
      setSlideState(1)
    }
    else if(small) {
      setSlideState(2)
    }
    else if(large) {
      setSlideState(3)
    } else {
      setSlideState(4)
    }
  })

  return (
    <StyledHero className='container' $cartAberto={cartAberto} $small={small}>
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={40}
        slidesPerView={slideState}
        pagination={{ clickable: true, type: 'bullets' }}
        grabCursor={true}
        
        className='products-wrapper'
      >
        {dataItems().dataFiltered?.products.map((item) => {
          return (
            <SwiperSlide className='products-items' key={item.id}>
              <Products {...item} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </StyledHero>
  );
};

export default Hero;
