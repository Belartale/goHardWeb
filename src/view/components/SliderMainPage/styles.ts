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
        .swiper-slide {
            display: flex;
            justify-content: center;
            align-content: center;
            opacity: 0.5;
            
            & > * {
                max-width: 500px;
                /* transition: all 400ms linear; */
                transform: scale(0.8);
                width: 100%;
                border-radius: 8px;
            }
        }
        @media (max-width: 900px) {
            .swiper-slide-active {
                opacity: 1;

                & > * {
                    transform: scale(1);
                }
            }
        }

        @media (min-width: 900px) {
            .swiper-slide-next {
                opacity: 1;
                z-index: 1;
                
                & > * {
                    transform: scale(1);
                }
                & ~ .swiper-slide {
                    & > * {
                        transform: translate(-25%, 0%) scale(0.8);
                    }
                    & ~ .swiper-slide {
                        transform: translate(5%, 0%) scale(0.8);
                    }
                }
            }
            .swiper-slide-active {
                transform: translate(25%, 0%);
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

