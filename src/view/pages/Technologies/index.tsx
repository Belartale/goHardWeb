// Core
import React, { FC } from 'react';
import { Box } from '@mui/material';

// Containers
import {
    ContainerCenter,
    Footer,
    GreenText,
    Header,
    MyContainer,
} from '../../containers';

// Components
import { ErrorBoundary, SliderTechnologiesPage } from '../../components';

// Elements
import { Subtitle, Title } from '../../elements';

// Images
import technologiesBg from '../../../assets/images/technologiesBg.gif';

import html from '../../../assets/images/html.png';
import css from '../../../assets/images/css.png';
import js from '../../../assets/images/js.png';
import bootstrap from '../../../assets/images/bootstrap.png';
import react from '../../../assets/images/react.png';
import vue from '../../../assets/images/vue.png';
import material from '../../../assets/images/material.png';
import next from '../../../assets/images/next.png';
import nuxt from '../../../assets/images/nuxt.png';

import express from '../../../assets/images/express.png';
import php from '../../../assets/images/php.png';
import laravel from '../../../assets/images/laravel.png';
import syphony from '../../../assets/images/syphony.png';
import python from '../../../assets/images/python.png';
import flack from '../../../assets/images/flack.png';
import mongodb from '../../../assets/images/mongodb.png';

import java from '../../../assets/images/java.png';
import kotlin from '../../../assets/images/kotlin.png';
import flutter from '../../../assets/images/crossFlutter.png';


const arrImagesFrontEnd = [
    {
        src:   html,
        title: 'Html',
        text:  'HTML is the standard markup language for Web pages.',
        alt:   'Image Html',
    },
    {
        src:   css,
        title: 'Css',
        text:  'CSS describes how HTML elements are to be displayed. Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem   Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem  Lorem ',
        alt:   'Image Css',
    },
    {
        src:   js,
        title: 'JavaScript',
        text:  'JavaScript is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions.',
        alt:   'Image JavaScript',
    },
    {
        src:   bootstrap,
        title: 'Bootstrap',
        text:  'Quickly design and customize responsive mobile-first sites with Bootstrap.',
        alt:   'Image Bootstrap',
    },
    {
        src:   react,
        title: 'React',
        text:  'React makes it painless to create interactive UIs.',
        alt:   'Image React',
    },
    {
        src:   vue,
        title: 'Vue',
        text:  'Vue is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.',
        alt:   'Image Vue',
    },
    {
        src:   material,
        title: 'MaterialUI',
        text:  'React component for faster and easier web development.',
        alt:   'Image MaterialUI',
    },
    {
        src:   next,
        title: 'Next',
        text:  'Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering.',
        alt:   'Image Next',
    },
    {
        src:   nuxt,
        title: 'Nuxt',
        text:  'An open source framework making web development simple and powerful.',
        alt:   'Image Nuxt',
    },
];

const arrImagesBackEnd = [
    {
        src:   js,
        title: 'JavaScript',
        text:  'Loremmmmm',
        alt:   'Image JavaScript',
    },
    {
        src:   express,
        title: 'Express',
        text:  'Loremmmmm',
        alt:   'Image Express',
    },
    {
        src:   php,
        title: 'Php',
        text:  'Loremmmmm',
        alt:   'Image Php',
    },
    {
        src:   laravel,
        title: 'Laravel',
        text:  'Loremmmmm',
        alt:   'Image Laravel',
    },
    {
        src:   syphony,
        title: 'Syphony',
        text:  'Loremmmmm',
        alt:   'Image Syphony',
    },
    {
        src:   python,
        title: 'Python',
        text:  'Loremmmmm',
        alt:   'Image Python',
    },
    {
        src:   flack,
        title: 'Flack',
        text:  'Loremmmmm',
        alt:   'Image Flack',
    },
    {
        src:   mongodb,
        title: 'MongoDB',
        text:  'Loremmmmm',
        alt:   'Image MongoDB',
    },
];

const arrImagesMobile = [
    {
        src:   react,
        title: 'React Native',
        text:  'Loremmmmm',
        alt:   'Image React Native',
    },
    {
        src:   java,
        title: 'Java',
        text:  'Loremmmmm',
        alt:   'Image Java',
    },
    {
        src:   kotlin,
        title: 'Kotlin',
        text:  'Loremmmmm',
        alt:   'Image Kotlin',
    },
    {
        src:   flutter,
        title: 'Flutter',
        text:  'Loremmmmm',
        alt:   'Image Flutter',
    },
];


// Styles
import { TitleTechnologies, Wrapper } from './styles';

const Technologies: FC = () => {
    return (
        <Box>
            <Header
                backgroundsize = 'cover'
                image = { technologiesBg }
                opacity = 'true'>
                <MyContainer  sx = {{ height: '100%' }}>
                    <ContainerCenter>
                        <Title>
                            <GreenText>Technologies</GreenText>
                        </Title>
                    </ContainerCenter>
                </MyContainer>
            </Header>
            <MyContainer>
                <Wrapper>
                    <TitleTechnologies variant = 'h3'>
                        <GreenText>Front-end</GreenText> development
                    </TitleTechnologies>
                    <Subtitle
                        textAlign = { 'center' }>
                        Front-end is the brightest showcase how your website can
                        look and felt by users. User friendly design and functionality
                        makes the difference in the way how users perceive the information.
                    </Subtitle>
                    <SliderTechnologiesPage images = { arrImagesFrontEnd } />
                </Wrapper>
                <Wrapper>
                    <TitleTechnologies variant = 'h3'>
                        <GreenText>Back-end</GreenText> development
                    </TitleTechnologies>
                    <Subtitle
                        textAlign = { 'center' }>
                        Quality of back-end on your project is a direct characteristic of
                        the quality of the project. That is why the right choice of
                        technologies used, is so important.
                    </Subtitle>
                    <SliderTechnologiesPage images = { arrImagesBackEnd } />
                </Wrapper>
                <Wrapper>
                    <TitleTechnologies variant = 'h3'>
                        <GreenText>Mobile</GreenText> development
                    </TitleTechnologies>
                    <Subtitle
                        textAlign = { 'center' }>
                        Depending on the requirements, business idea and final expectations,
                        we can choose technologies and implement requests in the most reasonable way.
                    </Subtitle>
                    <SliderTechnologiesPage images = { arrImagesMobile } />
                </Wrapper>
            </MyContainer>
            <Footer/>
        </Box>
    );
};

export default () => (
    <ErrorBoundary>
        <Technologies />
    </ErrorBoundary>
);
