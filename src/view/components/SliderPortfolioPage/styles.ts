// Core
import { Box, styled, Card, Typography } from '@mui/material';

export const Wrapper = styled(Box, {})`
    .swiper {
        padding: 10px 0px;
        
        @media (max-width: 1550px) {
            & {
                width: calc(100vw - 48px);
            }
        }
        .swiper-slide {
            transition: all 400ms linear;
            transform: scale(0.8);
            opacity: 0.5;
        }
        @media (max-width: 900px) {
            .swiper-slide-active {
                transform: scale(1);
                opacity: 1;
                .MuiCard-root {
                    box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.grey[ 100 ]};
                }
            }
        }
        @media (min-width: 900px) {
            .swiper-slide-next {
                transform: scale(1);
                z-index: 1;
                opacity: 1;
                .MuiCard-root {
                    box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.grey[ 100 ]};
                }
            }
        }
        
        .swiper-button-prev, .swiper-button-next {
            color: ${({ theme }) => theme.colors.success[ 50 ]};
            opacity: 0;
            transition: all 200ms linear;
            top: calc(50% - 16px);
        }
        &:hover .swiper-button-prev, &:hover .swiper-button-next {
            opacity: 1;
        }
    }
`;

export const MyCard = styled(Card, {})`
    background-color: ${({ theme }) => theme.colors.secondary[ 50 ]};
    margin: 0px 10px;

    .MuiCard-root {
        padding: 0px 10px 30px;
        border-radius: 10px;
        max-width: 100%;
        .MuiCardContent-root {
            background-color: white;
        }
    }
`;

export const TitleSliderPortfolioPage = styled(Typography, {})`
    font-size: ${({ theme }) => theme.fonts.size[ 800 ]};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary[ 50 ]};
`;

export const TextSliderPortfolioPage = styled(Typography, {})`
    font-size: ${({ theme }) => theme.fonts.size[ 50 ]};
    font-weight: 300;
    color: ${({ theme }) => theme.colors.grey[ 50 ]};
`;

// export const Card = styled(Box, {})`
// `;
