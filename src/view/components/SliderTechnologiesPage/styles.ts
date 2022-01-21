// Core
import { Box, styled, Typography } from '@mui/material';

export const Wrapper = styled(Box, {})`
    .swiper {
        max-width: 1488px;
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
            display: flex;
            justify-content: center;
            opacity: 0.5;
        }
        .swiper-slide-active{
            transform: scale(1);
            z-index: 2;
            opacity: 1;
        }
        .swiper-slide-next {
            z-index: 1;
        }

        .swiper-button-prev, .swiper-button-next {
            color: ${({ theme }) => theme.colors.success[ 50 ]};
            /* top: calc(50% - 16px); */
        }
    }
`;

export const TitleSlide = styled(Typography, {})`
    
    font-family: 'Nunito';
    font-size: ${({ theme }) => theme.fonts.size.A200};
    color: ${({ theme }) => theme.colors.primary[ 50 ]};
`;

export const TextSlide = styled(Typography, {})`
    
    font-family: 'Nunito';
    font-size: ${({ theme }) => theme.fonts.size.A200};
    line-height:  ${({ theme }) => theme.fonts.lineHeight[ 400 ]};
    color: ${({ theme }) => theme.colors.primary[ 50 ]};
`;
