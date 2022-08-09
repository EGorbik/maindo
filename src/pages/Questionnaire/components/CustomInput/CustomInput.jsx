import React from "react";
import styles from "./index.module.scss";

const CustomInput = ({ img, title, value, handleValue }) => {
    return (
        <div>
            <div className={styles.wrapper}>
                <img className={styles.img} src={img} />
                <div className={styles.inputTitle}>{title}</div>
            </div>
            <input
                value={value}
                onChange={(e) => handleValue(e.target.value)}
                className={styles.customInput}
            />
        </div>
    );
};

export default CustomInput;
