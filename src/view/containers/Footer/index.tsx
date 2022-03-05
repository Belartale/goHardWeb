// Core
import React, { FC, useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Grid, Box } from '@mui/material';

// Container
import { MyContainer } from '..';

// Components
import { ContactBar } from '../../components';

// Elements
import {
    Form,
    MyButton,
    MyTextField,
    Spinner,
} from '../../elements';

// Styles
import * as S from './styles';

// Images
import imageLogo from '../../../assets/images/logo.png';

// Bus
import { useTogglersRedux } from '../../../bus/client/togglers';
import { initialState } from '../../../bus/message/slice';
import { useMessage } from '../../../bus/message';

// Saga
import { useMessageSaga } from '../../../bus/message/saga';

// Tools
import { validateEmail } from '../../../tools/utils';

export const Footer: FC = () => {
    const { togglersRedux } = useTogglersRedux();
    const { postMessageFeedback } = useMessageSaga();

    const { message, setMessage, resetToInitialMessage } = useMessage();

    const {
        control,
        handleSubmit,
        watch,
        getValues,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues: initialState.feedback,
        mode:          'onSubmit',
    });

    useEffect(() => {
        setMessage({ type:  'feedback',
            value: {
                firstName: getValues('firstName'),
                lastName:  getValues('lastName'),
                email:     getValues('email'),
                text:      getValues('text'),
            },
        });
    }, [
        watch('firstName'),
        watch('lastName'),
        watch('email'),
        watch('text'),
    ]);

    const onSubmit = () => {
        postMessageFeedback(message.feedback);
        resetToInitialMessage();
        reset();
    };

    return (
        <S.Container id = 'footer'>
            <MyContainer>
                <Grid
                    container
                    columnSpacing = { '30px' }>
                    <Grid
                        item
                        md = { 6 }
                        xs = { 12 } >
                        <Box sx = {{ display: { xs: 'flex', md: 'block' }, justifyContent: 'center' }}>
                            <img
                                alt = 'Image logo'
                                src = { imageLogo }
                            />
                        </Box>
                        <S.BoxWithTopBorder>
                            <ContactBar size = 'sm' />
                        </S.BoxWithTopBorder>
                    </Grid>

                    <Grid
                        item
                        md = { 6 }
                        xs = { 12 }>
                        <Form
                            component = 'form'
                            isValidateForm = { [ errors.firstName, errors.lastName, errors.email, errors.text ].every(
                                (element) => !!element === false,
                            ) }
                            sx = {{ position: 'relative', margin: '0 auto', width: { sm: '60vw', md: 'auto' }}}
                            onSubmit = { handleSubmit(onSubmit) }>
                            <Grid
                                container
                                columnSpacing = { '20px' }
                                rowSpacing = { '10px' }>
                                <Grid
                                    item
                                    md = { 6 }
                                    xs = { 12 }>
                                    <Controller
                                        control = { control }
                                        name = 'firstName'
                                        render = { ({ field }) => (
                                            <MyTextField
                                                { ...field }
                                                fullWidth
                                                error = { !!errors.firstName }
                                                helperText = { errors.firstName?.message }
                                                label = 'First Name'
                                                value = { message.feedback.firstName }
                                                variant = 'outlined'
                                            />
                                        ) }
                                        rules = {{ required: 'Field must be filled' }}
                                    />
                                </Grid>
                                <Grid
                                    item
                                    md = { 6 }
                                    xs = { 12 }>
                                    <Controller
                                        control = { control }
                                        name = 'lastName'
                                        render = { ({ field }) => (
                                            <MyTextField
                                                { ...field }
                                                fullWidth
                                                error = { !!errors.lastName }
                                                helperText = { errors.lastName?.message }
                                                label = 'Last Name'
                                                value = { message.feedback.lastName }
                                                variant = 'outlined'
                                            />
                                        ) }
                                        rules = {{ required: 'Field must be filled' }}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs = { 12 }>

                                    <Controller
                                        control = { control }
                                        name = 'email'
                                        render = { ({ field }) => (
                                            <MyTextField
                                                { ...field }
                                                fullWidth
                                                error = { !!errors.email }
                                                helperText = { errors.email?.message }
                                                label = 'E-mail adress'
                                                value = { message.feedback.email }
                                                variant = 'outlined'
                                            />
                                        ) }
                                        rules = {{
                                            required: 'Field must be filled or incorrect email',
                                            validate: (value) => validateEmail(value) ? true : 'Incorrect email',
                                        }}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs = { 12 }>

                                    <Controller
                                        control = { control }
                                        name = 'text'
                                        render = { ({ field }) => (
                                            <MyTextField
                                                { ...field }
                                                fullWidth
                                                multiline
                                                error = { !!errors.text }
                                                helperText = { errors.text?.message }
                                                label = 'How can we help?'
                                                rows = { 6 }
                                                value = { message.feedback.text }
                                                variant = 'outlined'
                                            />
                                        ) }
                                        rules = {{ required: 'Field must be filled' }}
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs = { 12 }>
                                    <MyButton
                                        type = 'submit'
                                        typebutton = 'sm'>
                                        Send
                                    </MyButton>
                                </Grid>
                            </Grid>
                            {
                                togglersRedux.isPostForm
                            && (

                                <Spinner
                                    absolute
                                    size = { '60px' }
                                />
                            )
                            }
                        </Form>
                    </Grid>
                </Grid>
            </MyContainer>
        </S.Container>
    );
};
