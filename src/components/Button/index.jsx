import React, { useState } from "react";
import styles from "./index.module.scss";
import arrowRightDark from "../../images/arrowRightDark.png";
import arrowRightLight from "../../images/arrowRightLight.png";

const Button = ({ title, dark, handleClick }) => {
    const [isMouse, setMouse] = useState(false);

    const getArrowIcon = () => {
        if (dark && isMouse) {
            return arrowRightDark;
        } else if (dark && !isMouse) {
            return arrowRightLight;
        } else if (!dark && isMouse) {
            return arrowRightLight;
        } else if (!dark && !isMouse) {
            return arrowRightDark;
        }
    };

    return (
        <button
            onClick={handleClick}
            onMouseEnter={() => {
                setTimeout(() => {
                    setMouse(true);
                }, 200);
            }}
            onMouseLeave={() => {
                setTimeout(() => {
                    setMouse(false);
                }, 300);
            }}
            className={styles.connectBtn}
        >
            <div className={styles.connectText}>{title} </div>
            <img className={styles.connectImg} src={getArrowIcon()} />
        </button>
    );
};

export default Button;
