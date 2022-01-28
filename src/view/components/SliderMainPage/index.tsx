// Core
import React, { FC } from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';

// Styles
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
        { src: 'https://media.istockphoto.com/photos/colorful-background-of-pastel-powder-explosionrainbow-color-dust-on-picture-id1180542165?k=20&m=1180542165&s=612x612&w=0&h=43hlhk8qdGYP4V-u3AAxD3kPDRIzHjMNWpr-VdBQ2Js=', alt: 'img' },
        { src: imagesFirstSliderNext, alt: 'img' },
        { src: 'https://img.bfmtv.com/c/630/420/871/7b9f41477da5f240b24bd67216dd7.jpg', alt: 'img' },
        { src: imagesFirstSliderNext, alt: 'img' },
        { src: 'https://www.researchgate.net/profile/Georg-Waltner-2/publication/329620436/figure/fig1/AS:759099822206979@1557994909846/Image-sequence-and-views-of-the-reconstructed-point-cloud-a-j-images-from-the.ppm', alt: 'img' },
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
                    },
                    900: {
                        slidesPerView: 3,
                    },
                }}
                loopedSlides = { images.length }
                modules = { [ Navigation, Pagination ] }
                pagination = {{
                    el:        '.swiper-pagination',
                    clickable: true,
                }}>

                <Box>
                    {images.map((element, index) => (
                        <SwiperSlide
                            key = { index }>
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
