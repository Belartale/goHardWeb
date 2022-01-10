// Core
import React, { FC } from 'react';
import { styled, CardProps, Grid, Typography, Box } from '@mui/material';

// Styles
import { MyContainer, MyCardContent, MyCardHeader } from './styles';

// Types
interface TypesProps extends CardProps {
    title: string,
    text: string,
    textSize?: string,
}

const CardBox = styled(Box, {})(({ theme }) => ({
    padding:          '15px',
    background:       'none',
    backgroundFilter: 'blur(100px)',
    border:           `1px solid ${theme.colors.primary[ 50 ]}`,
    borderRadius:     '5px',
    //! with / height
    width:            '130px',
    minHeight:        '130px',

    ':hover': {
        borderColor:                         `${theme.colors.success[ 50 ]}`,
        '.MuiTypography-root, .MuiBox-root': {
            color: `${theme.colors.success[ 50 ]}`,
        },
    },
}));

const Title = styled(Box, {})(({ theme }) => ({
    textAlign:  'center',
    fontSize:   theme.fonts.size.eleventh,
    fontFamily: 'Nunito',
    color:      theme.colors.primary[ 50 ],
    // lineHeight: '72px',
}));

const Text = styled(Typography, {})(({ theme }) => ({
    textAlign:  'center',
    fontSize:   theme.fonts.size.second,
    fontFamily: 'Nunito',
    color:      theme.colors.primary[ 50 ],
}));

export const MyCardWithBlurBackground: FC<TypesProps> = ({ title, text, textSize, ...props }) => {
    return (
        <CardBox { ...props }>
            <Grid
                container
                direction = { 'column' }>
                <Grid item>
                    <Title>
                        {title}
                    </Title>
                </Grid>
                <Grid item>
                    <Text sx = {{ fontSize: textSize }}>
                        {text}
                    </Text>
                </Grid>
            </Grid>
        </CardBox>
    );

    // return (
    //     <MyContainer { ...props }>
    //         <MyCardHeader title = { title }/>
    //         <MyCardContent>
    //             <p>{text}</p>
    //         </MyCardContent>
    //     </MyContainer>
    // );
};
