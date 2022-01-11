// Core
import React, { FC } from 'react';
import { Grid, Box, TextField } from '@mui/material';

// Container
import { MyContainer } from '..';

// Elements
import { Logo, MyButton } from '../../elements';

// Styles
import { Container, BoxWithTopBorder, MyTypographyContact, MyTypographyParagraph, Form, MyTextField, BoxContainer } from './styles';

export const Footer: FC = () => {
    return (
        <Container>
            <MyContainer>
                <Grid
                    container
                    columnSpacing = { '30px' }>
                    <Grid
                        container
                        item
                        md = { 6 }
                        xs = { 12 } >
                        <Box sx = {{ width: '100%', display: { xs: 'flex', md: 'block' }, justifyContent: 'center' }}>
                            <Logo />
                        </Box>
                        <BoxWithTopBorder>
                            <BoxContainer>
                                <Box sx = {{ display: 'flex', alignItems: 'center' }}>
                                    <svg
                                        fill = 'none'
                                        height = '20'
                                        viewBox = '0 0 20 20'
                                        width = '20'
                                        xmlns = 'http://www.w3.org/2000/svg'>
                                        <path
                                            d = 'M18.7469 20C8.08234 20.0151 -0.011397 11.8244 1.20468e-05 1.25314C1.20468e-05 0.562781 0.559656 0 1.25001 0H4.54921C5.16867 0 5.69491 0.455162 5.78588 1.06791C6.00389 2.5365 6.43147 3.96621 7.05561 5.31338L7.18406 5.59063C7.36266 5.97613 7.2416 6.43418 6.89585 6.68109C5.87412 7.41074 5.48365 8.87944 6.27962 10.0254C7.27847 11.4635 8.53756 12.7224 9.97534 13.7208C11.1213 14.5165 12.5898 14.1261 13.3194 13.1046C13.5665 12.7586 14.0248 12.6375 14.4105 12.8162L14.6865 12.944C16.0337 13.5681 17.4636 13.9957 18.9323 14.2137C19.5451 14.3046 20 14.8308 20 15.4503V18.75C20 19.4403 19.439 20 18.7486 20L18.7469 20Z'
                                            fill = 'white'
                                        />
                                    </svg>
                                    <MyTypographyContact>+38 (012) 1234567</MyTypographyContact>
                                </Box>
                                <Box sx = {{ display: 'flex', alignItems: 'center' }}>
                                    <svg
                                        fill = 'none'
                                        height = '20'
                                        viewBox = '0 0 26 20'
                                        width = '26'
                                        xmlns = 'http://www.w3.org/2000/svg'>
                                        <path
                                            d = 'M19.4061 11.3589C18.2585 11.3589 17.1804 10.8124 16.2039 9.91757L16.4398 8.65518L16.4476 8.60493C16.6633 7.26407 17.3304 5.00992 19.4054 5.00992C20.152 5.01015 20.868 5.34496 21.396 5.94074C21.924 6.53652 22.2207 7.34451 22.2209 8.18707C22.2196 9.02886 21.9225 9.83572 21.3946 10.4305C20.8668 11.0254 20.1513 11.3596 19.4054 11.3598L19.4061 11.3589ZM19.4061 1.79486C16.7617 1.79486 14.7063 3.73253 13.8727 6.92379C12.6032 4.77013 11.6345 2.18098 11.0736 0H8.22523V8.36073C8.22379 9.15423 7.94381 9.91477 7.44658 10.4759C6.94935 11.0369 6.27538 11.3529 5.57219 11.3545C4.86919 11.3522 4.19558 11.036 3.69848 10.4751C3.20139 9.91415 2.92121 9.15402 2.91915 8.36073V0H0.0708008V8.36073C0.0708008 11.7856 2.54025 14.5916 5.57219 14.5916C8.60725 14.5916 11.0736 11.7865 11.0736 8.36073V6.95993C11.6267 8.25936 12.3064 9.5817 13.1321 10.748L11.3869 20H14.3L15.5656 13.2869C16.6726 14.0856 17.946 14.5907 19.4069 14.5907C22.5318 14.5907 25.0708 11.7071 25.0708 8.1853C25.0708 4.65906 22.5318 1.79398 19.4069 1.79398L19.4061 1.79486Z'
                                            fill = 'white'
                                        />
                                    </svg>

                                    <MyTypographyContact>UpWork</MyTypographyContact>
                                </Box>
                                <Box sx = {{ display: 'flex', alignItems: 'center' }}>
                                    <svg
                                        fill = 'none'
                                        height = '20'
                                        viewBox = '0 0 25 20'
                                        width = '25'
                                        xmlns = 'http://www.w3.org/2000/svg'>
                                        <path
                                            d = 'M21.6708 20H2.4708C1.14532 20 0.0708008 18.8807 0.0708008 17.5V2.39125C0.126731 1.05319 1.18504 -0.00126547 2.4708 1.13989e-06H21.6708C22.9963 1.13989e-06 24.0708 1.11929 24.0708 2.5V17.5C24.0708 18.8807 22.9963 20 21.6708 20ZM2.4708 4.835V17.5H21.6708V4.835L12.0708 11.5L2.4708 4.835ZM3.4308 2.5L12.0708 8.5L20.7108 2.5H3.4308Z'
                                            fill = 'white'
                                        />
                                    </svg>

                                    <MyTypographyContact>busdev@gohard.tech</MyTypographyContact>
                                </Box>

                            </BoxContainer>
                        </BoxWithTopBorder>
                        <MyTypographyParagraph paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Nisl tristique ullamcorper id fames amet
                            consectetur dui nec. Enim sed aenean
                            congue semper etiam ipsum Lorem
                            ipsum dolor sit amet, consectetur
                            adipiscing elit. Nisl tristique
                        </MyTypographyParagraph>

                    </Grid>

                    <Grid
                        item
                        md = { 6 }
                        xs = { 12 }>
                        <Form
                            component = 'form'>
                            <Grid
                                container
                                rowSpacing = { '10px' }>
                                <Grid
                                    container
                                    item
                                    columnSpacing = { '20px' }
                                    rowSpacing = { '10px' }
                                    xs = { 12 }>
                                    <Grid
                                        item
                                        md = { 6 }
                                        xs = { 12 }>
                                        <MyTextField
                                            fullWidth
                                            label = 'First Name'
                                            variant = 'outlined'
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md = { 6 }
                                        xs = { 12 }>
                                        <MyTextField
                                            fullWidth
                                            label = 'Last Name'
                                            variant = 'outlined'
                                        />
                                    </Grid>
                                </Grid>

                                <Grid
                                    item
                                    xs = { 12 }>
                                    <MyTextField
                                        fullWidth
                                        label = 'E-mail adress'
                                        variant = 'outlined'
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs = { 12 }>
                                    <MyTextField
                                        fullWidth
                                        label = 'How can we help?'
                                        variant = 'outlined'
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs = { 12 }>
                                    <MyButton typeButton = 'sm'>Send</MyButton>
                                </Grid>

                            </Grid>
                        </Form>
                    </Grid>
                </Grid>
            </MyContainer>
        </Container>
    );
};
