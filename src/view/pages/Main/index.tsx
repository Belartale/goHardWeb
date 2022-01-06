// Core
import React, { FC } from 'react';
import { Box, Grid } from '@mui/material';

// Tools
// import { useOnScreen } from '../../../tools/hooks';

// Container
import { Footer, MyContainer, Section } from '../../containers';

// Components
import { ErrorBoundary } from '../../components';

// Elements
import { ArrowsBottom, MyButton, Title, TitleSecond } from '../../elements';

// Styles
import { Header } from './styles';

// Images
import laptopOnTable from '../../../assets/images/laptopOnTable.png';

const Main: FC = () => {
    // const divRef = useRef(null);
    // const visible = useOnScreen(divRef, '0px');

    // console.log(process.env.APP_NAME);

    // return (
    //     <Container>
    //         <div ref = { divRef }>
    //             {visible ? 'visible' : 'hide'}
    //         </div>
    //     </Container>
    // );
    return (
        <Box>
            <Header>
                <MyContainer  sx = {{ position: 'relative', display: 'flex', justifyContent: 'center', alignContent: 'center', height: '100%' }}>
                    <Title>
                        Software
                        <br />
                        development
                        services
                    </Title>
                    <ArrowsBottom />
                </MyContainer>
            </Header>
            <Section image = { laptopOnTable }>
                <MyContainer>
                    <Grid container>
                        <Grid
                            item
                            xs = { 5 }>
                            <TitleSecond>
                                About us
                            </TitleSecond>
                            <p>We are a fast-growing software development
                                agency with a strong expertise in the most
                                relevant and innovative programming
                                languages, frameworks, libraries
                                and tools.
                            </p>
                            <MyButton>
                                More
                            </MyButton>
                        </Grid>
                        <Grid item>5 cards</Grid>
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
