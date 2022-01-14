// Core
import React, { FC, useState } from 'react';
import { Box, Grid } from '@mui/material';

// Tools
// import { useOnScreen } from '../../../tools/hooks';

// Container
import { ContainerCenter, Footer, GreenText, Header, MyContainer, Section, UnderlineText } from '../../containers';

// Components
import { ErrorBoundary, MyCardWithBlurBackground, SmallCard, Slider } from '../../components';

// Elements
import { ArrowsBottom, ImagesServices, MyButton, Subtitle, Title, TitleSecond } from '../../elements';

// Styles
import { TextStroke } from './styles';


// Images
import laptop from '../../../assets/images/laptop.png';
import laptopOnTable from '../../../assets/images/laptopOnTable.png';
import keyboard from '../../../assets/images/keyboard.png';
import laptopWithTechnologies from '../../../assets/images/laptopWithTechnologies.png';

const Main: FC = () => {
    const [ titleHover, setTitleHover ] = useState(false);


    return (
        <Box>
            <Header image = { laptop }>
                <MyContainer sx = {{ height: '100%' }}>
                    <ContainerCenter position = { 'relative' }>
                        <Title>
                            Software<br />
                            <TextStroke
                                className = { `${titleHover && 'devActive'}` }
                                onMouseLeave = { () => setTitleHover(false) }
                                onMouseOver = { () => setTitleHover(true) }>development
                            </TextStroke> services
                        </Title>
                        <Title sx = {{ opacity: '0.5', transform: 'scaleY(-100%) translate(0%, -100%)', position: 'absolute', filter: 'blur(3px)' }}>
                            Software<br />
                            <TextStroke
                                className = { `${titleHover && 'devActive'}` }>development
                            </TextStroke> services
                        </Title>
                    </ContainerCenter>
                    <ArrowsBottom />
                </MyContainer>
            </Header>
            <Section
                image = { laptopOnTable }
                sx = {{ position: 'relative', boxShadow: '0px -30px 20px 0px black' }}>
                <MyContainer>
                    <Grid
                        container
                        columnSpacing = { '20px' }
                        rowSpacing = { '40px' }>
                        <Grid
                            item
                            lg = { 5 }
                            sx = {{ textAlign: { xs: 'center', lg: 'left' }}}
                            xl = { 6 }
                            xs = { 12 }>
                            <TitleSecond>
                                <UnderlineText>About</UnderlineText> us
                            </TitleSecond>
                            <Subtitle
                                paragraph
                                sx = {{
                                    mt:         '50px',
                                    mb:         '60px',
                                    fontFamily: 'Nunito',
                                }}>We are a fast-growing software development
                                agency with a strong expertise in the most
                                relevant and innovative programming
                                languages, frameworks, libraries
                                and tools.
                            </Subtitle>
                            <MyButton
                                href = '/about-us'
                                typeButton = 'lg blur'>
                                More
                            </MyButton>
                        </Grid>
                        <Grid
                            container
                            item
                            justifyContent = 'space-between'
                            lg = { 7 }
                            xl = { 6 }
                            xs = { 12 }>
                            <Grid
                                container
                                item
                                spacing = { '5px' }
                                sx = {{ justifyContent: 'center' }}>
                                <Grid
                                    item>
                                    <MyCardWithBlurBackground
                                        text = 'most relevant and innovative programming languages'
                                        textSize = '10px'
                                        title = '5'
                                    />
                                </Grid>
                                <Grid
                                    item>
                                    <MyCardWithBlurBackground
                                        sx = {{ position: { xs: 'static', lg: 'relative' }, top: '30px' }}
                                        text = 'fields of business we implement solutions for'
                                        textSize = '10px'
                                        title = '4'
                                    />
                                </Grid>
                                <Grid
                                    item>
                                    <MyCardWithBlurBackground
                                        sx = {{ position: { xs: 'static', lg: 'relative' }, top: '60px' }}
                                        text = 'main directions of our services'
                                        title = '3'
                                    />
                                </Grid>
                                <Grid
                                    item>
                                    <MyCardWithBlurBackground
                                        sx = {{ position: { xs: 'static', lg: 'relative' }, top: '90px' }}
                                        text = 'united team of professionals'
                                        title = '1'
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </MyContainer>
            </Section>
            <Section>
                <MyContainer>
                    <Grid
                        container
                        alignItems = 'center'
                        direction = 'column'>
                        <Grid
                            item>
                            <TitleSecond>
                                Our <UnderlineText>services</UnderlineText>
                            </TitleSecond>
                        </Grid>
                        <Grid
                            container
                            item
                            rowSpacing = { '60px' }
                            sx = {{ justifyContent: 'space-between', mt: '70px', mb: '60px' }}>
                            <Grid
                                item
                                md = { 3 }
                                xs = { 6 }>
                                <SmallCard text = 'Web development'>
                                    <ImagesServices type = 'Web development'/>
                                </SmallCard>
                            </Grid>
                            <Grid
                                item
                                md = { 3 }
                                xs = { 6 }>
                                <SmallCard text = 'Mobile development'>
                                    <ImagesServices type = 'Mobile development'/>
                                </SmallCard>
                            </Grid>
                            <Grid
                                item
                                md = { 3 }
                                xs = { 6 }>
                                <SmallCard text = 'UI/Ux design'>
                                    <ImagesServices type = 'UI/UX design'/>
                                </SmallCard>
                            </Grid>
                            <Grid
                                item
                                md = { 3 }
                                xs = { 6 }>
                                <SmallCard text = 'Legacy Code Redevelopment'>
                                    <ImagesServices type = 'Legacy Code'/>
                                </SmallCard>
                            </Grid>
                            <Grid
                                item
                                md = { 3 }
                                xs = { 6 }>
                                <SmallCard text = 'Consulting/Estimation'>
                                    <ImagesServices type = 'Consulting/Estimation'/>
                                </SmallCard>
                            </Grid>
                            <Grid
                                item
                                md = { 3 }
                                xs = { 6 }>
                                <SmallCard text = 'Code Review'>
                                    <ImagesServices type = 'Code Review'/>
                                </SmallCard>
                            </Grid>
                            <Grid
                                item
                                md = { 3 }
                                xs = { 6 }>
                                <SmallCard text = 'Software Maintenance'>
                                    <ImagesServices type = 'Software Maintenance'/>
                                </SmallCard>
                            </Grid>
                            <Grid
                                item
                                md = { 3 }
                                xs = { 6 }>
                                <SmallCard text = 'Product develop and support'>
                                    <ImagesServices type = 'Product development'/>
                                </SmallCard>
                            </Grid>
                        </Grid>
                        <Grid
                            item
                            mb = { '60px' }>
                            <Subtitle
                                paragraph
                                textAlign = { 'center' }>Based on our previous expertise in the fields of Web/Mobile
                                development, experience with a Product solutions and Design, we are always
                                doing our best to provide you with the expected results.
                            </Subtitle>
                        </Grid>
                        <Grid item>
                            <MyButton
                                href = '/our-services'
                                typeButton = 'lg grey'>
                                More details
                            </MyButton>
                        </Grid>
                    </Grid>
                </MyContainer>
            </Section>
            <Section image = { keyboard }>
                <MyContainer>
                    <Grid
                        container
                        alignItems = { 'center' }
                        columnSpacing = '100px'
                        rowSpacing = { '30px' }>
                        <Grid
                            item
                            // justifyContent = { 'center' }
                            md = { 6 }
                            sx = {{ display: 'flex', justifyContent: 'center' }}
                            xs = { 12 }>
                            <img
                                alt = 'laptop with technologies'
                                src = { laptopWithTechnologies }
                                style = {{ display: 'block', maxWidth: '100%', height: 'auto' }}
                            />
                        </Grid>
                        <Grid
                            item
                            md = { 6 }
                            sx = {{ display: 'flex', flexDirection: 'column', alignItems: { xs: 'center', md: 'flex-end' }}}
                            xs = { 12 }>
                            <TitleSecond>
                                <UnderlineText>
                                    Technologies
                                </UnderlineText>
                            </TitleSecond>
                            <Subtitle
                                paragraph
                                sx = {{ textAlign: { xs: 'center', md: 'end' }, mt: '50px', mb: '50px' }}>
                                In our work connected with web development we focus on the most flexible,
                                innovative and relevant programming languages, frameworks and libraries.
                            </Subtitle>
                            <MyButton
                                href = '/technologies'
                                typeButton = 'lg clear'>
                                Watch list
                            </MyButton>
                        </Grid>
                    </Grid>
                </MyContainer>
            </Section>
            <Section>
                <MyContainer>
                    <Grid
                        container
                        alignItems = { 'center' }
                        direction = 'column'>
                        <Grid item >
                            <TitleSecond>
                                <UnderlineText>
                                    Portfolio
                                </UnderlineText>
                            </TitleSecond>
                        </Grid>
                        <Grid
                            item
                            sx = {{ mt: '50px', mb: '60px' }}>
                            <Subtitle
                                paragraph
                                textAlign = { 'center' }>
                                Here are some of our most relevant and challenging projects
                                that we worked with and implemented customers requirements
                                and ideas, in order to achieve their business objectives.
                            </Subtitle>
                        </Grid>
                        <Grid
                            item
                            sx = {{ mb: '60px' }}>
                            <MyButton
                                href = '/portfolio'
                                typeButton = 'lg clear'>
                                <GreenText>
                                    Our works
                                </GreenText>
                            </MyButton>
                        </Grid>
                        <Grid item>
                            <Slider/>
                        </Grid>
                    </Grid>
                </MyContainer>
            </Section>
            <Footer />
        </Box>
    );
};

export default () => (
    <ErrorBoundary>
        <Main />
    </ErrorBoundary>
);
