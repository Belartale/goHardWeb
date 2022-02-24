// Core
import React, { FC, useEffect } from 'react';
import { Box, Grid } from '@mui/material';

// Container
import { ContainerCenter, GreenText, Header, MyContainer, Section } from '../../containers';

// Components
import { ContactBar, ErrorBoundary } from '../../components';

// Elements
import { Form, MyButton, MySelect, MyTextField, Spinner, Subtitle, Title } from '../../elements';

// Images
import vacanciesBg from '../../../assets/images/vacanciesBg.jpg';

// Styles
import { useTogglersRedux } from '../../../bus/client/togglers';
import { useMessageSaga } from '../../../bus/message/saga';
import { useMessage } from '../../../bus/message';
import { Controller, useForm } from 'react-hook-form';
import { initialState } from '../../../bus/message/slice';
import { validateEmail } from '../../../tools/utils';

const Vacancies: FC = () => {
    const { togglersRedux } = useTogglersRedux();
    const { postMessageVacancy } = useMessageSaga();

    const { message, setMessage, resetToInitialMessage } = useMessage();

    const { control, handleSubmit, watch, getValues, reset, formState: { errors }} = useForm({
        defaultValues: initialState.vacancy,
        mode:          'onSubmit',
    });

    useEffect(() => {
        setMessage({ type:  'vacancy',
            value: {
                firstName: getValues('firstName'),
                lastName:  getValues('lastName'),
                email:     getValues('email'),
                text:      getValues('text'),
                select:    getValues('select'),
            },
        });
    }, [
        watch('firstName'),
        watch('lastName'),
        watch('email'),
        watch('text'),
        watch('select'),
    ]);

    const onSubmit = () => {
        postMessageVacancy(message.vacancy);
        resetToInitialMessage();
        reset();
    };

    return (
        <Box>
            <Header
                backgroundsize = 'cover'
                image = { vacanciesBg }
                opacity = 'true'>
                <ContainerCenter>
                    <Title>
                        <GreenText>Vacancies</GreenText>
                    </Title>
                </ContainerCenter>
            </Header>
            <Section>
                <MyContainer sx = {{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Subtitle
                        maxWidth = { '920px' }
                        mb = { '30px' }
                        textAlign = { 'center' }>
                        Like other growing companies, we are actively looking for employees.
                        Depending on the period, we need different specialists, but there is
                        one general requirement: “we are looking for our own person”.
                        If you are a purposeful specialist, responsible,
                        grasping on the fly - we are waiting for you in our ranks!
                    </Subtitle>
                    <Form
                        component = 'form'
                        isValidateForm = { [ errors.firstName, errors.lastName, errors.email, errors.text ].every(
                            (element) => !!element === false,
                        ) }
                        maxWidth = '600px'
                        sx = {{ position: 'relative', margin: '0 auto' }}
                        onSubmit = { handleSubmit(onSubmit) }>
                        <Grid
                            container
                            columnSpacing = { '20px' }
                            rowSpacing = { '10px' }>

                            <Grid
                                item
                                sm = { 6 }
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
                                            value = { message.vacancy.firstName }
                                            variant = 'outlined'
                                        />
                                    ) }
                                    rules = {{ required: 'Field must be filled' }}
                                />
                            </Grid>
                            <Grid
                                item
                                sm = { 6 }
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
                                            value = { message.vacancy.lastName }
                                            variant = 'outlined'
                                        />
                                    ) }
                                    rules = {{ required: 'Field must be filled' }}
                                />
                            </Grid>

                            <Grid
                                item
                                sm = { 8 }
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
                                            value = { message.vacancy.email }
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
                                sm = { 4 }
                                xs = { 12 }>

                                <Controller
                                    control = { control }
                                    name = 'select'
                                    render = { ({ field }) => (
                                        <MySelect
                                            error = { !!errors.select }
                                            nameSelect = 'Vacancy'
                                            values = { [
                                                { value: 'React', text: 'React' },
                                                { value: 'Java', text: 'Java' },
                                            ] }
                                            { ...field }
                                        />
                                    ) }
                                    rules = {{
                                        required: 'Field must be filled',
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
                                            value = { message.vacancy.text }
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
                </MyContainer>
            </Section>
            <MyContainer sx = {{ paddingTop: '20px', paddingBottom: '20px'  }}>
                <ContactBar size = 'lg' />
            </MyContainer>
        </Box>
    );
};

export default () => (
    <ErrorBoundary>
        <Vacancies />
    </ErrorBoundary>
);
