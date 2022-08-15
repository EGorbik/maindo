import React from "react";
//import { sendMetrik } from "../utils/metriks";
export const ContextApp = React.createContext();

const initialValues = {
    finalRating: 0,
    user: { name: "", email: "" },
    number: 0,
    answers: [
        { id: 1, answer: null },
        { id: 2, answer: "" },
        { id: 3, answer: null },
        { id: 4, answer: "" },
        { id: 5, answer: "" },
        { id: 6, answer: null },
        { id: 7, answer: null },
        { id: 8, answer: [] },
        { id: 9, answer: null },
        { id: 10, answer: null },
        { id: 11, answer: null },
        { id: 12, answer: null },
        { id: 13, answer: null },
        { id: 14, answer: null },
    ],
};

export const initialState = initialValues;

export const testReducer = (state, action) => {
    console.log(state);
    switch (action.type) {
        case "SET_ANSWER":
            return {
                ...state,
                number: action.data.id,
                answers: state.answers.map((el) =>
                    el.id === action.data.id ? action.data : el
                ),
                finalRating: action.data.rating
                    ? action.data.rating + state.finalRating
                    : state.finalRating,
            };
        case "CLEAN_ANSWERS":
            return initialState;
        case "LEAVE_QUESTIONNAIRE":
            if (state.number !== 14) {
                // sendMetrik(
                //     "numberOfQuestions",
                //     state.user.email + " - " + state.number
                // );
                return initialState;
            }
            return state;
        case "SET_USER":
            return {
                ...state,
                user: {
                    name: action.data.name,
                    email: action.data.email,
                },
            };
        default:
            return state;
    }
};
