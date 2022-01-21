// Core
import React, { FC } from 'react';
import { Box } from '@mui/material';

// Containers
import {
    ContainerCenter,
    GreenText,
    Header,
    MyContainer,
    Section,
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

// import technologiesBg from '../../../assets/images';
// import technologiesBg from '../../../assets/images';
// import technologiesBg from '../../../assets/images';
// import technologiesBg from '../../../assets/images';
// import technologiesBg from '../../../assets/images';
// import technologiesBg from '../../../assets/images';
// import technologiesBg from '../../../assets/images';
// import technologiesBg from '../../../assets/images';

const arrImages = [
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

// Styles
import { TitleTechnologies } from './styles';

const Technologies: FC = () => {
    return (
        <Box>
            <Header
                opacity
                backgroundsize = 'cover'
                image = { technologiesBg }>
                <MyContainer  sx = {{ height: '100%' }}>
                    <ContainerCenter>
                        <Title>
                            <GreenText>Technologies</GreenText>
                        </Title>
                    </ContainerCenter>
                </MyContainer>
            </Header>
            <MyContainer>
                <Section>
                    <TitleTechnologies variant = 'h3'>
                        <GreenText>Front-end</GreenText> development
                    </TitleTechnologies>
                    <Subtitle
                        textAlign = { 'center' }>
                        Front-end is the brightest showcase how your website can
                        look and felt by users. User friendly design and functionality
                        makes the difference in the way how users perceive the information.
                    </Subtitle>
                    <SliderTechnologiesPage images = { arrImages } />
                </Section>
                <Section>
                    <TitleTechnologies variant = 'h3'>
                        <GreenText>Back-end</GreenText> development
                    </TitleTechnologies>
                    <Subtitle
                        textAlign = { 'center' }>
                        Quality of back-end on your project is a direct characteristic of
                        the quality of the project. That is why the right choice of
                        technologies used, is so important.
                    </Subtitle>
                </Section>
                <Section>
                    <TitleTechnologies variant = 'h3'>
                        <GreenText>Mobile</GreenText> development
                    </TitleTechnologies>
                    <Subtitle
                        textAlign = { 'center' }>
                        Depending on the requirements, business idea and final expectations,
                        we can choose technologies and implement requests in the most reasonable way.
                    </Subtitle>
                </Section>
            </MyContainer>
        </Box>
    );
};

export default () => (
    <ErrorBoundary>
        <Technologies />
    </ErrorBoundary>
);
