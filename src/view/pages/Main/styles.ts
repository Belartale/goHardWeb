// Core
import styled from 'styled-components';

// Images
import laptop from '../../../assets/images/laptop.png';

export const Header = styled.header({
    backgroundImage:    `url(${laptop})`,
    backgroundRepeat:   'no-repeat',
    backgroundPosition: 'center center',
    height:             '100vh',
    width:              '100%',
});
