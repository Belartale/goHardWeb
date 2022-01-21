// Core
import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

// Styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Wrapper } from './styles';

import { Navigation } from 'swiper';

// Types
type Image = {
    src: string
    title: string
    text: string
    alt: string
}

type PropTypes = {
    images: Array<Image>
}

export const SliderTechnologiesPage: FC<PropTypes> = ({ images }) => {
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
                        // spaceBetween:  -70,
                    },
                }}
                loopedSlides = { images.length }
                modules = { [ Navigation ] }
                slidesPerView = { 1 }
                spaceBetween = { -40 }>

                <Box position = { 'relative' }>
                    {images.map((element: Image, index: number) => (
                        <SwiperSlide key = { index }>
                            <Box maxWidth = { '320px' }>
                                <img
                                    alt = { element.alt }
                                    src = { element.src }
                                />
                                <Typography
                                    textAlign = { 'center' }
                                    variant = 'h3'>
                                    {element.title}
                                </Typography>
                                <Typography
                                    textAlign = { 'center' }
                                    variant = 'caption'>
                                    {element.text}
                                </Typography>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Box>
            </Swiper>
        </Wrapper>
    );
};
