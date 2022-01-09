// Core
import { Card, CardContent, CardHeader, styled } from '@mui/material';

// backdrop-filter: blur("5px")

export const MyContainer = styled(Card, {})(({ theme }) => ({
    fontSize:         theme.fonts.size.sixth,
    color:            theme.colors.grey[ 50 ],
    background:       'none',
    backgroundFilter: 'blur(100px)',
    border:           `1px solid ${theme.colors.primary[ 50 ]}`,
    //! with / height
    width:            '140px',
    height:           '140px',

    ':hover': {
        //todo title/text === hover green
        borderColor: `${theme.colors.success[ 50 ]}`,
    },
}));

export const MyCardHeader = styled(CardHeader, {})(({ theme }) => ({
    textAlign:  'center',
    fontSize:   theme.fonts.size.eleventh,
    fontFamily: 'Nunito',
}));

export const MyCardContent = styled(CardContent, {})(({ theme }) => ({
    textAlign:  'center',
    fontSize:   theme.fonts.size.second,
    fontFamily: 'Nunito',
}));
