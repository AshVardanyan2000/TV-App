import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { TrendingItem } from '../../types';
import styles from './slider.module.scss';
import useWindowSize from '../../helpers/hooks/useWindowSize';

type SliderProps = {
  itemList: TrendingItem[];
  onClick: (value: TrendingItem) => void;
};

const Index: FC<SliderProps> = ({ itemList, onClick }: SliderProps) => {
  const { windowWidth } = useWindowSize();

  const slidesPerView = windowWidth < 900 ? 3 : windowWidth < 1200 ? 6 : 8;

  if (itemList.length === 0) {
    return <div>No items available</div>;
  }

  return (
    <Swiper spaceBetween={15} slidesPerView={slidesPerView} navigation={itemList.length > 8} modules={[Navigation]}>
      <div style={{ width: '100%' }}>
        {itemList.map((item: TrendingItem) => (
          <SwiperSlide key={item.Id}>
            <figure role="button" tabIndex={0} onClick={() => onClick(item)} className={styles.slider_item}>
              <img src={`/images/carousel/${item.CoverImage}`} alt="image" />
            </figure>
          </SwiperSlide>
        ))}
      </div>
    </Swiper>
  );
};

export default Index;
