import React from "react";
import Fade from "react-reveal/Fade";
import styles from "./index.module.scss";

function Post({ number, title, text }) {
    return (
        <Fade bottom>
            <div className={styles.wrapper}>
                <div className={styles.number}>{number}</div>
                <div className={styles.postTitle}>{title}</div>
                <div className={styles.text}>{text}</div>
            </div>
        </Fade>
    );
}

export default Post;
