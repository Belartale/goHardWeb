// Core
import { Box, styled, Typography } from '@mui/material';

export const Wrapper = styled(Box, {})`
    .swiper {
        .swiper-slide {
            display: flex;
            justify-content: center;
            align-content: center;
            opacity: 0.5;
            transition: all 400ms cubic-bezier(0, 0.5, 0, 0.5);
            & > .MuiBox-root {
                margin: 10px 10px 10px;
            }
            & > .MuiBox-root > .MuiCard-root {
                transition: all 400ms cubic-bezier(0, 0.5, 0, 0.5);
                transform: scale(0.8);
                border-radius: 10px;
                background-color: ${({ theme }) => theme.colors.secondary[ 50 ]};
                
                @media (max-width: 900px) {
                    max-width: 500px;
                }
                
                @media (min-width: 900px) {
                    width: 40vw;
                }
                @media (min-width: 1550px) {
                    width: 620px;
                }
            }
        }
        @media (max-width: 900px) {
            .swiper-slide-active {
                opacity: 1;

                & > .MuiBox-root > .MuiCard-root {
                    transform: scale(1);
                    box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.grey[ 100 ]};
                }
            }
        }
        @media (min-width: 900px) {
            .swiper-slide-next {
                opacity: 1;
                z-index: 1;

                & > .MuiBox-root > .MuiCard-root {
                    transform: scale(1);
                    box-shadow: 0px 0px 10px ${({ theme }) => theme.colors.grey[ 100 ]};
                }
                & ~ .swiper-slide {
                    @media (min-width: 900px) {
                        transform: translate(-35px, 0%);
                    }
                    & ~ .swiper-slide {
                        transform: translate(0%, 0%);
                    }
                }
            }
            .swiper-slide-active {
                @media (min-width: 900px) {
                    transform: translate(35px, 0%);
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

export const CellSliderPortfolioPage = styled(Box, {})`
    width: auto;
    padding: 0 5px;
    margin: 5px 0;
`;

export const ImgSliderPortfolioPage = styled('img', {})`
    height: 20px;
`;

export const CardBottomSliderPortfolioPage  = styled(Box, {})`

    @media (min-width: 1200px) {
        display: flex;
    }
`;
export const CaptionsSliderPortfolioPage  = styled(Box, {})`
    margin-bottom: 20px;
    text-align: center;

    @media (min-width: 1200px) {
        margin-bottom: 0px;
        margin-right: 20px;
        text-align: left;
    }
`;

export const TechnologiesSliderPortfolioPage  = styled(Box, {})`
    margin-bottom: 15px;
    min-width: 110px;

    @media (min-width: 1200px) {
        margin-bottom: 0px;
    }
`;

export const TitleImagesSliderPortfolioPage  = styled(Typography, {})`
    margin-bottom: 20px;
    text-align: center;
    font-size:  ${({ theme }) => theme.fonts.size[ 100 ]};
    font-weight: 400;
    color: ${({ theme }) => theme.colors.primary[ 50 ]};

    @media (min-width: 1200px) {
        text-align: start;
    }
`;

export const ImagesSliderPortfolioPage  = styled(Box, {})`
    display: flex;
    flex-wrap: wrap;
    margin: -5px;

    justify-content: center;

    @media (min-width: 1200px) {
        justify-content: flex-start;
    }
`;

