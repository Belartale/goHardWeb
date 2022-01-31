// Core
import React, { FC } from 'react';
import { Card, CardContent, CardMedia } from '@mui/material';
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

// Images
import imagesFirstSlider from '../../../assets/images/firstSlider.png';
import imagesFirstSliderNext from '../../../assets/images/firstSliderNext.png';

import html from '../../../assets/images/html.png';
import css from '../../../assets/images/css.png';
import js from '../../../assets/images/js.png';
import bootstrap from '../../../assets/images/bootstrap.png';
import react from '../../../assets/images/react.png';
import vue from '../../../assets/images/vue.png';
import mui from '../../../assets/images/material.png';
import next from '../../../assets/images/next.png';
import nuxt from '../../../assets/images/nuxt.png';

// Types
type Image = {
    src: string
    alt: string
    title: string
    text: string
    link: string
    technologies: Array<{ src: string, alt: string }>
}

const images: Array<Image> = [
    {
        src:          'https://media.istockphoto.com/photos/colorful-background-of-pastel-powder-explosionrainbow-color-dust-on-picture-id1180542165?k=20&m=1180542165&s=612x612&w=0&h=43hlhk8qdGYP4V-u3AAxD3kPDRIzHjMNWpr-VdBQ2Js=',
        alt:          'img 1',
        title:        'Medical equipment website1',
        text:         'Loerm Loerm Loerm Loerm Loerm Loerm Loerm Loerm Loerm Loerm Loerm Loerm Loerm Loerm Loerm Loerm Loerm Loerm Loerm Loerm Loerm Loerm The task was to create working website for current company with all of their equipment and warehouses. The client was fully satisfied.',
        link:         '/',
        technologies: [
            { src: html, alt: 'HTML' },
            { src: css, alt: 'CSS' },
            { src: js, alt: 'JavaScript' },
            { src: bootstrap, alt: 'Bootstrap' },
            { src: react, alt: 'React' },
            { src: vue, alt: 'Vue' },
            { src: mui, alt: 'Mui' },
            { src: next, alt: 'Next' },
            { src: nuxt, alt: 'Nuxt' },
        ],
    },
    {
        src:          imagesFirstSlider,
        alt:          'img 2',
        title:        'Medical equipment website2',
        text:         'The task was to create working website for current company with all of their equipment and warehouses. The client was fully satisfied.',
        link:         '/',
        technologies: [
            { src: html, alt: 'HTML' },
            { src: css, alt: 'CSS' },
            { src: js, alt: 'JavaScript' },
            { src: react, alt: 'React' },
            { src: mui, alt: 'Mui' },
            { src: next, alt: 'Next' },
            { src: nuxt, alt: 'Nuxt' },
        ],
    },
    {
        src:          imagesFirstSlider,
        alt:          'img3',
        title:        'Medical equipment website3',
        text:         'The task was to create working website for current company with all of their equipment and warehouses. The client was fully satisfied.',
        link:         '/',
        technologies: [
            { src: html, alt: 'HTML' },
            { src: css, alt: 'CSS' },
            { src: js, alt: 'JavaScript' },
            { src: react, alt: 'React' },
            { src: mui, alt: 'Mui' },
            { src: next, alt: 'Next' },
            { src: nuxt, alt: 'Nuxt' },
        ],
    },
    {
        src:          imagesFirstSliderNext,
        alt:          'img4',
        title:        'Medical equipment website4',
        text:         'The task was to create working website for current company with all of their equipment and warehouses. The client was fully satisfied.',
        link:         '/',
        technologies: [
            { src: html, alt: 'HTML' },
            { src: css, alt: 'CSS' },
            { src: js, alt: 'JavaScript' },
            { src: react, alt: 'React' },
            { src: mui, alt: 'Mui' },
            { src: next, alt: 'Next' },
            { src: nuxt, alt: 'Nuxt' },
        ],
    },
    {
        src:          imagesFirstSlider,
        alt:          'img5',
        title:        'Medical equipment website5',
        text:         'The task was to create working website for current company with all of their equipment and warehouses. The client was fully satisfied.',
        link:         '/',
        technologies: [
            { src: html, alt: 'HTML' },
            { src: css, alt: 'CSS' },
            { src: js, alt: 'JavaScript' },
            { src: react, alt: 'React' },
            { src: mui, alt: 'Mui' },
            { src: next, alt: 'Next' },
            { src: nuxt, alt: 'Nuxt' },
        ],
    },
    {
        src:          imagesFirstSlider,
        alt:          'img6',
        title:        'Medical equipment website6',
        text:         'The task was to create working website for current company with all of their equipment and warehouses. The client was fully satisfied.',
        link:         '/',
        technologies: [
            { src: html, alt: 'HTML' },
            { src: css, alt: 'CSS' },
            { src: js, alt: 'JavaScript' },
            { src: react, alt: 'React' },
            { src: mui, alt: 'Mui' },
            { src: next, alt: 'Next' },
            { src: nuxt, alt: 'Nuxt' },
        ],
    },
];

export const SliderPortfolioPage: FC = () => {
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
                        spaceBetween:  300,
                    },
                    1100: {
                        slidesPerView: 3,
                        spaceBetween:  350,
                    },
                    1300: {
                        slidesPerView: 3,
                        spaceBetween:  400,
                    },
                    1550: {
                        slidesPerView: 3,
                        spaceBetween:  500,
                    },
                }}
                loopedSlides = { images.length }
                modules = { [ Navigation ] }>

                {images.map((element) => (
                    <SwiperSlide
                        key = { element.title }>
                        <div>
                            <Card>
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
                            </Card>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Wrapper>
    );
};
