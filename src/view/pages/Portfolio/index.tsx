// Core
import { Box } from '@mui/material';
import React, { FC } from 'react';

// Components
import {
    ContactBar,
    ErrorBoundary,
    SliderPortfolioPage,
} from '../../components';
import {
    ContainerCenter,
    GreenText,
    Header,
    MyContainer,
    Section,
} from '../../containers';
import { Subtitle, Title } from '../../elements';

// Images
import tableWithDevices from '../../../assets/images/tableWithDevices.jpg';
import { images } from './images';

// Styles
import { TitlePortfolio } from './styles';

const Portfolio: FC = () => {
    return (
        <Box>
            <Header
                backgroundsize = 'cover'
                image = { tableWithDevices }>
                <MyContainer sx = {{ height: '100%' }}>
                    <ContainerCenter>
                        <Title>
                            <GreenText>Portfolio</GreenText>
                        </Title>
                    </ContainerCenter>
                </MyContainer>
            </Header>
            <Section>
                <MyContainer sx = {{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <TitlePortfolio>
                        Our works
                    </TitlePortfolio>
                    <Subtitle
                        maxWidth = { '920px' }
                        textAlign = { 'center' }>
                        Here are some of our most relevant and challenging
                        projects that we worked with and implemented customers
                        requirements and ideas, in order to achieve their business objectives.
                    </Subtitle>
                </MyContainer>
            </Section>
            <MyContainer sx = {{ marginTop: { xs: '0px', md: '60px' }, marginBottom: { xs: '0px', md: '100px' }}}>
                <SliderPortfolioPage images = { images }/>
            </MyContainer>
            <MyContainer sx = {{ paddingTop: '20px', paddingBottom: '20px'  }}>
                <ContactBar size = 'lg' />
            </MyContainer>
        </Box>
    );
};

export default () => (
    <ErrorBoundary>
        <Portfolio />
    </ErrorBoundary>
);
