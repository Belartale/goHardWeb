// Core
import React, { FC } from 'react';
import styled from 'styled-components';

// Images
import webDev from '../../assets/images/webDev.gif';
import mobDev from '../../assets/images/mobDev.gif';
import design from '../../assets/images/design.gif';
import legacyCode from '../../assets/images/legacyCode.gif';
import consulting from '../../assets/images/consulting.gif';
import codeReview from '../../assets/images/codeReview.gif';
import sofWare from '../../assets/images/sofware.gif';
import productDev from '../../assets/images/productDev.gif';

interface TypeProps {
    type: 'Web development' | 'Mobile development'
    | 'UI/UX design' | 'Legacy Code'
    | 'Consulting/Estimation' | 'Code Review'
    | 'Software Maintenance' | 'Product development'
    size: 'sm' | 'lg'
}

const Img = styled.img<any>`
    ${({ size }) => size === 'sm' ? {
        width:  '100px',
        height: 'auto',
    } : null }
    
    ${({ size }) => size === 'lg' ? {
        width:  '160px',
        height: 'auto',
    } : null }
`;

export const ImagesServices: FC<TypeProps> = ({ type, size }) => {
    if (type === 'Web development') {
        return (
            <Img
                alt = 'image web development'
                size = { size }
                src = { webDev }
            />
        );
    }

    if (type === 'Mobile development') {
        return (
            <Img
                alt = 'image mobile development'
                size = { size }
                src = { mobDev }
            />
        );
    }

    if (type === 'UI/UX design') {
        return (
            <Img
                alt = 'image UI/UX design'
                size = { size }
                src = { design }
            />
        );
    }

    if (type === 'Legacy Code') {
        return (
            <Img
                alt = 'image legacy code'
                size = { size }
                src = { legacyCode }
            />
        );
    }
    if (type === 'Consulting/Estimation') {
        return (
            <Img
                alt = 'image consulting and estimation'
                size = { size }
                src = { consulting }
            />
        );
    }
    if (type === 'Code Review') {
        return (
            <Img
                alt = 'image code review'
                size = { size }
                src = { codeReview }
            />
        );
    }
    if (type === 'Software Maintenance') {
        return (
            <Img
                alt = 'image software maintenance'
                size = { size }
                src = { sofWare }
            />
        );
    }
    if (type === 'Product development') {
        return (
            <Img
                alt = 'image product development'
                size = { size }
                src = { productDev }
            />
        );
    }

    return null;
};
