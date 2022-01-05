// Core
import React, { FC } from 'react';
import styled from 'styled-components';

interface TypeProps {
    selected: boolean
    href: string
    text: string
}

const Container = styled.div`
    & {
        color:      ${({ theme }) => theme.colors.primary[ 50 ]};
        position:   relative;
        font-size:   ${({ theme }) => theme.fonts.third};
        font-family: "Nunito";

        &::before: {
            content:         "";
            position:        absolute;
            left:            0;
            bottom:          -5px;
            width:           0;
            height:          1px;
            backgroundColor: theme.colors.success[ 50 ];
            transition:      width 0.3s;
        }

        &:hover:before: {
            width: 100%;
        }

        transition: all 0.3s;
        &:hover:   {
            color: theme.colors.success[ 50 ];
        }
    }
`;


export const MenuLink: FC<TypeProps> = () => {
    return (
        <Container>
            aas
        </Container>
    );
};
