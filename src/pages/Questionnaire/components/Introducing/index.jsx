import React from "react";
import styles from "./index.module.scss";
import CustomInput from "../CustomInput/CustomInput";
import profile from "../../../../images/profile.png";
import emailImg from "../../../../images/email.png";

const Introducing = ({ name, email, setName, setEmail }) => {
    return (
        <div>
            <div className={styles.title}>Добрый день!</div>
            <div className={styles.subtitle}>
                Прежде чем мы начнем покорять американский рынок, представьтесь,
                пожалуйста!
            </div>
            <div className={styles.inputContainer}>
                <CustomInput
                    value={name}
                    handleValue={setName}
                    title="Имя"
                    img={profile}
                />
            </div>

            <div className={styles.inputContainer}>
                <CustomInput
                    value={email}
                    handleValue={setEmail}
                    title="Email"
                    img={emailImg}
                />
            </div>
        </div>
    );
};

export default Introducing;
