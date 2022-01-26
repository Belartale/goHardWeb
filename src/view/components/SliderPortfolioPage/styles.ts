// Core
import { Box, styled } from '@mui/material';

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
            display: flex;
            justify-content: center;
            opacity: 0.5;
            .MuiBox-root {
                padding: 0px 10px;
                .MuiCard-root {
                    border-radius: 10px;
                    max-width: 100%;
                    .MuiCardContent-root {
                        color: red
                    }
                }
            }
        }
        @media (max-width: 600px) {
            .swiper-slide-active {
                transform: scale(1);
                opacity: 1;
                .MuiCard-root {
                    box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.grey[ 100 ]};
                }
            }
        }
        @media (min-width: 600px) {
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

export const Card = styled(Box, {})`
`;
