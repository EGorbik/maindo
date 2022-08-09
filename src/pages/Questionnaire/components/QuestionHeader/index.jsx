import React from "react";
import styles from "./index.module.scss";
import backBtn from "../../../../images/backBtn.png";

const QuestionHeader = ({ handleClick, pageNumber }) => {
    return (
        <>
            <img
                className={styles.backBtn}
                onClick={handleClick}
                src={backBtn}
            />
            <div className={styles.scaleContaiener}>
                <div className={styles.scale}>
                    <div
                        className={styles.progress}
                        style={{
                            width: (100 / 14) * pageNumber.toString() + "%",
                        }}
                    ></div>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: 5,
                    }}
                >
                    <div className={styles.scaleText}>Вопросы</div>
                    <div className={styles.scaleText}>{pageNumber}/14</div>
                </div>
            </div>
        </>
    );
};

export default QuestionHeader;
