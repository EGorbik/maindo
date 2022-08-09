import React from "react";
import styles from "./index.module.scss";

const Button = ({ text, empty, width, handleClick, bold }) => {
    return (
        <button
            onClick={handleClick}
            className={styles.btn}
            style={{
                backgroundColor: empty ? "white" : "#1B2B68",
                border: empty ? "1px solid #1B2B68" : "none",
                width,
                fontStyle: bold ? "GilroyBold" : "Gilroy",
            }}
        >
            <div style={{ color: empty ? "#1B2B68" : "white" }}>{text}</div>
        </button>
    );
};

export default Button;
