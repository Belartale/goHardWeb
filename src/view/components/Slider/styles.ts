// Core
import { Box, styled } from '@mui/material';

export const MyWrapper = styled(Box, {})`
    .swiper {
        position: relative;
        max-width: 1488px;
        @media (max-width: 1550px) {
            & {
                width: calc(100vw - 48px);
            }
        }
        @media (max-width: 1550px) {
            & {
                width: calc(100vw - 55px);
            }
        }
        & img {
            width: 100%;
            border-radius: 8px;
        }
        .swiper-slide {
            transition: all 400ms linear;
            transform: scale(0.8);
            display: flex;
            justify-content: center;
            opacity: 0.5;
            /* visibility: hidden; */
        }
        .swiper-slide-active{
            transform: scale(1);
            z-index: 2;
            opacity: 1;
        }
        .swiper-slide-next {
            z-index: 1;
        }
    
        .swiper-slide-prev, .swiper-slide-active, .swiper-slide-next {
            /* visibility: visible; */
        }

        .swiper-button-prev, .swiper-button-next {
            color: ${({ theme }) => theme.colors.success[ 50 ]};
            top: calc(50% - 16px);
        }
    
        .swiper-pagination {
            position: static;

            & .swiper-pagination-bullet {
                width: 12px;
                height: 12px;
                background-color: ${({ theme }) => theme.colors.success[ 100 ]}
            }
            & .swiper-pagination-bullet-active {
                background-color: ${({ theme }) => theme.colors.success[ 50 ]}
            }
        }
    }
`;
