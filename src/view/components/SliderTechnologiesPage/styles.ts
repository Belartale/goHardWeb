// Core
import { Box, styled, Typography } from '@mui/material';

export const Wrapper = styled(Box, {})`
    .swiper {
        padding: 50px 0px;
        max-width: calc(1488px / 1.5);
        @media (max-width: 1550px) {
            & {
                width: calc(100vw - 48px);
            }
        }
        & img {
            height: 100px;
            width: auto;
        }
        .swiper-slide {
            transition: all 400ms linear;
            transform: scale(0.8);
            opacity: 0.5;
            & > div {
                max-width: 320px;
                padding: 20px 25px 40px;
            }
        }
        @media (min-width: 700px) {
            .swiper-slide-next {
                transform: scale(1);
                opacity: 1;
                & > div {
                    box-shadow: 0px 0px 44px ${({ theme }) => theme.colors.grey[ 100 ]};
                    border-radius: 10px;
                }
            }
        }
        @media (max-width: 700px) {
            .swiper-slide-active {
                transform: scale(1);
                opacity: 1;
                & > div {
                    box-shadow: 0px 0px 44px ${({ theme }) => theme.colors.grey[ 100 ]};
                    border-radius: 10px;
                }
                @media (max-width: 500px) {
                    & > div {
                        margin: 30px;
                    }
                }
            }
        }
        .swiper-button-prev, .swiper-button-next {
            color: ${({ theme }) => theme.colors.success[ 50 ]};
        }
    }
`;

export const TitleSlide = styled(Typography, {})`
    font-family: 'Nunito';
    font-size: ${({ theme }) => theme.fonts.size.A200};
    color: ${({ theme }) => theme.colors.primary[ 50 ]};

    margin: 10px 0px;

    @media (min-width: 600px) {
        margin: 20px 0px;
    }
`;

export const TextSlide = styled(Typography, {})`
    font-family: 'Nunito';
    font-size: ${({ theme }) => theme.fonts.size[ 300 ]};
    line-height:  ${({ theme }) => theme.fonts.lineHeight[ 400 ]};
    color: ${({ theme }) => theme.colors.grey[ 50 ]};
`;

