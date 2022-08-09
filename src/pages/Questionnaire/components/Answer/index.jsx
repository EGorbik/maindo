import React from "react";
import styles from "./index.module.scss";
import CustomInput from "../CustomInput/CustomInput";
import answer from "../../../../images/answer.png";

const Answer = ({ text, data, setAnswer }) => {
    return (
        <>
            <div className={styles.answerText}>{text}</div>
            <CustomInput
                value={data?.answer}
                handleValue={(e) => setAnswer({ ...data, answer: e })}
                title="Ответ"
                img={answer}
            />
        </>
    );
};

export default Answer;
