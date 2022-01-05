// Core
import React, { FC } from 'react';
import styled from 'styled-components';

interface TypeProps {}

const Container = styled.div`
    color:      ${({ theme }) => theme.colors.primary[ 50 ]};
    position:   relative;
    font-size:   ${({ theme }) => theme.fonts.third};
    font-family: "Nunito";
    transition: all 0.3s;

    &::before: {
        content:         "";
        position:        absolute;
        left:            0;
        bottom:          -5px;
        width:           0;
        height:          1px;
        background-color: ${({ theme }) => theme.colors.success[ 50 ]};
        transition:      width 0.3s;
    }

    &:hover:before: {
        width: 100%;
    }

    
    &:hover:   {
        color: ${({ theme }) => theme.colors.success[ 50 ]};
    }
`;


export const MenuLink: FC<TypeProps> = () => {
    return (
        <Container>
            aas
        </Container>
    );
};
