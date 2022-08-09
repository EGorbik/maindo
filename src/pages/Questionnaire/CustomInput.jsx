import React from "react";
import styles from "./index.module.scss";

const CustomInput = ({ img, title, value, handleValue }) => {
    return (
        <div>
            <div style={{ display: "flex", alignItems: "center" }}>
                <img
                    style={{ width: 20, height: 20, marginLeft: 5 }}
                    src={img}
                />
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
