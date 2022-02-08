// Core
import { List, ListProps, styled } from '@mui/material';
import { PropTypesNav } from '.';

// Types
interface PropTypes extends ListProps {
    fontSize: PropTypesNav['fontSize']
}

export const MyList = styled(List, {})<PropTypes>(({ fontSize }) => ({
    '& > li:not(:last-child)': {
        marginBottom: fontSize === 'lg' && '10px',
    },


}));
