// Core
import React, { FC } from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

// Styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Wrapper } from './styles';

// Images
import imagesFirstSlider from '../../../assets/images/firstSlider.png';
import imagesFirstSliderNext from '../../../assets/images/firstSliderNext.png';

import {
    Navigation,
    Pagination,
} from 'swiper';

export const SliderMainPage: FC = () => {
    const images = [
        { src: imagesFirstSlider, alt: 'img' },
        { src: imagesFirstSliderNext, alt: 'img' },
        { src: imagesFirstSlider, alt: 'img' },
        { src: imagesFirstSliderNext, alt: 'img' },
        { src: imagesFirstSliderNext, alt: 'img' },
        { src: imagesFirstSlider, alt: 'img' },
    ];

    return (
        <Wrapper>
            <Swiper
                centeredSlides
                loop
                navigation
                roundLengths
                breakpoints = {{
                    600: {
                        slidesPerView: 2.77,
                    },
                    900: {
                        slidesPerView: 2.77,
                        spaceBetween:  -70,
                    },
                }}
                loopedSlides = { images.length }
                modules = { [ Navigation, Pagination ] }
                pagination = {{
                    el:        '.swiper-pagination',
                    clickable: true,
                }}
                slidesPerView = { 1 }
                spaceBetween = { -40 }>

                <Box position = { 'relative' }>
                    {images.map((element, index) => (
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
        </Wrapper>
    );
};
