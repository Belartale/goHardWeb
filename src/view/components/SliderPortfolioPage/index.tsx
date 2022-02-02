// Core
import React, { FC } from 'react';
import {
    Box,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Styles
import {
    CaptionsSliderPortfolioPage,
    CardBottomSliderPortfolioPage,
    CellSliderPortfolioPage,
    ImagesSliderPortfolioPage,
    ImgSliderPortfolioPage,
    TechnologiesSliderPortfolioPage,
    TextSliderPortfolioPage,
    TitleImagesSliderPortfolioPage,
    TitleSliderPortfolioPage,
    Wrapper,
} from './styles';

// Types
type ImageTypes = {
    src: string
    alt: string
    title: string
    text: string
    link: string
    technologies: Array<{ src: string, alt: string }>
}
export type ImagesTypesSliderPortfolioPageTypes = Array<ImageTypes>;
type TypeProps = {
    images: ImagesTypesSliderPortfolioPageTypes
}

export const SliderPortfolioPage: FC<TypeProps> = ({ images }) => {
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
                        spaceBetween:  100,
                    },
                    900: {
                        slidesPerView: 3,
                        initialSlide:  images.length - 1,
                        spaceBetween:  100,
                    },
                }}
                loopedSlides = { images.length }
                modules = { [ Navigation ] }>

                {images.map((element) => (
                    <SwiperSlide
                        key = { element.title }>
                        <Box>
                            <Card>
                                <CardActionArea href = { element.link }>
                                    <CardMedia
                                        alt = { element.alt }
                                        component = 'img'
                                        image = { element.src }
                                    />
                                    <CardContent>
                                        <CardBottomSliderPortfolioPage>
                                            <CaptionsSliderPortfolioPage>
                                                <TitleSliderPortfolioPage variant = 'h3'>
                                                    {element.title}
                                                </TitleSliderPortfolioPage>
                                                <TextSliderPortfolioPage variant = 'caption'>
                                                    {element.text}
                                                </TextSliderPortfolioPage>
                                            </CaptionsSliderPortfolioPage>
                                            <TechnologiesSliderPortfolioPage>
                                                <TitleImagesSliderPortfolioPage variant = 'h4'>
                                                    Technologies:
                                                </TitleImagesSliderPortfolioPage>
                                                <ImagesSliderPortfolioPage>
                                                    {element.technologies.map((img) => (
                                                        <CellSliderPortfolioPage
                                                            key = { img.alt }>
                                                            <ImgSliderPortfolioPage
                                                                alt = { `Image ${img.alt}` }
                                                                src = { img.src }
                                                            />
                                                        </CellSliderPortfolioPage>
                                                    ))}
                                                </ImagesSliderPortfolioPage>
                                            </TechnologiesSliderPortfolioPage>
                                        </CardBottomSliderPortfolioPage>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Wrapper>
    );
};
