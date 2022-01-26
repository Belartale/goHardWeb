// Core
import React, { FC } from 'react';
import { Box, CardContent, CardMedia } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Styles
import { MyCard, TextSliderPortfolioPage, TitleSliderPortfolioPage, Wrapper } from './styles';
import 'swiper/css';
import 'swiper/css/navigation';

// Elements
import { Link } from '../../elements';

// Images
import imagesFirstSlider from '../../../assets/images/firstSlider.png';
import imagesFirstSliderNext from '../../../assets/images/firstSliderNext.png';

// Types
type Image = {
    src: string
    alt: string
    title: string
    text: string
    link: string
}

const images: Array<Image> = [
    {
        src:   'https://media.istockphoto.com/photos/colorful-background-of-pastel-powder-explosionrainbow-color-dust-on-picture-id1180542165?k=20&m=1180542165&s=612x612&w=0&h=43hlhk8qdGYP4V-u3AAxD3kPDRIzHjMNWpr-VdBQ2Js=',
        alt:   'img',
        title: 'Medical equipment website',
        text:  'The task was to create working website for current company with all of their equipment and warehouses. The client was fully satisfied.',
        link:  '/',
    },
    {
        src:   imagesFirstSlider,
        alt:   'img',
        title: 'Medical equipment website',
        text:  'The task was to create working website for current company with all of their equipment and warehouses. The client was fully satisfied.',
        link:  '/',
    },
    {
        src:   'https://img.bfmtv.com/c/630/420/871/7b9f41477da5f240b24bd67216dd7.jpg',
        alt:   'img',
        title: 'Medical equipment website',
        text:  'The task was to create working website for current company with all of their equipment and warehouses. The client was fully satisfied.',
        link:  '/',
    },
    {
        src:   imagesFirstSliderNext,
        alt:   'img',
        title: 'Medical equipment website',
        text:  'The task was to create working website for current company with all of their equipment and warehouses. The client was fully satisfied.',
        link:  '/',
    },
    {
        src:   'https://www.researchgate.net/profile/Georg-Waltner-2/publication/329620436/figure/fig1/AS:759099822206979@1557994909846/Image-sequence-and-views-of-the-reconstructed-point-cloud-a-j-images-from-the.ppm',
        alt:   'img',
        title: 'Medical equipment website',
        text:  'The task was to create working website for current company with all of their equipment and warehouses. The client was fully satisfied.',
        link:  '/',
    },
    {
        src:   imagesFirstSlider,
        alt:   'img',
        title: 'Medical equipment website',
        text:  'The task was to create working website for current company with all of their equipment and warehouses. The client was fully satisfied.',
        link:  '/',
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
                        spaceBetween:  0,
                    },
                    900: {
                        slidesPerView: 3,
                        initialSlide:  images.length - 1,
                    },
                }}
                loopedSlides = { images.length }
                modules = { [ Navigation ] }>

                <Box>
                    {images.map((element, index) => (
                        <SwiperSlide
                            key = { index }
                            style = {{ display: 'flex', justifyContent: 'center' }}>
                            <Link to = { element.link }>
                                <Box>
                                    <MyCard>
                                        <CardMedia
                                            alt = { element.alt }
                                            component = 'img'
                                            image = { element.src }
                                        />
                                        <CardContent>
                                            <TitleSliderPortfolioPage variant = 'h3'>
                                                {element.title}
                                            </TitleSliderPortfolioPage>
                                            <TextSliderPortfolioPage variant = 'caption'>
                                                {element.text}
                                            </TextSliderPortfolioPage>
                                        </CardContent>
                                    </MyCard>
                                </Box>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Box>
            </Swiper>
        </Wrapper>
    );
};
