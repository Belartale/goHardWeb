// Core
import React, { FC, useEffect } from 'react';
import { Grid, Box } from '@mui/material';

// Container
import { MyContainer } from '..';

// Elements
import {
    Form,
    MyButton,
    MyTextField,
} from '../../elements';

// Styles
import * as S from './styles';

// Images
import imageLogo from '../../../assets/images/logo.png';
import { ContactBar } from '../../components';

// Bus
// import { initialState, useInputsRedux } from '../../../bus/client/inputs';
import { initialState } from '../../../bus/message/slice';
import { useMessage } from '../../../bus/message';
// import { useMessage } from '../../../bus/message';

// Hooks
import { Controller, useForm } from 'react-hook-form';

export const Footer: FC = () => {
    // const { message, setMessage } = useMessage();

    // const {
    //     message,
    //     setMessage,
    //     resetToInitialMessage,
    // } = useInputsRedux();

    const { message, setMessage, resetToInitialMessage } = useMessage();

    const { control, handleSubmit, watch, getValues, reset, formState: { errors, isValid }} = useForm({
        defaultValues: initialState.feedback,
        mode:          'onBlur',
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

    // const handleInput = (
    //     event: ChangeEvent<HTMLInputElement>,
    // ) => {
    //     setMessage({
    //         type:  'feedback',
    //         value: { ...message.feedback, [ event.target.name ]: event.target.value,
    //         },
    //     });
    // };

    const onSubmit = () => {
        console.log('Click !!!!!!!!!!!!!!!!!!!');
        reset();
        resetToInitialMessage();
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
                            sx = {{ margin: '0 auto', width: { sm: '60vw', md: 'auto' }}}
                            onSubmit = { handleSubmit(onSubmit) }>
                            <Grid
                                container
                                rowSpacing = { '10px' }>
                                <Grid
                                    container
                                    item
                                    columnSpacing = { '20px' }
                                    rowSpacing = { '10px' }
                                    xs = { 12 }>
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
                                                    helperText = { !!errors.firstName && 'Incorrect input' }
                                                    label = 'First Name'
                                                    value = { typeof message.feedback.firstName !== 'string' ? '' : message.feedback.firstName }
                                                    variant = 'outlined'
                                                />
                                            ) }
                                            rules = {{ required: true }}
                                        />

                                        {/* <MyTextField
                                            { ...register('firstName', { min: 1, required: true }) }
                                            fullWidth
                                            error = { isValid }
                                            helperText = { isValid && 'Incorrect input' }
                                            label = 'First Name'
                                            value = { message.feedback.firstName }
                                            variant = 'outlined'
                                            onChange = {
                                                (event: ChangeEvent<HTMLInputElement>) => {
                                                    handleInput(event);
                                                }
                                            }
                                        /> */}

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
                                                    helperText = { !!errors.lastName && 'Incorrect input' }
                                                    label = 'Last Name'
                                                    value = { typeof message.feedback.lastName !== 'string' ? '' : message.feedback.lastName }
                                                    variant = 'outlined'
                                                />
                                            ) }
                                            rules = {{ required: true }}
                                        />

                                        {/* <Controller
                                            control = { control }
                                            name = 'lastName'
                                            render = { ({ field }) => (
                                                <MyTextField
                                                    { ...field }
                                                    fullWidth
                                                    error = { !isValid }
                                                    helperText = { !isValid && 'Incorrect input' }
                                                    label = 'Last Name'
                                                    value = { typeof message.feedback.lastName !== 'string' ? '' : message.feedback.lastName }
                                                    variant = 'outlined'
                                                    onChange = {
                                                        (event: ChangeEvent<HTMLInputElement>) => handleInput(event)
                                                    }
                                                />
                                            ) }
                                        /> */}


                                    </Grid>
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
                                                helperText = { !!errors.email && 'Incorrect input' }
                                                label = 'E-mail adress'
                                                value = { typeof message.feedback.email !== 'string' ? '' : message.feedback.email }
                                                variant = 'outlined'
                                            />
                                        ) }
                                        rules = {{ required: true, validate: (value) => typeof value === 'string' && /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value) }}
                                    />

                                    {/* <MyTextField
                                        fullWidth
                                        error = { isValid }
                                        helperText = { isValid && 'Incorrect input' }
                                        label = 'E-mail adress'
                                        { ...register('email', { ...settingsError }) }

                                        value = { typeof message.feedback.email !== 'string' ? '' : message.feedback.email }
                                        variant = 'outlined'
                                        onChange = {
                                            (event: ChangeEvent<HTMLInputElement>) => handleInput(event)
                                        }
                                    /> */}
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
                                                helperText = { !!errors.text && 'Incorrect input' }
                                                label = 'How can we help?'
                                                rows = { 6 }
                                                value = { typeof message.feedback.text !== 'string' ? '' : message.feedback.text }
                                                variant = 'outlined'
                                            />
                                        ) }
                                        rules = {{ required: true }}
                                    />

                                    {/* <MyTextField
                                        fullWidth
                                        multiline
                                        error = { isValid }
                                        helperText = { isValid && 'Incorrect input' }
                                        label = 'How can we help?'
                                        { ...register('text', { ...settingsError }) }

                                        rows = { 6 }
                                        value = { typeof message.feedback.text !== 'string' ? '' : message.feedback.text }
                                        variant = 'outlined'
                                        onChange = {
                                            (event: ChangeEvent<HTMLInputElement>) => handleInput(event)
                                        }
                                    /> */}
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
                        </Form>
                    </Grid>
                </Grid>
            </MyContainer>
        </S.Container>
    );
};
