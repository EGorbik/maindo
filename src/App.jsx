import "./App.css";
import React, { useEffect, useReducer } from "react";
import { Routes, Route } from "react-router-dom";
//import ReactGa from "react-ga";
import Main from "./pages/Main";
import Questionnaire from "./pages/Questionnaire";
import { ContextApp, initialState, testReducer } from "./store/answers.reducer";

function App() {
    const [state, dispatch] = useReducer(testReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 200);
    }, []);

    return (
        <ContextApp.Provider value={{ dispatch, state }}>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="questionnaire" element={<Questionnaire />} />
            </Routes>
        </ContextApp.Provider>
    );
}

export default App;
