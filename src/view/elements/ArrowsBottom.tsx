// Core
import React, { FC } from 'react';
import styled from 'styled-components';

import { defaultTheme } from '../../assets/index';


const Container = styled.a`
    padding: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;

    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    
    bottom: 20px;
    @media (min-height: 600px) {
        bottom: 40px;
    }
    @media (min-height: 900px) {
        bottom: 75px;
    }
`;

export const ArrowsBottom: FC = () => {
    return (
        <Container href = '#footer'>
            <svg
                fill = 'none'
                height = '52'
                style = {{ position: 'static' }}
                viewBox = '0 0 62 52'
                width = '62'
                xmlns = 'http://www.w3.org/2000/svg'>
                <path
                    clipRule = 'evenodd'
                    d = 'M0.694294 19.6003C0.91382 19.3802 1.17461 19.2056 1.46172 19.0865C1.74883 18.9673 2.05663 18.906 2.36748 18.906C2.67833 18.906 2.98612 18.9673 3.27323 19.0865C3.56035 19.2056 3.82113 19.3802 4.04066 19.6003L30.7265 46.2909L57.4123 19.6003C57.8561 19.1565 58.458 18.9072 59.0855 18.9072C59.7131 18.9072 60.315 19.1565 60.7587 19.6003C61.2025 20.0441 61.4518 20.6459 61.4518 21.2735C61.4518 21.901 61.2025 22.5029 60.7587 22.9467L32.3997 51.3057C32.1802 51.5258 31.9194 51.7004 31.6323 51.8195C31.3451 51.9387 31.0374 52 30.7265 52C30.4157 52 30.1079 51.9387 29.8207 51.8195C29.5336 51.7004 29.2728 51.5258 29.0533 51.3057L0.694294 22.9467C0.474213 22.7271 0.299602 22.4664 0.180464 22.1792C0.0613257 21.8921 0 21.5843 0 21.2735C0 20.9626 0.0613257 20.6548 0.180464 20.3677C0.299602 20.0806 0.474213 19.8198 0.694294 19.6003V19.6003Z'
                    fill = { defaultTheme.colors.success[ 50 ] }
                    fillRule = 'evenodd'
                />
                <path
                    clipRule = 'evenodd'
                    d = 'M0.694294 0.694294C0.91382 0.474212 1.17461 0.299602 1.46172 0.180464C1.74883 0.0613257 2.05663 0 2.36748 0C2.67833 0 2.98612 0.0613257 3.27323 0.180464C3.56035 0.299602 3.82113 0.474212 4.04066 0.694294L30.7265 27.3849L57.4123 0.694294C57.6321 0.474568 57.8929 0.300273 58.18 0.181359C58.4671 0.0624443 58.7748 0.00123957 59.0855 0.00123957C59.3963 0.00123957 59.704 0.0624443 59.991 0.181359C60.2781 0.300273 60.539 0.474568 60.7587 0.694294C60.9784 0.914019 61.1527 1.17487 61.2716 1.46196C61.3906 1.74904 61.4518 2.05674 61.4518 2.36748C61.4518 2.67822 61.3906 2.98591 61.2716 3.273C61.1527 3.56008 60.9784 3.82093 60.7587 4.04066L32.3997 32.3997C32.1802 32.6198 31.9194 32.7944 31.6323 32.9135C31.3451 33.0326 31.0374 33.094 30.7265 33.094C30.4157 33.094 30.1079 33.0326 29.8207 32.9135C29.5336 32.7944 29.2728 32.6198 29.0533 32.3997L0.694294 4.04066C0.474213 3.82113 0.299602 3.56035 0.180464 3.27323C0.0613257 2.98612 0 2.67833 0 2.36748C0 2.05663 0.0613257 1.74883 0.180464 1.46172C0.299602 1.17461 0.474213 0.91382 0.694294 0.694294V0.694294Z'
                    fill = { defaultTheme.colors.success[ 50 ] }
                    fillRule = 'evenodd'
                />
            </svg>
        </Container>
    );
};
