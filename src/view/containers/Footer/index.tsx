// Core
import React, { ChangeEvent, FC } from 'react';
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
import { useInputsRedux } from '../../../bus/client/inputs';
// import { useMessage } from '../../../bus/message';

// Hooks
import { useValidation } from '../../../tools/hooks';

export const Footer: FC = () => {
    // const { message, setMessage } = useMessage();

    const { validationInput } = useValidation();

    const {
        inputsRedux,
        setInputAction,
        checkValidationFeedbackForm,
        resetInputsToInitial,
    } = useInputsRedux();


    const onSubmitButton = () => !checkValidationFeedbackForm() && resetInputsToInitial();

    const handleInput = (
        event: ChangeEvent<HTMLInputElement>,
    ) => {
        setInputAction({ type: 'feedback', value: { ...inputsRedux.feedback, [ event.target.name ]: event.target.value }});
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
                            isValidateForm = { checkValidationFeedbackForm() }
                            sx = {{ margin: '0 auto', width: { sm: '60vw', md: 'auto' }}}>
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
                                        <MyTextField
                                            fullWidth
                                            error = { validationInput({ type: 'text', value: inputsRedux.feedback.firstName }) }
                                            helperText = { validationInput({ type: 'text', value: inputsRedux.feedback.firstName }) && 'Incorrect input' }
                                            label = 'First Name'
                                            name = 'firstName'
                                            value = { inputsRedux.feedback.firstName }
                                            variant = 'outlined'
                                            onChange = {
                                                (event: ChangeEvent<HTMLInputElement>) => handleInput(event)
                                            }
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md = { 6 }
                                        xs = { 12 }>
                                        <MyTextField
                                            fullWidth
                                            error = { validationInput({ type: 'text', value: inputsRedux.feedback.lastName }) }
                                            helperText = { validationInput({ type: 'text', value: inputsRedux.feedback.lastName }) && 'Incorrect input' }
                                            label = 'Last Name'
                                            name = 'lastName'
                                            value = { typeof inputsRedux.feedback.lastName !== 'string' ? '' : inputsRedux.feedback.lastName }
                                            variant = 'outlined'
                                            onChange = {
                                                (event: ChangeEvent<HTMLInputElement>) => handleInput(event)
                                            }
                                        />
                                    </Grid>
                                </Grid>

                                <Grid
                                    item
                                    xs = { 12 }>
                                    <MyTextField
                                        fullWidth
                                        error = { validationInput({ type: 'email', value: inputsRedux.feedback.email }) }
                                        helperText = { validationInput({ type: 'email', value: inputsRedux.feedback.email }) && 'Incorrect input' }
                                        label = 'E-mail adress'
                                        name = 'email'
                                        value = { typeof inputsRedux.feedback.email !== 'string' ? '' : inputsRedux.feedback.email }
                                        variant = 'outlined'
                                        onChange = {
                                            (event: ChangeEvent<HTMLInputElement>) => handleInput(event)
                                        }
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs = { 12 }>
                                    <MyTextField
                                        fullWidth
                                        multiline
                                        error = { validationInput({ type: 'text', value: inputsRedux.feedback.text }) }
                                        helperText = { validationInput({ type: 'text', value: inputsRedux.feedback.text }) && 'Incorrect input' }
                                        label = 'How can we help?'
                                        name = 'text'
                                        rows = { 6 }
                                        value = { typeof inputsRedux.feedback.text !== 'string' ? '' : inputsRedux.feedback.text }
                                        variant = 'outlined'
                                        onChange = {
                                            (event: ChangeEvent<HTMLInputElement>) => handleInput(event)
                                        }
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs = { 12 }>
                                    <MyButton
                                        disabled = { !checkValidationFeedbackForm() }
                                        typebutton = 'sm'
                                        onClick = { onSubmitButton }>
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
