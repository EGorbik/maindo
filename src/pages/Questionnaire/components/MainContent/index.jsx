import React, { useEffect, useState, useContext } from "react";
import styles from "./index.module.scss";
import { Row, Col } from "react-bootstrap";
import Button from "../Button";
import Dichotomous from "../Dichotomous";
import Introducing from "../Introducing";
import Answer from "../Answer";
import MCQ from "../MCQ/index";
import QuestionHeader from "../QuestionHeader";
import { ContextApp } from "../../../../store/answers.reducer";
import { sendMetrik } from "../../../../utils/metriks";
import observer from "../../../../images/observer.png";
import bushBear from "../../../../images/bushBear.png";
import PSY from "../../../../images/PSY.png";
import magicСarpet from "../../../../images/magicСarpet.png";
import q4 from "../../../../gif/q4.gif";
import catInBox from "../../../../images/catInBox.png";
import library from "../../../../images/library.png";
import q7 from "../../../../images/q7.png";
import q8 from "../../../../images/q8.png";
import q9 from "../../../../images/q9.png";
import q10 from "../../../../gif/q10.gif";
import q11 from "../../../../images/q11.png";
import q12 from "../../../../images/q12.png";
import q13 from "../../../../images/q13.png";
import q14 from "../../../../images/q14.png";
import backBtn from "../../../../images/backBtn.png";
import what from "../../../../images/what.png";

const questions = [
    {
        element: (name, email, setName, setEmail) => (
            <Introducing
                name={name}
                email={email}
                setName={setName}
                setEmail={setEmail}
            />
        ),
        image: observer,
    },
    {
        element: (data, setAnswer) => (
            <Dichotomous
                data={data}
                setAnswer={setAnswer}
                rating={[9, 5]}
                title="Есть ли у вас бизнесс в россии?"
            />
        ),
        image: bushBear,
    },
    {
        element: (data, setAnswer) => (
            <Answer
                data={data}
                setAnswer={setAnswer}
                text="Какой у вас продукт? опишите в нескольких словах его уникальность для рынка?"
            />
        ),
        image: PSY,
    },
    {
        element: (data, setAnswer) => (
            <MCQ
                data={data}
                rating={[4, 6, 8, 10]}
                setAnswer={setAnswer}
                title="Как вы оцениваете свой уровень продаж за последний 1 год?"
                firstOption="0-2 млн руб/мес"
                secondOption="2-5 млн руб/мес"
                thirdOption="5-10 млн руб/мес"
                fourthOption="+10 млн руб/мес"
            />
        ),
        image: magicСarpet,
    },
    {
        element: (data, setAnswer) => (
            <Answer
                data={data}
                setAnswer={setAnswer}
                text="Где производится ваш продукт?"
            />
        ),
        image: q4,
    },
    {
        element: (data, setAnswer) => (
            <Answer
                data={data}
                setAnswer={setAnswer}
                text="Размеры и вес 1 продукта? габариты и вес ящика, количество товара в ящике?"
            />
        ),
        image: catInBox,
    },
    {
        element: (data, setAnswer) => (
            <Dichotomous
                data={data}
                rating={[10, 4]}
                setAnswer={setAnswer}
                title="У вас есть брендбук?"
            />
        ),
        image: library,
    },
    {
        element: (data, setAnswer) => (
            <Dichotomous
                data={data}
                rating={[10, 4]}
                setAnswer={setAnswer}
                title="Есть ли У вас есть юридическое лицо в США?"
            />
        ),
        image: q7,
    },
    {
        element: (data, setAnswer) => (
            <MCQ
                data={data}
                multiple
                setAnswer={setAnswer}
                rating={[0, 0, 0, 0]}
                title="Какие платформы или торговые площадки вас интересуют больше всего?"
                firstOption="Amazon"
                secondOption="Walmart"
                thirdOption="Shopify"
            />
        ),
        image: q8,
    },
    {
        element: (data, setAnswer) => (
            <Dichotomous
                data={data}
                rating={[9, 5]}
                setAnswer={setAnswer}
                title="Изучали ли конкурентоспособность вашего товара на американских площадках?"
            />
        ),
        image: q9,
    },
    {
        element: (data, setAnswer) => (
            <Dichotomous
                data={data}
                rating={[9, 5]}
                setAnswer={setAnswer}
                title="Знаете ли вы стоимость доставки вашего продукта в США?"
            />
        ),
        image: q10,
    },
    {
        element: (data, setAnswer) => (
            <Dichotomous
                data={data}
                rating={[10, 4]}
                setAnswer={setAnswer}
                title="Есть ли у вас склад для хранения товара в CША?"
            />
        ),
        image: q11,
    },
    {
        element: (data, setAnswer) => (
            <Dichotomous
                data={data}
                rating={[10, 4]}
                setAnswer={setAnswer}
                title="Есть ли у вас бухгалтер в США?"
            />
        ),
        image: q12,
    },
    {
        element: (data, setAnswer) => (
            <Dichotomous
                data={data}
                rating={[10, 4]}
                setAnswer={setAnswer}
                title="У вас есть маркетинговая команда с опытом продаж на американских площадках? "
            />
        ),
        image: q13,
    },
    {
        element: (data, setAnswer) => (
            <MCQ
                data={data}
                rating={[4, 6, 8, 10]}
                setAnswer={setAnswer}
                title="Каков ваш общий бюджет для выхода на рынок США? "
                firstOption="$25 000-50 000"
                secondOption="$50 000-100 000"
                thirdOption="$100 000-250 000"
                fourthOption="более $250 000"
            />
        ),
        image: q14,
    },
];

