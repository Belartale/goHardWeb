// Core
import { Box } from '@mui/material';
import React, { FC } from 'react';

// Components
import { ErrorBoundary, SliderPortfolioPage } from '../../components';
import { ContainerCenter, Footer, GreenText, Header, MyContainer, Section } from '../../containers';
import { Subtitle, Title } from '../../elements';

// Images
import tableWithDevices from '../../../assets/images/tableWithDevices.jpg';

// Styles
import { TitlePortfolio } from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Portfolio: FC<PropTypes> = () => {
    return (
        <Box>
            <Header
                backgroundsize = 'cover'
                image = { tableWithDevices }>
                <MyContainer sx = {{ height: '100%' }}>
                    <ContainerCenter>
                        <Title>
                            <GreenText>Technologies</GreenText>
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
                <SliderPortfolioPage />
            </MyContainer>
            <Footer />
        </Box>
    );
};

export default () => (
    <ErrorBoundary>
        <Portfolio />
    </ErrorBoundary>
);
