import React from "react";
import styles from "./index.module.scss";

const CustomInput = ({
    img,
    title,
    value,
    handleValue,
    handleKeyPress,
    emailEl,
    nameError,
    emailError,
}) => {
    return (
        <div>
            <div className={styles.wrapper}>
                <img className={styles.img} src={img} />
                <div className={styles.inputTitle}>{title}</div>
            </div>
            <input
                ref={emailEl}
                onKeyPress={(e) => handleKeyPress(e.key)}
                value={value}
                onChange={(e) => handleValue(e.target.value)}
                className={styles.customInput}
            />
            {nameError && (
                <div className={styles.errorMessage}>
                    Имя не должно быть пустым
                </div>
            )}
            {emailError && (
                <div className={styles.errorMessage}>Неверный адрес почты</div>
            )}
        </div>
    );
};

export default CustomInput;
