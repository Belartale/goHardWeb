// Core
import React, { FC } from 'react';
import { Box } from '@mui/material';

// Containers
import { ContainerCenter,
    Footer,
    GreenText,
    Header,
    MyContainer,
    Section,
} from '../../containers';

// Components
import { BigCard, ErrorBoundary } from '../../components';

// Elements
import {
    ArrowsBottom,
    Subtitle,
    Title,
} from '../../elements';

// images
import aboutUsBg from '../../../assets/images/aboutUsBg.gif';

// Styles
import { ColumnSpaceBetweenAndSpace } from './styles';

const About: FC = () => {
    return (
        <Box>
            <Header
                backgroundsize = 'cover'
                image = { aboutUsBg }
                opacity = 'true' >
                <MyContainer  sx = {{ height: '100%' }}>
                    <ContainerCenter>
                        <Title>
                            <GreenText>
                                About
                            </GreenText> us
                        </Title>
                    </ContainerCenter>
                    <ArrowsBottom />
                </MyContainer>
            </Header>
            <Section sx = {{ position: 'relative' }}>
                <MyContainer>
                    <Subtitle textAlign = { 'center' }>
                        Working about 2 years on the market, we consider us as a fast-growing and
                        developing software development agency. We spent a lot of time building a
                        team of experienced developers/designers, in order to discover new
                        horizons in the quality of customers services.
                    </Subtitle>
                </MyContainer>
            </Section>
            <Section>
                <MyContainer>
                    <ColumnSpaceBetweenAndSpace>
                        <BigCard
                            firstTitle = { 7 }
                            secondTitle = { <GreenText>Most relevant programming languages</GreenText> }
                            variantCard = 'grey'>
                            We are always aware of the most innovative and relevant technologies, in order to make
                            our projects comfortable and convenient to update and develop in future. We focus on
                            JavaScript, Python, PHP(Modern), Golang, React Native, Kotlin, Swift
                        </BigCard>
                        <BigCard
                            firstTitle = { 4 }
                            secondTitle = { <GreenText>Fields of business we work with</GreenText> }
                            variantCard = 'grey'>
                            Most of our previous projects are related to medical, delivery, educational
                            and construction industries.
                        </BigCard>
                        <BigCard
                            firstTitle = { 2 }
                            secondTitle = { <GreenText>Years of software development at the market</GreenText> }
                            variantCard = 'grey'>
                            Working about 2 years on the market, we consider us as a fast-growing and developing
                            software development agency. We spent a lot of time building a team of experienced
                            developers/designers, in order to discover new horizons in the quality of
                            customers services.
                        </BigCard>
                        <BigCard
                            firstTitle = { 1 }
                            secondTitle = { <GreenText>Strong team of professionals</GreenText> }
                            variantCard = 'grey'>
                            Despite the fact that a part of our developers work in office and others work on remote
                            positions, we are one team of united professionals who works as one tool.
                        </BigCard>
                    </ColumnSpaceBetweenAndSpace>
                </MyContainer>
            </Section>
            <Footer />
        </Box>
    );
};

export default () => (
    <ErrorBoundary>
        <About />
    </ErrorBoundary>
);
