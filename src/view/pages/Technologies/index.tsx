// Core
import { Box } from '@mui/material';
import React, { FC } from 'react';

// Containers
import { ContainerCenter, GreenText, Header, MyContainer, Section } from '../../containers';

// Components
import { ErrorBoundary } from '../../components';

// Images
import technologiesBg from '../../../assets/images/technologiesBg.gif';
import { Subtitle, Title } from '../../elements';

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
                </Section>
                <Section>
                    <TitleTechnologies variant = 'h3'>
                        <GreenText>Back-end</GreenText> development
                    </TitleTechnologies>
                    <Subtitle textAlign = { 'center' }>
                        Quality of back-end on your project is a direct characteristic of
                        the quality of the project. That is why the right choice of
                        technologies used, is so important.
                    </Subtitle>
                </Section>
                <Section>
                    <TitleTechnologies variant = 'h3'>
                        <GreenText>Mobile</GreenText> development
                    </TitleTechnologies>
                    <Subtitle textAlign = { 'center' }>
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
