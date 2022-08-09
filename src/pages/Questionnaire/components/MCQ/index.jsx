import React from "react";
import styles from "./index.module.scss";
import Button from "../Button";

const MCQ = ({
    title,
    firstOption,
    secondOption,
    thirdOption,
    fourthOption,
    data,
    setAnswer,
    rating,
    multiple,
}) => {
    const handleClick = (n) => {
        setAnswer({
            id: data.id,
            answer: multiple
                ? data?.answer.includes(n)
                    ? data?.answer.filter((el) => el !== n)
                    : [...data?.answer, n]
                : n,
            rating: rating[n],
        });
    };

    const checkIsEmpty = (n) => {
        if (typeof data.answer === "number" || data.answer === null) {
            return data?.answer !== n;
        } else if (Array.isArray(data?.answer)) {
            return !data?.answer.includes(n);
        }
    };

    return (
        <>
            <div className={styles.questionTitle}>{title}</div>
            <div className={styles.fourBtnContainer}>
                <div
                    className={styles.msqBtnContainer}
                    style={{ width: fourthOption ? "48%" : "30%" }}
                >
                    <Button
                        handleClick={() => handleClick(0)}
                        empty={checkIsEmpty(0)}
                        text={firstOption}
                    />
                </div>
                <div
                    className={styles.msqBtnContainer}
                    style={{ width: fourthOption ? "48%" : "30%" }}
                >
                    <Button
                        handleClick={() => handleClick(1)}
                        empty={checkIsEmpty(1)}
                        text={secondOption}
                    />
                </div>
                <div
                    className={styles.msqBtnContainer}
                    style={{ width: fourthOption ? "48%" : "30%" }}
                >
                    <Button
                        handleClick={() => handleClick(2)}
                        empty={checkIsEmpty(2)}
                        text={thirdOption}
                    />
                </div>

                {fourthOption && (
                    <div
                        className={styles.msqBtnContainer}
                        style={{ width: fourthOption ? "48%" : "30%" }}
                    >
                        <Button
                            handleClick={() => handleClick(3)}
                            empty={checkIsEmpty(3)}
                            text={fourthOption}
                        />
                    </div>
                )}
            </div>
        </>
    );
};

export default MCQ;
