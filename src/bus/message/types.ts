// Core
import { CaseReducer, PayloadAction } from '@reduxjs/toolkit';

// State
export type Message = {
    firstName: string
    lastName: string
    email: string
    text: string
}

export type MessageState = Message | null

// Contracts
type BaseContact<T> = CaseReducer<MessageState, PayloadAction<T>>

export type SetMessageContract = BaseContact<Message>
