// Core
import React, { FC } from 'react';
import {
    Box,
    Card,
    CardActionArea,
    CardMedia,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Navigation,
    Pagination,
} from 'swiper';

// Styles
import { Wrapper } from './styles';

// Types
type ImageTypes = {
    src: string
    alt: string
    link: string
}
export type ImagesSliderMainPageTypes = ImageTypes[];
type PropTypes = {
    images: ImagesSliderMainPageTypes
}

export const SliderMainPage: FC<PropTypes> = ({ images }) => {
    return (
        <Wrapper>
            <Swiper
                loop
                navigation
                roundLengths
                breakpoints = {{
                    10: {
                        slidesPerView: 1,
                        spaceBetween:  100,
                    },
                    900: {
                        slidesPerView: 3,
                        initialSlide:  images.length - 1,
                        spaceBetween:  100,
                        autoHeight:    true,
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
                            <Box>
                                <Card sx = {{ backgroundColor: 'transparent' }}>
                                    <CardActionArea href = { element.link }>
                                        <CardMedia
                                            alt = { element.alt }
                                            component = 'img'
                                            image = { element.src }
                                        />
                                    </CardActionArea>
                                </Card>
                            </Box>
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
