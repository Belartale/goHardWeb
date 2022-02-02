// Core
import { Box, styled, Typography } from '@mui/material';

export const Wrapper = styled(Box, {})`
    .swiper {
        padding: 20px 0px;
        width: calc(100vw - 48px);
        
        @media (min-width: 500px) {
            padding: 50px 0px;
        }
        @media (min-width: 1550px) {
            max-width: calc(1536px / 1.5);
        }

        & img {
            height: 100px;
            width: auto;
        }
        .swiper-slide {
            display: flex;
            justify-content: center;
            align-items: center;
            opacity: 0.5;

            
            & > .MuiCard-root {
                padding: 20px 25px 40px;
                max-width: 320px;
                transition: all 400ms linear;
                transform: scale(0.8);
                border-radius: 10px;
                background-color: ${({ theme }) => theme.colors.secondary[ 50 ]};
            }
        }
        @media (min-width: 900px) {
            .swiper-slide-next {
                opacity: 1;
                z-index: 1;
                & > .MuiCard-root {
                    transform: scale(1);
                    box-shadow: 0px 0px 44px ${({ theme }) => theme.colors.grey[ 100 ]};
                }
            }
        }
        @media (max-width: 900px) {
            .swiper-slide-active {
                opacity: 1;
                
                & > .MuiCard-root {
                    transform: scale(1);
                    box-shadow: 0px 0px 44px ${({ theme }) => theme.colors.grey[ 100 ]};

                    @media (max-width: 500px) {
                        margin: 20px;
                        box-shadow: 0px 0px 20px ${({ theme }) => theme.colors.grey[ 100 ]};
                    }
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

export const TitleSlide = styled(Typography, {})`
    font-family: 'Nunito';
    font-size: ${({ theme }) => theme.fonts.size.A200};
    color: ${({ theme }) => theme.colors.primary[ 50 ]};
    margin: 10px 0px;

    @media (min-width: 600px) {
        margin: 20px 0px;
    }
`;

export const TextSlide = styled('p', {})`
    font-family: 'Nunito';
    font-size: ${({ theme }) => theme.fonts.size[ 300 ]};
    line-height:  ${({ theme }) => theme.fonts.lineHeight[ 400 ]};
    color: ${({ theme }) => theme.colors.grey[ 50 ]};
    text-align: center;
`;

