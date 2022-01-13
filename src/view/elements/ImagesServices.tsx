// Core
import React, { FC } from 'react';
// import styled from 'styled-components';

// Images
import webDev from '../../assets/images/webDev.gif';
import mobDev from '../../assets/images/mobDev.gif';
import design from '../../assets/images/design.gif';
import legacyCode from '../../assets/images/legacyCode.gif';
import consulting from '../../assets/images/consulting.gif';
import codeReview from '../../assets/images/codeReview.gif';
import sofware from '../../assets/images/sofware.gif';
import productDev from '../../assets/images/productDev.gif';

interface TypeProps {
    type: 'Web development' | 'Mobile development'
    | 'UI/UX design' | 'Legacy Code'
    | 'Consulting/Estimation' | 'Code Review'
    | 'Software Maintenance' | 'Product development'
}

export const ImagesServices: FC<TypeProps> = ({ type }) => {
    if (type === 'Web development') {
        console.log(`type = ${type}`);

        return (
            <img
                alt = 'image web development'
                src = { webDev }
            />
        );
    }

    if (type === 'Mobile development') {
        console.log(`type = ${type}`);

        return (
            <img
                alt = 'image mobile development'
                src = { mobDev }
            />
        );
    }

    if (type === 'UI/UX design') {
        console.log(`type = ${type}`);

        return (
            <img
                alt = 'image UI/UX design'
                src = { design }
            />
        );
    }

    if (type === 'Legacy Code') {
        console.log(`type = ${type}`);

        return (
            <img
                alt = 'image legacy code'
                src = { legacyCode }
            />
        );
    }
    if (type === 'Consulting/Estimation') {
        console.log(`type = ${type}`);

        return (
            <img
                alt = 'image consulting and estimation'
                src = { consulting }
            />
        );
    }
    if (type === 'Code Review') {
        console.log(`type = ${type}`);

        return (
            <img
                alt = 'image code review'
                src = { codeReview }
            />
        );
    }
    if (type === 'Software Maintenance') {
        console.log(`type = ${type}`);

        return (
            <img
                alt = 'image software maintenance'
                src = { sofware }
            />
        );
    }
    if (type === 'Product development') {
        console.log(`type = ${type}`);

        return (
            <img
                alt = 'image product development'
                src = { productDev }
            />
        );
    }

    return null;
};
