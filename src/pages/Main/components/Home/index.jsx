import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Element } from "react-scroll";
import { useNavigate } from "react-router-dom";
import styles from "./index.module.scss";
import Header from "../../../../components/Header";
import MobileHeader from "../../../../components/MobileHeader/index";
import amazon from "../../../../images/amazon.png";
import walmart from "../../../../images/walmart.png";
import shopify from "../../../../images/shopify.png";
import ellipse from "../../../../images/ellipse.png";
import homeImg from "../../../../gif/homeImg.gif";
import Button from "../../../../components/Button/index";

const Home = () => {
    const [isOpenMobileHeader, setIsOpenMobileHeader] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (isOpenMobileHeader) {
            document.body.style.overflowY = "hidden";
        } else {
            document.body.style.overflowY = "auto";
        }
    }, [isOpenMobileHeader]);

    return (
        <div className={styles.wrapper}>
            {isOpenMobileHeader && (
                <MobileHeader
                    isOpenMobileHeader={isOpenMobileHeader}
                    setIsOpenMobileHeader={setIsOpenMobileHeader}
                />
            )}
            <Container className={styles.container}>
                <Header setIsOpenMobileHeader={setIsOpenMobileHeader} />
                <Row class="row align-items-end">
                    <Col>
                        <h1 className={styles.title}>
                            Мы открываем рынок США для каждого!
                        </h1>
                        <h1 className={styles.subtitle}>
                            Расскажи нам о своем продукте и мы
                            <div className={styles.bold}>
                                поможем твоему бизнессу !
                            </div>
                        </h1>
                        <div className={styles.btnMain}>
                            <Button
                                handleClick={() => navigate("/questionnaire")}
                                title="Пройти тест"
                                img="arrowRight.png"
                            />
                        </div>
                    </Col>
                    <Col
                        className={styles.mainImg}
                        style={{ position: "relative" }}
                    >
                        <img className={styles.mainImg} src={homeImg} />
                    </Col>
                </Row>

                <Row
                    className={styles.logoContainer}
                    style={{ margin: "70px auto 0 auto" }}
                >
                    <Col style={{ textAlign: "center" }}>
                        <img className={styles.companies} src={amazon} />
                    </Col>
                    <Col style={{ textAlign: "center" }}>
                        <img className={styles.companies} src={walmart} />
                    </Col>
                    <Col style={{ textAlign: "center" }}>
                        <img className={styles.companies} src={shopify} />
                    </Col>
                </Row>

                <Row>
                    <img className={styles.hiddenImg} src={homeImg} />
                </Row>

                <Element name="aboutUs" className="element">
                    <Row className={styles.achievementsBlock}>
                        <Col className={styles.achievementsItem}>
                            <div
                                style={{
                                    display: "inline",
                                    position: "relative",
                                    width: "10px",
                                }}
                            >
                                <div className={styles.digit}>+12 000 000</div>
                                <img className={styles.ellipse} src={ellipse} />
                            </div>
                            <div className={styles.achievementsSubtitle}>
                                Продажи более, чем на 12 млн. долларов в год
                            </div>
                        </Col>
                        <Col className={styles.achievementsItem}>
                            <div
                                style={{
                                    display: "inline",
                                    position: "relative",
                                }}
                            >
                                <div className={styles.digit}>+20 000</div>
                                <img className={styles.ellipse} src={ellipse} />
                            </div>
                            <div className={styles.achievementsSubtitle}>
                                Более 20 000 отзывов на Amazon
                            </div>
                        </Col>
                        <Col className={styles.achievementsItem}>
                            <div
                                style={{
                                    display: "inline",
                                    position: "relative",
                                }}
                            >
                                <div className={styles.digit}>+250</div>
                                <img className={styles.ellipse} src={ellipse} />
                            </div>
                            <div className={styles.achievementsSubtitle}>
                                Свыше 250 продуктов на платформах Amazon,
                                Shopify и Walmart
                            </div>
                        </Col>
                    </Row>
                </Element>
            </Container>
        </div>
    );
};

export default Home;
