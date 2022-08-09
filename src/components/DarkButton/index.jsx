import React from "react";
import styles from "./index.module.scss";
import arrowRightLight from "../../images/arrowRightLight.png";

const DarkButton = ({ title, handleClick }) => {
    return (
        <>
            <button onClick={handleClick} className={styles.connectBtn}>
                <div className={styles.connectText}>{title}</div>
                <img className={styles.connectImg} src={arrowRightLight} />
            </button>
        </>
    );
};

export default DarkButton;
