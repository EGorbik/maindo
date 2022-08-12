import React, { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { Container } from "react-bootstrap";
import MobileHeader from "../../components/MobileHeader";
import Footer from "../../components/Footer";
import MainContent from "./components/MainContent";
import Congratulation from "./components/Congratulation";
import Header from "../../components/Header/index";

const Questionnaire = () => {
    const [isOpenMobileHeader, setIsOpenMobileHeader] = useState(false);
    const [showResult, setShowResult] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            //window.scrollTo(0, 0);
        }, 0);

        if (isOpenMobileHeader) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }
    }, [isOpenMobileHeader]);

    const handleSendResult = () => {
        setShowResult(true);
    };

    return (
        <div className={styles.wrapper}>
            {isOpenMobileHeader && (
                <MobileHeader
                    isOpenMobileHeader={isOpenMobileHeader}
                    setIsOpenMobileHeader={setIsOpenMobileHeader}
                />
            )}
            <Container className={styles.container}>
                <Header dark setIsOpenMobileHeader={setIsOpenMobileHeader} />
                {showResult ? (
                    <Congratulation />
                ) : (
                    <MainContent
                        isOpenMobileHeader={isOpenMobileHeader}
                        handleSendResult={handleSendResult}
                    />
                )}
                <Footer />
            </Container>
        </div>
    );
};

export default Questionnaire;
