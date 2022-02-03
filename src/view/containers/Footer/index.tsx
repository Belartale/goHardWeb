// Core
import React, { FC } from 'react';
import { Grid, Box } from '@mui/material';

// Container
import { MyContainer } from '..';

// Elements
import { MyButton } from '../../elements';

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
        checkValidationForm,
        resetInputsToInitial,
    } = useInputsRedux();

    const onSubmitButton = () => {
        validationInput({ type: 'firstName', value: inputsRedux.firstName.value });
        validationInput({ type: 'lastName', value: inputsRedux.lastName.value });
        validationInput({ type: 'email', value: inputsRedux.email.value });
        validationInput({ type: 'text', value: inputsRedux.text.value });

        !Object.values(inputsRedux)
            .some((element) => element.isValidate === false
            || element.value.length <= 0) && resetInputsToInitial();
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
                        <S.Form
                            component = 'form'
                            isValidateForm = { checkValidationForm() }>
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
                                        <S.MyTextField
                                            fullWidth
                                            error = { !inputsRedux.firstName.isValidate }
                                            helperText = { !inputsRedux.firstName.isValidate && 'Incorrect input' }
                                            label = 'First Name'
                                            name = 'firstName'
                                            value = { inputsRedux.firstName.value }
                                            variant = 'outlined'
                                            onChange = {
                                                (event) => validationInput({ type: 'firstName', value: event.target.value })
                                            }
                                        />
                                    </Grid>
                                    <Grid
                                        item
                                        md = { 6 }
                                        xs = { 12 }>
                                        <S.MyTextField
                                            fullWidth
                                            error = { !inputsRedux.lastName.isValidate }
                                            helperText = { !inputsRedux.lastName.isValidate && 'Incorrect input' }
                                            label = 'Last Name'
                                            name = 'lastName'
                                            value = { inputsRedux.lastName.value }
                                            variant = 'outlined'
                                            onChange = {
                                                (event) => validationInput({ type: 'lastName', value: event.target.value })
                                            }
                                        />
                                    </Grid>
                                </Grid>

                                <Grid
                                    item
                                    xs = { 12 }>
                                    <S.MyTextField
                                        fullWidth
                                        error = { !inputsRedux.email.isValidate }
                                        helperText = { !inputsRedux.email.isValidate && 'Incorrect input' }
                                        label = 'E-mail adress'
                                        name = 'email'
                                        value = { inputsRedux.email.value }
                                        variant = 'outlined'
                                        onChange = {
                                            (event) => validationInput({ type: 'email', value: event.target.value })
                                        }
                                    />
                                </Grid>

                                <Grid
                                    item
                                    xs = { 12 }>
                                    <S.MyTextField
                                        fullWidth
                                        multiline
                                        error = { !inputsRedux.text.isValidate }
                                        helperText = { !inputsRedux.text.isValidate && 'Incorrect input' }
                                        label = 'How can we help?'
                                        name = 'text'
                                        rows = { 6 }
                                        value = { inputsRedux.text.value }
                                        variant = 'outlined'
                                        onChange = {
                                            (event) => validationInput({ type: 'text', value: event.target.value })
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
                        </S.Form>
                    </Grid>
                </Grid>
            </MyContainer>
        </S.Container>
    );
};
