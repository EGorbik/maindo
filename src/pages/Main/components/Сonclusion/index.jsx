import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import DarkButton from "../../../../components/DarkButton";
import Footer from "../../../../components/Footer";
import conclusion from "../../../../gif/conclusion.gif";

function Conclusion() {
    const navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <Container className={styles.container}>
                <Row style={{ paddingTop: 70 }}>
                    <Col className={styles.contentInfo}>
                        <h2 className={styles.title}>
                            Хотите получть консультацию у наших специалистов из
                            США?{" "}
                        </h2>
                        <div className={styles.subtitle}>
                            Ответьте на пару вопросов и наши специалисты
                            свяжуться с Вами!{" "}
                        </div>
                        <div className={styles.btnContainer}>
                            <DarkButton
                                handleClick={() => {
                                    navigate("/questionnaire");
                                }}
                                title="Пройти тест"
                                img="arrowRight.png"
                            />
                        </div>
                    </Col>

                    <Col className={styles.mainImg}>
                        <Fade bottom>
                            <img
                                alt="sdf"
                                className={styles.img}
                                src={conclusion}
                            />
                        </Fade>
                    </Col>
                </Row>

                <img alt="sdf" className={styles.mobileImg} src={conclusion} />

                <Footer />
            </Container>
        </div>
    );
}

export default Conclusion;
