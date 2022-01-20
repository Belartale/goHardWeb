// Core
import { Box, BoxProps, styled } from '@mui/material';
import { PropTypesBigCard } from '.';

// Types
interface PropTypes extends BoxProps {
    variantCard: PropTypesBigCard['variantCard']
}

export const Container = styled(Box, {})<PropTypes>`
    max-width:       750px;
    padding:         20px 30px;
    display:         flex;
    flex-direction:  column;
    justify-content: center;
    align-items:     center;

    text-align: center;

    border-radius: 5px;
    ${({ theme, variantCard }) => ({
        border:          `1px solid ${theme.colors.grey[ 200 ]}`,
        backgroundColor: variantCard === 'grey' ? theme.colors.secondary[ 100 ] : 'transparent',
    })}

    @media (min-width: 600px) {
        padding: 30px 50px;
    }
    @media (min-width: 800px) {
        flex-direction: row;
    }

`;

export const Card = styled(Box, {})<PropTypes>`
    min-width: 200px;

    margin-bottom: 40px;

    @media (min-width: 800px) {
        margin-bottom: 0px;
        margin-right:  40px;
    },
`;

export const FirstTitle = styled(Box, {})<PropTypes>`
    font-family: 'Nunito';

    ${({ theme, variantCard }) => variantCard === 'grey' ? {
        fontSize: theme.fonts.size.twelfth,
        color:    theme.colors.success[ 50 ],
    } : {}}
`;
export const SecondTitle = styled(Box, {})<PropTypes>`
    font-family: 'Nunito';
    font-weight: 700;
    margin-top:  15px;
    color: ${({ theme }) => theme.colors.primary[ 50 ]};

    @media (min-width: 800px) {
        margin-top:  30px;
    }
    
    ${({ theme, variantCard }) => variantCard === 'grey' ? {
        lineHeight: theme.fonts.lineHeight[ 550 ],
        fontSize:   theme.fonts.size.fourth,
    } : {
        fontSize:   theme.fonts.size.seventh,
        lineHeight: theme.fonts.lineHeight[ 800 ],
    }}
`;
export const CardText = styled(Box, {})<PropTypes>`
    display:         flex;
    align-items:     center;
    justify-content: center;
    text-align:      center;

    font-family: "Nunito";
    font-weight: 300;
    color:      ${({ theme }) => theme.colors.grey[ 50 ]};

    ${({ theme, variantCard }) => variantCard === 'grey' ? {
        fontSize:   theme.fonts.size.fourth,
        lineHeight: theme.fonts.lineHeight[ 550 ],
    } : {
        fontSize:   theme.fonts.size.fifth,
        lineHeight: theme.fonts.lineHeight[ 600 ],
    }}


`;
