// Core
import React, { FC } from 'react';
import { Box, Card, CardContent, CardMedia } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Styles
import { Wrapper } from './styles';
import 'swiper/css';
import 'swiper/css/navigation';

// Images
import imagesFirstSlider from '../../../assets/images/firstSlider.png';
import imagesFirstSliderNext from '../../../assets/images/firstSliderNext.png';


export const SliderPortfolioPage: FC = () => {
    const images = [
        { src: imagesFirstSlider, alt: 'img' },
        { src: imagesFirstSlider, alt: 'img' },
        { src: imagesFirstSlider, alt: 'img' },
        { src: imagesFirstSliderNext, alt: 'img' },
        { src: imagesFirstSliderNext, alt: 'img' },
        { src: imagesFirstSlider, alt: 'img' },
    ];

    return (
        <Wrapper>
            <Swiper
                autoHeight
                loop
                navigation
                roundLengths
                breakpoints = {{
                    10: {
                        slidesPerView: 1,
                        spaceBetween:  20,
                        initialSlide:  0,
                    },
                    600: {
                        spaceBetween:  0,
                        slidesPerView: 2.5,
                        initialSlide:  images.length - 1,
                    },
                    1000: {
                        spaceBetween:  -70,
                        slidesPerView: 3,
                    },
                }}
                loopedSlides = { images.length }
                modules = { [ Navigation ] }>

                <Box>
                    {images.map((element, index) => (
                        <SwiperSlide key = { index }>
                            <Card sx = {{ backgroundColor: 'transparent' }}>
                                <CardMedia
                                    alt = { element.alt }
                                    component = 'img'
                                    image = { element.src }
                                />
                                <CardContent>
                                    text
                                </CardContent>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Box>
            </Swiper>
        </Wrapper>
    );
};
