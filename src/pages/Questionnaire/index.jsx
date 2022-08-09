import React, { useEffect, useState, useContext } from "react";
import styles from "./index.module.scss";
import { Container } from "react-bootstrap";
import MobileHeader from "../../components/MobileHeader";
import Footer from "../../components/Footer";
import MainContent from "./components/MainContent";
import Congratulation from "./components/Congratulation";
import { ContextApp } from "../../store/answers.reducer";
import Header from "../../components/Header/index";

const Questionnaire = () => {
    const [isOpenMobileHeader, setIsOpenMobileHeader] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const { state } = useContext(ContextApp);

    useEffect(() => {
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 200);
        if (isOpenMobileHeader) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }
    }, [isOpenMobileHeader]);

    const handleSendResult = () => {
        console.log(state.answers);
        setShowResult(true);

        //sendMetrik('complete', state.user.email);

        // return setDoc(doc(db, "answers", state.user.email), {
        //     user: { name: state.user.name, email: state.user.email},
        //     answers: state.answers
        //  });

        //     emailjs.send('service_htmjajn', 'template_8hti78o', {to_name:'Ignat', from_name: 'Igor', message:'me.com'}, 'z6zuyF3ikqdQxg2GK')
        //   .then((result) => {
        //       console.log(result.text);
        //   }, (error) => {
        //       console.log(error.text);
        //   });
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
