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
                opacity
                backgroundsize = 'cover'
                image = { aboutUsBg } >
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
                        team of experienced developers/designers, in order to discover new horizons
                        in the quality of customers services.
                    </Subtitle>
                </MyContainer>
            </Section>
            <Section>
                <MyContainer>
                    <ColumnSpaceBetweenAndSpace>
                        <BigCard
                            firstTitle = { 5 }
                            secondTitle = { <GreenText>Most relevant and innovative programming languages</GreenText> }
                            variantCard = 'grey'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui
                            eget sit vel dolor mauris. Aliquet mauris pellentesque euismod sagittis,
                            condimentum nec. Sit et quisque porttitor consectetur nisl. Sed etiam amet,
                            vel sed pretium, egestas turpis sed. Sociis quisque rhoncus lectus vitae vel,
                            mattis. Neque blandit arcu amet nulla in metus, urna orci varius. Nibh
                            pharetra risus quis massa Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Dui eget sit vel dolor mauris. Aliquet mauris pellentesque euismod
                            sagittis, condimentum nec. Sit et quisque porttitor consectetur nisl. Sed etiam
                            amet, vel sed pretium, egestas turpis sed. Sociis quisque rhoncus lectus vitae
                            vel, mattis. Neque blandit arcu amet nulla in metus, urna orci varius. Nibh
                            pharetra risus quis massa
                        </BigCard>
                        <BigCard
                            firstTitle = { 4 }
                            secondTitle = { <GreenText>Fields of business we implement solutions for</GreenText> }
                            variantCard = 'grey'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui
                            eget sit vel dolor mauris. Aliquet mauris pellentesque euismod sagittis,
                            condimentum nec. Sit et quisque porttitor consectetur nisl. Sed etiam amet,
                            vel sed pretium, egestas turpis sed. Sociis quisque rhoncus lectus vitae vel,
                            mattis. Neque blandit arcu amet nulla in metus, urna orci varius. Nibh
                            pharetra risus quis massa Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Dui eget sit vel dolor mauris. Aliquet mauris pellentesque euismod
                            sagittis, condimentum nec. Sit et quisque porttitor consectetur nisl. Sed etiam
                            amet, vel sed pretium, egestas turpis sed. Sociis quisque rhoncus lectus vitae
                            vel, mattis. Neque blandit arcu amet nulla in metus, urna orci varius. Nibh
                            pharetra risus quis massa
                        </BigCard>
                        <BigCard
                            firstTitle = { 3 }
                            secondTitle = { <GreenText>Main directions of our services</GreenText> }
                            variantCard = 'grey'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui
                            eget sit vel dolor mauris. Aliquet mauris pellentesque euismod sagittis,
                            condimentum nec. Sit et quisque porttitor consectetur nisl. Sed etiam amet,
                            vel sed pretium, egestas turpis sed. Sociis quisque rhoncus lectus vitae vel,
                            mattis. Neque blandit arcu amet nulla in metus, urna orci varius. Nibh
                            pharetra risus quis massa Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Dui eget sit vel dolor mauris. Aliquet mauris pellentesque euismod
                            sagittis, condimentum nec. Sit et quisque porttitor consectetur nisl. Sed etiam
                            amet, vel sed pretium, egestas turpis sed. Sociis quisque rhoncus lectus vitae
                            vel, mattis. Neque blandit arcu amet nulla in metus, urna orci varius. Nibh
                            pharetra risus quis massa
                        </BigCard>
                        <BigCard
                            firstTitle = { 1 }
                            secondTitle = { <GreenText>United team of professionals</GreenText> }
                            variantCard = 'grey'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dui
                            eget sit vel dolor mauris. Aliquet mauris pellentesque euismod sagittis,
                            condimentum nec. Sit et quisque porttitor consectetur nisl. Sed etiam amet,
                            vel sed pretium, egestas turpis sed. Sociis quisque rhoncus lectus vitae vel,
                            mattis. Neque blandit arcu amet nulla in metus, urna orci varius. Nibh
                            pharetra risus quis massa Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Dui eget sit vel dolor mauris. Aliquet mauris pellentesque euismod
                            sagittis, condimentum nec. Sit et quisque porttitor consectetur nisl. Sed etiam
                            amet, vel sed pretium, egestas turpis sed. Sociis quisque rhoncus lectus vitae
                            vel, mattis. Neque blandit arcu amet nulla in metus, urna orci varius. Nibh
                            pharetra risus quis massa
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