const MainContent = ({ handleSendResult, isOpenMobileHeader }) => {
    const [pageNumber, setPageNumber] = useState(0);
    const { state, dispatch } = useContext(ContextApp);
    const [currentAnswer, setCurrentAnswer] = useState();
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const handleNext = () => {
        console.log(state);
        if (pageNumber === 0) {
            if (!name || !email) {
                return;
            } else {
                sendMetrik("leftEmail", email);
                dispatch({ type: "SET_USER", data: { name, email } });
            }
        } else {
            if (!currentAnswer?.answer && currentAnswer?.answer !== 0) return;
        }
        pageNumber !== 0 &&
            dispatch({ type: "SET_ANSWER", data: currentAnswer });
        setPageNumber((cur) => (cur + 1 !== 15 ? cur + 1 : cur));
        if (pageNumber === 14) {
            handleSendResult();
        }
    };

    const handlePrev = () => {
        setPageNumber((cur) => (cur - 1 !== -1 ? cur - 1 : cur));
    };

    const setAnswer = (data) => {
        console.log(data);
        setCurrentAnswer(data);
        //dispatch({type: 'SET_ANSWER', data})
    };

    useEffect(() => {
        return () => {
            //sendMetrik('completed', state.user.email)

            dispatch({ type: "LEAVE_QUESTIONNAIRE" });
        };
    }, []);

    useEffect(() => {
        setCurrentAnswer(state.answers[pageNumber - 1]);
    }, [pageNumber]);

    return (
        <Row className={styles.mainContainer} class="row align-items-end">
            <div className={styles.backBtnTop}>
                <img
                    className={styles.backBtn}
                    onClick={() => handlePrev()}
                    style={{
                        display:
                            isOpenMobileHeader || pageNumber === 0
                                ? "none"
                                : "block",
                    }}
                    src={backBtn}
                />
            </div>

            <Col md={5} className={styles.leftCustomCol}>
                <img
                    className={styles.mainImg}
                    src={
                        pageNumber === 1 && currentAnswer?.answer === 1
                            ? what
                            : questions[pageNumber].image
                    }
                />
            </Col>
            <Col className={styles.rightCustomCol}>
                <div className={styles.infoContainer}>
                    {pageNumber !== 0 && (
                        <QuestionHeader
                            pageNumber={pageNumber}
                            handleClick={handlePrev}
                        />
                    )}
                    {currentAnswer?.id === pageNumber &&
                        questions[pageNumber].element(currentAnswer, setAnswer)}
                    {pageNumber === 0 &&
                        questions[pageNumber].element(
                            name,
                            email,
                            setName,
                            setEmail
                        )}
                    <div className={styles.btnWrapper}>
                        <div className={styles.btnContainer}>
                            <Button
                                handleClick={handleNext}
                                text="Продолжить"
                                bold
                            />
                        </div>
                    </div>
                </div>
            </Col>
        </Row>
    );
};

export default MainContent;
