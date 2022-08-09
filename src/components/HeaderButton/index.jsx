import React from "react";
import styles from "./index.module.scss";
import { COLORS } from "../../constants/colors";
import telegram from "../../images/telegram.png";
import telegramWhite from "../../images/telegramWhite.png";

const HeaderButton = ({ dark }) => {
    return (
        <div
            className={styles.connectBtn}
            style={{ backgroundColor: dark ? COLORS.darkBlue : COLORS.white }}
        >
            <div
                className={styles.connectText}
                style={{ color: dark ? COLORS.white : COLORS.darkBlue }}
            >
                Связаться с нами
            </div>
            <img
                className={styles.connectImg}
                src={dark ? telegramWhite : telegram}
            />
        </div>
    );
};

export default HeaderButton;
