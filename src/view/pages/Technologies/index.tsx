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
        text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, nisl, lectus nisl sed quis non. Eget porta elit sit tempor eu sit.',
        alt:   'Image Html',
    },
    {
        src:   css,
        title: 'Css',
        text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, nisl, lectus nisl sed quis non. Eget porta elit sit tempor eu sit.',
        alt:   'Image Css',
    },
    {
        src:   js,
        title: 'JavaScript',
        text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, nisl, lectus nisl sed quis non. Eget porta elit sit tempor eu sit.',
        alt:   'Image JavaScript',
    },
    {
        src:   bootstrap,
        title: 'Bootstrap',
        text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, nisl, lectus nisl sed quis non. Eget porta elit sit tempor eu sit.',
        alt:   'Image Bootstrap',
    },
    {
        src:   react,
        title: 'React',
        text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, nisl, lectus nisl sed quis non. Eget porta elit sit tempor eu sit.',
        alt:   'Image React',
    },
    {
        src:   vue,
        title: 'Vue',
        text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, nisl, lectus nisl sed quis non. Eget porta elit sit tempor eu sit.',
        alt:   'Image Vue',
    },
    {
        src:   material,
        title: 'MaterialUI',
        text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, nisl, lectus nisl sed quis non. Eget porta elit sit tempor eu sit.',
        alt:   'Image MaterialUI',
    },
    {
        src:   next,
        title: 'Next',
        text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, nisl, lectus nisl sed quis non. Eget porta elit sit tempor eu sit.',
        alt:   'Image Next',
    },
    {
        src:   nuxt,
        title: 'Nuxt',
        text:  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus, nisl, lectus nisl sed quis non. Eget porta elit sit tempor eu sit.',
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
                        mb = { '20px' }
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
                        mb = { '20px' }
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
                        mb = { '20px' }
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
