// Core
import React, { FC } from 'react';
import { Box, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

// Hooks
import { useValidation } from '../../../tools/hooks';

// Bus
import { useInputsRedux } from '../../../bus/client/inputs';

// Container
import { ContainerCenter, GreenText, Header, MyContainer, Section } from '../../containers';

// Components
import { ContactBar, ErrorBoundary } from '../../components';

// Elements
import { Form, MyButton, Subtitle, Title } from '../../elements';

// Images
import vacanciesBg from '../../../assets/images/vacanciesBg.jpg';

// Styles
// import * as S from './styles';

// Types
type PropTypes = {
    /* type props here */
}

const Vacancies: FC<PropTypes> = () => {
    const [ age, setAge ] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    const { validationInput } = useValidation();

    const {
        inputsRedux,
        checkValidationVacanciesForm,
        resetInputsToInitial,
    } = useInputsRedux();

    const onSubmitButton = () => {
        validationInput({ type: 'firstNameVacancy', value: inputsRedux.firstNameVacancy.value });
        validationInput({ type: 'lastNameVacancy', value: inputsRedux.lastNameVacancy.value });
        validationInput({ type: 'emailVacancy', value: inputsRedux.emailVacancy.value });
        validationInput({ type: 'textVacancy', value: inputsRedux.textVacancy.value });

        !Object.values(inputsRedux)
            .some((element) => element.isValidate === false
            || element.value.length <= 0) && resetInputsToInitial();
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
                        textAlign = { 'center' }>
                        Like other growing companies, we are actively looking for employees.
                        Depending on the period, we need different specialists, but there is
                        one general requirement: “we are looking for our own person”.
                        If you are a purposeful specialist, responsible,
                        grasping on the fly - we are waiting for you in our ranks!
                    </Subtitle>
                    <Form
                        component = 'form'
                        isValidateForm = { checkValidationVacanciesForm() }
                        sx = {{ margin: '0 auto', width: { sm: '60vw', md: 'auto' }}}>
                        <InputLabel id = 'demo-simple-select-label'>Age</InputLabel>
                        <Select
                            id = 'demo-simple-select'
                            label = 'Age'
                            labelId = 'demo-simple-select-label'
                            value = { age }
                            onChange = { handleChange }>
                            <MenuItem value = { 10 }>Ten</MenuItem>
                            <MenuItem value = { 20 }>Twenty</MenuItem>
                            <MenuItem value = { 30 }>Thirty</MenuItem>
                        </Select>
                    </Form>
                    <MyButton
                        typebutton = 'sm'
                        onClick = { onSubmitButton }>
                        Send
                    </MyButton>
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
