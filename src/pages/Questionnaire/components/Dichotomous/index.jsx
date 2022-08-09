import React from "react";
import styles from "./index.module.scss";
import Button from "../Button";

const Dichotomous = ({ title, data, setAnswer, rating }) => {
    const handleClick = (n) => {
        setAnswer({
            id: data.id,
            answer: n,
            rating: rating[n],
        });
    };

    return (
        <>
            <div className={styles.questionTitle}>{title}</div>
            <div className={styles.dichotomousBtnContainer}>
                <div className={styles.dichotomousBtn}>
                    <Button
                        handleClick={() => handleClick(0)}
                        width={"50%"}
                        empty={data?.answer !== 0}
                        text="Да"
                    />
                </div>
                <div className={styles.dichotomousBtn}>
                    <Button
                        handleClick={() => handleClick(1)}
                        width={"50%"}
                        empty={data?.answer !== 1}
                        text="Нет"
                    />
                </div>
            </div>
        </>
    );
};

export default Dichotomous;
