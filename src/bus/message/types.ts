// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
// export type Message = {
//     firstName: string
//     lastName: string
//     email: string
//     text: string
// }

export type MessageFeedback = {
    firstName: string
    lastName: string
    email: string
    text: string
}

export type MessageVacancy = {
    firstName: string
    lastName: string
    email: string
    select: string
    text: string
}


export type MessageState = {
    feedback: MessageFeedback
    vacancy: MessageVacancy
}

// type BothOptions = keyof MessageState;

// Contracts
type BaseContact<T> = CaseReducer<MessageState, PayloadAction<T>>

//TODO type: 'feedback' | 'vacancy'
export type MessagePayloadAction = { type: 'feedback' | 'vacancy', value: MessageFeedback | MessageVacancy };

// export type SetMessageContract = BaseContact<{ type: BothOptions, value: MessageFeedback | MessageVacancy }>
export type SetMessageContract = BaseContact<MessagePayloadAction>

// export type SetMessageFeedbackContract = BaseContact<MessageFeedback>
// export type SetMessageVacancyContract = BaseContact<MessageVacancy>
