// Core
import React, { FC } from 'react';
import {
    Box,
    Card,
    CardActionArea,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Styles
import {
    TextSlide,
    TitleSlide,
    Wrapper,
} from './styles';

// Types
type ImageTypes = {
    src: string
    title: string
    text: string
    alt: string
}

export type ImagesSliderTechnologiesPageTypes = Array<ImageTypes>;
type PropTypes = {
    images: ImagesSliderTechnologiesPageTypes
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
                        autoHeight:    true,
                    },
                    900: {
                        slidesPerView: 3,
                        initialSlide:  images.length - 1,
                        autoHeight:    true,
                    },
                }}
                loopedSlides = { images.length }
                modules = { [ Navigation ] }>
                <Box>
                    {images.map((element) => (
                        <SwiperSlide
                            key = { element.alt }>
                            <Card>
                                <CardActionArea>
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
                                    <TextSlide>
                                        {element.text}
                                    </TextSlide>
                                </CardActionArea>
                            </Card>
                        </SwiperSlide>
                    ))}
                </Box>
            </Swiper>
        </Wrapper>
    );
};
