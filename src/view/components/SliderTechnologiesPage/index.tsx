// Core
import React, { FC } from 'react';
import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Styles
import 'swiper/css';
import 'swiper/css/navigation';
import { TextSlide, TitleSlide, Wrapper } from './styles';

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
                autoHeight
                loop
                navigation
                roundLengths
                breakpoints = {{
                    10: {
                        slidesPerView: 1,
                    },
                    800: {
                        slidesPerView: 3,
                    },
                }}
                initialSlide = { images.length - 1 }
                loopedSlides = { images.length }
                modules = { [ Navigation ] }>
                <Box>
                    {images.map((element: Image) => (
                        <SwiperSlide
                            key = { element.alt }
                            style = {{ display: 'flex', justifyContent: 'center' }}>
                            <Box>
                                <Box
                                    sx = {{
                                        display:        'flex',
                                        justifyContent: 'center',
                                    }}>
                                    <img
                                        alt = { element.alt }
                                        src = { element.src }
                                    />
                                </Box>
                                <TitleSlide
                                    textAlign = { 'center' }
                                    variant = 'h3'>
                                    {element.title}
                                </TitleSlide>
                                <TextSlide
                                    textAlign = { 'center' }
                                    variant = 'caption'>
                                    {element.text}
                                </TextSlide>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Box>
            </Swiper>
        </Wrapper>
    );
};
