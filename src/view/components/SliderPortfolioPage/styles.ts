// Core
import { Box, styled, Card, Typography } from '@mui/material';

export const Wrapper = styled(Box, {})`
    .swiper {
        padding: 10px 0px;
        width: calc(100vw - 48px);

        @media (min-width: 1550px) {
            & {
                width: auto;
            }
        }
        .swiper-slide {
            transition: all 400ms linear;
            transform: scale(0.8);
            opacity: 0.5;

            & > .MuiBox-root {
                padding: 0px 10px
            }
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
                opacity: 1;

                .MuiCard-root {
                    box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.grey[ 100 ]};
                }
            }
        }
        
        .swiper-button-prev, .swiper-button-next {
            opacity: 0;
            transition: all 200ms linear;
            color: ${({ theme }) => theme.colors.success[ 50 ]};
        }
        &:hover .swiper-button-prev, &:hover .swiper-button-next {
            opacity: 1;
        }
    }
`;

export const MyCard = styled(Card, {})`
    background-color: ${({ theme }) => theme.colors.secondary[ 50 ]};

    .MuiCard-root {
        border-radius: 10px;
    }
`;

export const TitleSliderPortfolioPage = styled(Typography, {})`
    font-size: ${({ theme }) => theme.fonts.size[ 800 ]};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary[ 50 ]};
    margin-bottom: 10px;
`;

export const TextSliderPortfolioPage = styled(Typography, {})`
    font-size: ${({ theme }) => theme.fonts.size[ 50 ]};
    font-weight: 300;
    color: ${({ theme }) => theme.colors.grey[ 50 ]};
    line-height: ${({ theme }) => theme.fonts.lineHeight[ 100 ]};
`;

export const RowSliderPortfolioPage = styled(Box, {})`
    display: flex;
    flex-wrap: wrap;
    margin: -5px;

`;

export const CellSliderPortfolioPage = styled(Box, {})`
    width: auto;
    padding: 0 5px;
    margin: 5px 0;
`;

export const ImgSliderPortfolioPage = styled('img', {})`
    height: 20px;
`;

