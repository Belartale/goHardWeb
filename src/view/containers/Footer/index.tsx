// Core
import React, { FC } from 'react';
import { Grid, Box } from '@mui/material';

// Container
import { MyContainer } from '..';

// Elements
import { MyButton } from '../../elements';

// Styles
import * as S from './styles';

// Images
import imageLogo from '../../../assets/images/logo.png';
import { ContactBar } from '../../components';

export const Footer: FC = () => {
    return (
        <S.Container id = 'footer'>
            <MyContainer>
                <Grid
                    container
                    columnSpacing = { '30px' }>
                    <Grid
                        item
                        md = { 6 }
                        xs = { 12 } >
                        <Box sx = {{ display: { xs: 'flex', md: 'block' }, justifyContent: 'center' }}>
                            <img
                                alt = 'logo'
                                src = { imageLogo }
                            />
                        </Box>
                        <S.BoxWithTopBorder>
                            <ContactBar size = 'sm' />
                        </S.BoxWithTopBorder>
                    </Grid>

                    <Grid
                        item
                        md = { 6 }
                        xs = { 12 }>
                        <S.Form
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
                                        <S.MyTextField
                                            fullWidth
                                            label = 'First Name'
                                            variant = 'outlined'
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md = { 6 }
                                        xs = { 12 }>
                                        <S.MyTextField
                                            fullWidth
                                            label = 'Last Name'
                                            variant = 'outlined'
                                        />
                                    </Grid>
                                </Grid>

                                <Grid
                                    item
                                    xs = { 12 }>
                                    <S.MyTextField
                                        fullWidth
                                        label = 'E-mail adress'
                                        variant = 'outlined'
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs = { 12 }>
                                    <S.MyTextField
                                        fullWidth
                                        multiline
                                        label = 'How can we help?'
                                        rows = { 6 }
                                        variant = 'outlined'
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs = { 12 }>
                                    <MyButton typebutton = 'sm'>Send</MyButton>
                                </Grid>

                            </Grid>
                        </S.Form>
                    </Grid>
                </Grid>
            </MyContainer>
        </S.Container>
    );
};
