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
import {
    imagesFrontEnd,
    imagesBackEnd,
    imagesMobile,
} from './images';

// Styles
import { TitleTechnologies, Wrapper } from './styles';

const Technologies: FC = () => {
    return (
        <Box>
            <Header
                backgroundsize = 'cover'
                image = { technologiesBg }
                opacity = 'true'>
                <MyContainer sx = {{ height: '100%' }}>
                    <ContainerCenter>
                        <Title>
                            <GreenText>Technologies</GreenText>
                        </Title>
                    </ContainerCenter>
                </MyContainer>
            </Header>
            <MyContainer sx = {{
                display:       'flex',
                flexDirection: 'column',
                alignItems:    'center',
            }}>
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
                    <SliderTechnologiesPage images = { imagesFrontEnd } />
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
                    <SliderTechnologiesPage images = { imagesBackEnd } />
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
                    <SliderTechnologiesPage images = { imagesMobile } />
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
