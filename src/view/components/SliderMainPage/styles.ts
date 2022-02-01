// Core
import { Box, styled } from '@mui/material';

export const Wrapper = styled(Box, {})`
    .swiper {
        max-width: 1536px;
        
        @media (max-width: 1550px) {
            & {
                width: calc(100vw - 48px);
            }
        }
        .swiper-slide {
            display: flex;
            justify-content: center;
            align-content: center;
            opacity: 0.5;
            transition: all 400ms cubic-bezier(0, 0.5, 0, 0.5);
            transform: scale(0.8);
            
            & > * > * {
                width: 500px;
                border-radius: 8px;
                @media (min-width: 900px) {
                    width: 40vw;
                }
                @media (min-width: 1550px) {
                    width: 620px;
                }
                & img {
                    display: block;
                    max-width: 100%;
                    height: auto;
                }
            }
        }
        @media (max-width: 900px) {
            .swiper-slide-active {
                opacity: 1;
                transform: scale(1);
            }
        }

        @media (min-width: 900px) {
            .swiper-slide-next {
                opacity: 1;
                z-index: 1;
                transform: scale(1);

                & ~ .swiper-slide {
                    transform: translate(-35px, 0%) scale(0.8);

                    & ~ .swiper-slide {
                        transform: translate(0%, 0%) scale(0.8);
                    }
                }
            }
            .swiper-slide-active {
                transform: translate(35px, 0%) scale(0.8);
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

