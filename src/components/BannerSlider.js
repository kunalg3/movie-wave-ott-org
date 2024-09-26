import React from 'react';
import Slider from 'react-slick';
import { Box, Typography } from '@mui/material';
import banners from '../data/banner';

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // 3 seconds for each banner
  };

  return (
    <Slider {...settings}>
      {banners.map((banner) => (
        <Box
          key={banner.id}
          sx={{
            position: 'relative',
            height: '500px',
            backgroundImage: `url(${banner.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              bgcolor: 'rgba(0, 0, 0, 0.5)',
              color: 'white',
              p: 2,
            }}
          >
            <Typography variant="h4">{banner.title}</Typography>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default BannerSlider;
