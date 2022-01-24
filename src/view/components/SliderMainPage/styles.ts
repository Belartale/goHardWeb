// Core
import { Box, styled } from '@mui/material';

export const Wrapper = styled(Box, {})`
    .swiper {
        max-width: 1488px;
        @media (max-width: 1550px) {
            & {
                width: calc(100vw - 48px);
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
        }
        @media (max-width: 700px) {
            .swiper-slide-active {
                transform: scale(1);
                z-index: 2;
                opacity: 1;
            }
        }

        @media (min-width: 700px) {
            .swiper-slide-active {
                transform: scale(1);
                z-index: 2;
                opacity: 1;
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
