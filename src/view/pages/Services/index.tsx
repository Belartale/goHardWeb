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
    Subtitle,
    Title,
    ImagesServices,
} from '../../elements';

// Styles
import { ColumnSpaceBetweenAndSpace, StrokeText } from './styles';

// Images
import programmerScanning from '../../../assets/images/programmerScanning.png';

const Services: FC = () => {
    return (
        <Box>
            <Header
                backgroundsize = 'cover'
                image = { programmerScanning } >
                <MyContainer  sx = {{ height: '100%' }}>
                    <ContainerCenter>
                        <Title>
                            <StrokeText>Our </StrokeText>
                            <GreenText>Services</GreenText>
                        </Title>
                    </ContainerCenter>
                </MyContainer>
            </Header>
            <Section sx = {{ position: 'relative' }}>
                <MyContainer>
                    <Subtitle textAlign = { 'center' }>
                        We are a fast-growing software development agency with a strong expertise
                        in the most relevant and innovative programming languages, frameworks, libraries
                        and tools. We are a fast-growing software development agency with a strong expertise
                        in the most relevant and innovative programming languages, frameworks, libraries and tools.
                    </Subtitle>
                </MyContainer>
            </Section>
            <Section>
                <MyContainer>
                    <ColumnSpaceBetweenAndSpace>
                        <BigCard
                            firstTitle = {
                                <ImagesServices
                                    size = 'lg'
                                    type = 'Web development'
                                />
                            }
                            secondTitle = { <p><GreenText>Web </GreenText><br />development</p> }
                            variantCard = 'transparent'>
                            We are always ready to discuss your request and find the best solutions for your case.
                            Also, one of our developers could be a part of your team on one of the existing
                            projects as an outstaff member.
                        </BigCard>
                        <BigCard
                            firstTitle = {
                                <ImagesServices
                                    size = 'lg'
                                    type = 'Mobile development'
                                />
                            }
                            secondTitle = { <p><GreenText>Mobile </GreenText><br />development</p> }
                            variantCard = 'transparent'>
                            Our stack covers Android Native, iOS Native and Cross-platform development.
                            Depending on your idea, business objectives and requirements we will estimate,
                            discover and implement the project in the most relevant way to provide each
                            case with the expected quality and result.
                        </BigCard>
                        <BigCard
                            firstTitle = {
                                <ImagesServices
                                    size = 'lg'
                                    type = 'UI/UX design'
                                />
                            }
                            secondTitle = { <p><GreenText>UI/UX </GreenText><br />design</p> }
                            variantCard = 'transparent'>
                            Our stack covers Android Native, iOS Native and Cross-platform development.
                            Depending on your idea, business objectives and requirements we will estimate,
                            discover and implement the project in the most relevant way to provide each
                            case with the expected quality and result.
                        </BigCard>
                        <BigCard
                            firstTitle = {
                                <ImagesServices
                                    size = 'lg'
                                    type = 'Legacy Code'
                                />
                            }
                            secondTitle = { <p><GreenText>Legacy Code </GreenText><br />Redevelopment</p> }
                            variantCard = 'transparent'>
                            Have an existing project and would like to update it? Would be great to find
                            the best solution for you, according to the most innovative technologies and tools.
                        </BigCard>
                        <BigCard
                            firstTitle = {
                                <ImagesServices
                                    size = 'lg'
                                    type = 'Consulting/Estimation'
                                />
                            }
                            secondTitle = { <p><GreenText>Consulting </GreenText><br />Estimation</p> }
                            variantCard = 'transparent'>
                            Have a project and a team of developers? We could estimate and consult
                            about the best technologies stack. In order to make you be sure you are
                            provided with the best possible solution.
                        </BigCard>
                        <BigCard
                            firstTitle = {
                                <ImagesServices
                                    size = 'lg'
                                    type = 'Code Review'
                                />
                            }
                            secondTitle = { <p><GreenText>Code </GreenText><br />Review</p> }
                            variantCard = 'transparent'>
                            Have a project and a team of developers? We could estimate and consult
                            about the best technologies stack. In order to make you be sure you are
                            provided with the best possible solution.
                        </BigCard>
                        <BigCard
                            firstTitle = {
                                <ImagesServices
                                    size = 'lg'
                                    type = 'Software Maintenance'
                                />
                            }
                            secondTitle = { <p><GreenText>Software </GreenText><br />Maintenance</p> }
                            variantCard = 'transparent'>
                            We are always ready to support and advise your
                            project after the development process is finished.
                        </BigCard>
                        <BigCard
                            firstTitle = {
                                <ImagesServices
                                    size = 'lg'
                                    type = 'Product development'
                                />
                            }
                            secondTitle = { <p><GreenText>Product development</GreenText><br />and support</p> }
                            variantCard = 'transparent'>
                            Previous experience in creating an idea, development and support
                            of different solutions in the Medical and Telecommunication fields
                            gives us a quite deep understanding of business processes and the
                            ways of solving issues. That’s why our product managers can provide
                            you with some advice for further improvements.
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
        <Services />
    </ErrorBoundary>
);
