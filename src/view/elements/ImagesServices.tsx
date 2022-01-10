// Core
import React, { FC } from 'react';
import styled from 'styled-components';

interface TypeProps {
    type: 'Web development' | 'Mobile development'
    | 'UI/UX design' | 'Legacy Code'
    | 'Consulting/Estimation' | 'Code Review'
    | 'Software Maintenance' | 'Product development'
}

const Container = styled.div`
    width:            '100px';
    height:           '62px';
`;

export const ImagesServices: FC<TypeProps> = ({ type }) => {
    if (type === 'Web development') {
        return (
            <Container>
                <svg
                    fill = 'none'
                    height = { 62 }
                    width = { 100 }
                    xmlns = 'http://www.w3.org/2000/svg'
                    xmlnsXlink = 'http://www.w3.org/1999/xlink'>
                    <path
                        d = 'M0 0h100v62H0z'
                        fill = 'url(#a)'
                    />
                    <defs>
                        <pattern
                            height = { 1 }
                            id = 'a'
                            patternContentUnits = 'objectBoundingBox'
                            width = { 1 }>
                            <use
                                transform = 'scale(.01 .01613)'
                                xlinkHref = '#b'
                            />
                        </pattern>
                        <image
                            height = { 62 }
                            id = 'b'
                            width = { 100 }
                            xlinkHref = 'data:image/png;base64,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'
                        />
                    </defs>
                </svg>
            </Container>
        );
    }

    if (type === 'Mobile development') {
        return (
            <svg
                fill = 'none'
                height = { 62 }
                width = { 100 }
                xmlns = 'http://www.w3.org/2000/svg'
                xmlnsXlink = 'http://www.w3.org/1999/xlink'>
                <path
                    d = 'M0 0h100v62H0z'
                    fill = 'url(#a)'
                />
                <defs>
                    <pattern
                        height = { 1 }
                        id = 'a'
                        patternContentUnits = 'objectBoundingBox'
                        width = { 1 }>
                        <use
                            transform = 'scale(.01 .01613)'
                            xlinkHref = '#b'
                        />
                    </pattern>
                    <image
                        height = { 62 }
                        id = 'b'
                        width = { 100 }
                        xlinkHref = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAAA+CAYAAADd977FAAAN40lEQVR4XtWdWchV1RfA901NTQ0j0wy1QU2wREVJLR8cGogiSEmFDNMEzRFfVCwbnEEhSxseoohSE/Uh7SEwM9FUwlALFQecRRwqS9PK9Pvf35Z12Xffvc/ZZ7jf5//Ax713nz2svea19jrnK9xyyy01qng9+uij6pVXXlHPPvusatGihbp69apq0KCB/uSS76423cHoI799bVHtSe7FwWfC4duDr09WOELHL1u2TC1evFj98ssvGpRC/fr1a15++WX13nvvqXnz5qmPP/5YnT17Vt8sEktdv3694rt9TzZl9jc36mv3zUP7Cy+8oLZv365OnDjhXN9GZNQacfClmSvpnK7+bdu2VS+99JJ644031JgxY9Rnn32mCn379q3ZvHmz6tatW4lKUYiygQ9FfNJxw4cPV5s2bSoRJC1MJiLGjRunnnzySXXnnXeqf//9V916661Bn8whffl+8eJFtXHjRgV3C/Nmge+BBx5QBw8e1DQofP755zWIy6JFi4I4MQqxWYCyCYuEbN26tYwgWeafPn26VstogFOnTsVtw3v/2rVrql27dmrw4MHq119/Va+99pq6cuVKZtxNmTJF9ezZUxV+//33mk6dOqnz589nnjQPaZE5hg4dWkaQEJXkw2KXLl3U3LlzNTG+/vrrCjX83HPPaQTD+fa1Z88e9eGHH1bgZsCAAVrNoP+3bduWGXfY7UOHDqlCTfHCOIqtCOHC2267LTWHFZfTHOVCsNlmq6ysBPnoo4/UE088UQE38HTo0EF17txZ48C2m9gwbJmJn8aNG6vWrVurkSNHaiSi+102IimSkL5CUZfWNGrUKJLCqI/Ro0drPWrr0mbNmjnbmLxevXreez/88IPmWDHaoSorzcZ79OihVq5cqbk55IJBgV328Ndff1UMu/vuu9XDDz+svv3225IEhTBz1PpBBLnvvvvUzJkztTvcsGFDBQEQbflkAfO767erDVUwfvx4tWvXLicz5GnU+/Tpo4q2UhME5hNEyycAmN+jfkOcJk2a6P5Fh6iMIFmkuH///nquMgmJojCEad68eQiDxfa5cOGC+uOPP1TRfnkl00UQe+JQBCAhS5YsUc8884xe06VyRXWdPn26tAxIl/4wo/n9rrvu0i6rqbJC4XEhyEuQ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'
                    />
                </defs>
            </svg>
        );
    }

    if (type === 'UI/UX design') {
        return (
            <svg
                fill = 'none'
                height = { 62 }
                width = { 100 }
                xmlns = 'http://www.w3.org/2000/svg'
                xmlnsXlink = 'http://www.w3.org/1999/xlink'>
                <path
                    d = 'M0 0h100v62H0z'
                    fill = 'url(#a)'
                />
                <defs>
                    <pattern
                        height = { 1 }
                        id = 'a'
                        patternContentUnits = 'objectBoundingBox'
                        width = { 1 }>
                        <use
                            transform = 'scale(.01 .01613)'
                            xlinkHref = '#b'
                        />
                    </pattern>
                    <image
                        height = { 62 }
                        id = 'b'
                        width = { 100 }
                        xlinkHref = 'data:image/png;base64,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'
                    />
                </defs>
            </svg>
        );
    }

    if (type === 'Legacy Code') {
        return (
            <svg
                fill = 'none'
                height = { 62 }
                width = { 100 }
                xmlns = 'http://www.w3.org/2000/svg'
                xmlnsXlink = 'http://www.w3.org/1999/xlink'>
                <path
                    d = 'M0 0h100v62H0z'
                    fill = 'url(#a)'
                />
                <defs>
                    <pattern
                        height = { 1 }
                        id = 'a'
                        patternContentUnits = 'objectBoundingBox'
                        width = { 1 }>
                        <use
                            transform = 'scale(.01 .01613)'
                            xlinkHref = '#b'
                        />
                    </pattern>
                    <image
                        height = { 62 }
                        id = 'b'
                        width = { 100 }
                        xlinkHref = 'data:image/png;base64,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'
                    />
                </defs>
            </svg>
        );
    }

    if (type === 'Consulting/Estimation') {
        return (
            <svg
                fill = 'none'
                height = { 62 }
                width = { 100 }
                xmlns = 'http://www.w3.org/2000/svg'
                xmlnsXlink = 'http://www.w3.org/1999/xlink'>
                <path
                    d = 'M0 0h100v62H0z'
                    fill = 'url(#a)'
                />
                <defs>
                    <pattern
                        height = { 1 }
                        id = 'a'
                        patternContentUnits = 'objectBoundingBox'
                        width = { 1 }>
                        <use
                            transform = 'scale(.01 .01613)'
                            xlinkHref = '#b'
                        />
                    </pattern>
                    <image
                        height = { 62 }
                        id = 'b'
                        width = { 100 }
                        xlinkHref = 'data:image/png;base64,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'
                    />
                </defs>
            </svg>
        );
    }

    if (type === 'Code Review') {
        return (
            <svg
                fill = 'none'
                height = { 62 }
                width = { 100 }
                xmlns = 'http://www.w3.org/2000/svg'
                xmlnsXlink = 'http://www.w3.org/1999/xlink'>
                <path
                    d = 'M0 0h100v62H0z'
                    fill = 'url(#a)'
                />
                <defs>
                    <pattern
                        height = { 1 }
                        id = 'a'
                        patternContentUnits = 'objectBoundingBox'
                        width = { 1 }>
                        <use
                            transform = 'scale(.01 .01613)'
                            xlinkHref = '#b'
                        />
                    </pattern>
                    <image
                        height = { 62 }
                        id = 'b'
                        width = { 100 }
                        xlinkHref = 'data:image/png;base64,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'
                    />
                </defs>
            </svg>
        );
    }

    if (type === 'Software Maintenance') {
        return (
            <svg
                fill = 'none'
                height = { 62 }
                width = { 100 }
                xmlns = 'http://www.w3.org/2000/svg'
                xmlnsXlink = 'http://www.w3.org/1999/xlink'>
                <path
                    d = 'M0 0h100v62H0z'
                    fill = 'url(#a)'
                />
                <defs>
                    <pattern
                        height = { 1 }
                        id = 'a'
                        patternContentUnits = 'objectBoundingBox'
                        width = { 1 }>
                        <use
                            transform = 'scale(.01 .01613)'
                            xlinkHref = '#b'
                        />
                    </pattern>
                    <image
                        height = { 62 }
                        id = 'b'
                        width = { 100 }
                        xlinkHref = 'data:image/png;base64,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'
                    />
                </defs>
            </svg>
        );
    }

    if (type === 'Product development') {
        return (
            <svg
                fill = 'none'
                height = { 62 }
                width = { 100 }
                xmlns = 'http://www.w3.org/2000/svg'
                xmlnsXlink = 'http://www.w3.org/1999/xlink'>
                <path
                    d = 'M0 0h100v62H0z'
                    fill = 'url(#a)'
                />
                <defs>
                    <pattern
                        height = { 1 }
                        id = 'a'
                        patternContentUnits = 'objectBoundingBox'
                        width = { 1 }>
                        <use
                            transform = 'scale(.01 .01613)'
                            xlinkHref = '#b'
                        />
                    </pattern>
                    <image
                        height = { 62 }
                        id = 'b'
                        width = { 100 }
                        xlinkHref = 'data:image/png;base64,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'
                    />
                </defs>
            </svg>
        );
    }

    return null;
};
