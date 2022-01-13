// Core
import React, { FC } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MyWrapper } from './styles';

// Images
import imagesFirstSlider from '../../../assets/images/firstSlider.png';
import imagesFirstSliderNext from '../../../assets/images/firstSliderNext.png';

import SwiperCore, {
    Navigation,
    Pagination,
} from 'swiper';
import { Box } from '@mui/material';

SwiperCore.use([ Navigation ]);
SwiperCore.use([ Pagination ]);

export const Slider: FC = () => {
    const arrImages = [
        { src: imagesFirstSlider, alt: 'img' },
        { src: imagesFirstSliderNext, alt: 'img' },
        { src: imagesFirstSlider, alt: 'img' },
        { src: imagesFirstSliderNext, alt: 'img' },
        { src: imagesFirstSliderNext, alt: 'img' },
        { src: imagesFirstSlider, alt: 'img' },
    ];

    return (
        <MyWrapper>
            <Swiper
                centeredSlides
                loop
                navigation
                roundLengths
                breakpoints = {{
                    600: {
                        slidesPerView: 2,
                    },
                    900: {
                        slidesPerView: 3,
                    },
                }}
                pagination = {{
                    el:        '.swiper-pagination',
                    clickable: true,
                }}
                slidesPerView = { 1 }
                spaceBetween = { -70 }>

                <Box position = { 'relative' }>
                    {arrImages.map((element, index) => (
                        <SwiperSlide key = { index }>
                            <img
                                alt = { element.alt }
                                src = { element.src }
                            />
                        </SwiperSlide>
                    ))}
                </Box>
                <Box
                    className = 'swiper-pagination'
                    mt = { '20px' }>
                </Box>
            </Swiper>
        </MyWrapper>
    );
};
