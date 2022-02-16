// Core
import React, { FC } from 'react';
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
        checkValidationFeedbackForm,
        resetInputsToInitial,
    } = useInputsRedux();

    const onSubmitButton = () => {
        validationInput({ type: 'firstNameFeedback', value: inputsRedux.firstNameFeedback.value });
        validationInput({ type: 'lastNameFeedback', value: inputsRedux.lastNameFeedback.value });
        validationInput({ type: 'emailFeedback', value: inputsRedux.emailFeedback.value });
        validationInput({ type: 'textFeedback', value: inputsRedux.textFeedback.value });

        // !Object.values(inputsRedux)
        //     .some((element) => element.isValidate === false
        //     || element.value.length <= 0) && resetInputsToInitial();

        checkValidationFeedbackForm() && resetInputsToInitial();
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
                                            error = { !inputsRedux.firstNameFeedback.isValidate }
                                            helperText = { !inputsRedux.firstNameFeedback.isValidate && 'Incorrect input' }
                                            label = 'First Name'
                                            name = 'firstNameFeedback'
                                            value = { inputsRedux.firstNameFeedback.value }
                                            variant = 'outlined'
                                            onChange = {
                                                (event) => validationInput({ type: 'firstNameFeedback', value: event.target.value })
                                            }
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md = { 6 }
                                        xs = { 12 }>
                                        <MyTextField
                                            fullWidth
                                            error = { !inputsRedux.lastNameFeedback.isValidate }
                                            helperText = { !inputsRedux.lastNameFeedback.isValidate && 'Incorrect input' }
                                            label = 'Last Name'
                                            name = 'lastNameFeedback'
                                            value = { inputsRedux.lastNameFeedback.value }
                                            variant = 'outlined'
                                            onChange = {
                                                (event) => validationInput({ type: 'lastNameFeedback', value: event.target.value })
                                            }
                                        />
                                    </Grid>
                                </Grid>

                                <Grid
                                    item
                                    xs = { 12 }>
                                    <MyTextField
                                        fullWidth
                                        error = { !inputsRedux.emailFeedback.isValidate }
                                        helperText = { !inputsRedux.emailFeedback.isValidate && 'Incorrect input' }
                                        label = 'E-mail adress'
                                        name = 'emailFeedback'
                                        value = { inputsRedux.emailFeedback.value }
                                        variant = 'outlined'
                                        onChange = {
                                            (event) => validationInput({ type: 'emailFeedback', value: event.target.value })
                                        }
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs = { 12 }>
                                    <MyTextField
                                        fullWidth
                                        multiline
                                        error = { !inputsRedux.textFeedback.isValidate }
                                        helperText = { !inputsRedux.textFeedback.isValidate && 'Incorrect input' }
                                        label = 'How can we help?'
                                        name = 'textFeedback'
                                        rows = { 6 }
                                        value = { inputsRedux.textFeedback.value }
                                        variant = 'outlined'
                                        onChange = {
                                            (event) => validationInput({ type: 'textFeedback', value: event.target.value })
                                        }
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs = { 12 }>
                                    <MyButton
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
