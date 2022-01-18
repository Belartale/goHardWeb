// Core
import styled from 'styled-components';

export const ColumnSpaceBetweenAndSpace = styled.div`
    & > div:nth-child(2n) {
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
