// Core
import styled from 'styled-components';

export const ColumnSpaceBetweenAndSpace = styled.div`
    & > div:nth-of-type(2n) {
        margin-left: auto;
    }

    & > div:not(:last-child) {
        margin-bottom: 40px;
    }

    @media (min-width: 800px) {
        & > div:not(:last-child) {
        margin-bottom: 80px;
    }
    }
`;
