import React, { useRef } from "react";
import styles from "./index.module.scss";
import CustomInput from "../CustomInput/CustomInput";
import profile from "../../../../images/profile.png";
import emailImg from "../../../../images/email.png";

const Introducing = ({
    name,
    email,
    setName,
    setEmail,
    handleNext,
    nameError,
    emailError,
}) => {
    const emailEl = useRef(null);

    return (
        <div>
            <div className={styles.title}>Добрый день!</div>
            <div className={styles.subtitle}>
                Прежде чем мы начнем покорять американский рынок, представьтесь,
                пожалуйста!
            </div>
            <div className={styles.inputContainer}>
                <CustomInput
                    nameError={nameError}
                    handleKeyPress={(key) =>
                        key === "Enter" && emailEl.current.focus()
                    }
                    value={name}
                    handleValue={setName}
                    title="Имя"
                    img={profile}
                />
            </div>

            <div className={styles.inputContainer}>
                <CustomInput
                    emailError={emailError}
                    handleKeyPress={(key) => key === "Enter" && handleNext()}
                    emailEl={emailEl}
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
