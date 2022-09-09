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

                    <SliderTechnologiesPage images = { imagesFrontEnd } />
                </Wrapper>
                <Wrapper>
                    <TitleTechnologies variant = 'h3'>
                        <GreenText>Back-end</GreenText> development
                    </TitleTechnologies>

                    <SliderTechnologiesPage images = { imagesBackEnd } />
                </Wrapper>
                <Wrapper>
                    <TitleTechnologies variant = 'h3'>
                        <GreenText>Mobile</GreenText> development
                    </TitleTechnologies>

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
