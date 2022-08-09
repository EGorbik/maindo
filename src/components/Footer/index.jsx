import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import styles from "./index.module.scss";
import darkLogo from "../../images/darkLogo.png";
import telegramIcon from "../../images/telegramIcon.png";
import facebookIcon from "../../images/facebookIcon.png";
import instagramIcon from "../../images/instagramIcon.png";
import copyright from "../../images/copyright.png";

function Footer() {
    return (
        <div className={styles.wrapper}>
            <Row>
                <Col xs={6} md={4} className={styles.footerBlock}>
                    <img alt="test" className={styles.logo} src={darkLogo} />
                    <div className={styles.footerText}>
                        MAINDO - это платaтформа, созданная предпринимателями из
                        США, и помогающая российским бизнесменам выйти на
                        американский рынок e-commerce
                    </div>
                </Col>
                <Col xs={6} md={1} />
                <Col className={styles.footerNav} xs={8} md={4}>
                    <Link
                        activeClass="active"
                        to="aboutUs"
                        spy
                        smooth
                        offset={-300}
                        delay={0}
                        duration={100}
                    >
                        <div className={styles.link}>О нас</div>
                    </Link>
                    <Link
                        activeClass="active"
                        to="whyAreWe"
                        spy
                        smooth
                        offset={-100}
                        delay={0}
                        duration={100}
                    >
                        <div className={styles.link} style={{ marginTop: 25 }}>
                            Почему мы
                        </div>
                    </Link>
                    <Link
                        activeClass="active"
                        to="howWork"
                        spy
                        smooth
                        offset={-100}
                        delay={0}
                        duration={100}
                    >
                        <div className={styles.link} style={{ marginTop: 25 }}>
                            Как мы работаем
                        </div>
                    </Link>
                </Col>
                <Col className={styles.footerNav} xs={6} md={3}>
                    <div className={styles.footerBoldText}>
                        Получи консультацию прямо сейчас!
                    </div>
                    <div
                        style={{
                            display: "flex",
                            width: "40%",
                            justifyContent: "space-between",
                            margin: "24px auto 0 auto",
                        }}
                    >
                        <button
                            className={styles.snBtn}
                            type="button"
                            onClick={() => alert("telegram")}
                        >
                            <img
                                alt="sdf"
                                className={styles.socialNetwork}
                                src={telegramIcon}
                            />
                        </button>
                        <button
                            className={styles.snBtn}
                            type="button"
                            onClick={() => alert("telegram")}
                        >
                            <img
                                alt="sdf"
                                className={styles.socialNetwork}
                                src={facebookIcon}
                            />
                        </button>
                        <button
                            className={styles.snBtn}
                            type="button"
                            onClick={() => alert("telegram")}
                        >
                            <img
                                alt="sdf"
                                className={styles.socialNetwork}
                                src={instagramIcon}
                            />
                        </button>
                    </div>
                </Col>
            </Row>
            <div className={styles.footerTextHidden}>
                MAINDO - это платaтформа, созданная предпринимателями из США, и
                помогающая российским бизнесменам выйти на американский рынок
                e-commerce
            </div>
            <div className={styles.footerBoldTextMobile}>
                Получи консультацию прямо сейчас!
            </div>
            <div className={styles.socialNetworksContainer}>
                <button
                    className={styles.snBtn}
                    type="button"
                    onClick={() => alert("telegram")}
                >
                    <img
                        className={styles.snLogo}
                        alt="telegram"
                        src={telegramIcon}
                    />
                </button>

                <button
                    className={styles.snBtn}
                    type="button"
                    onClick={() => alert("telegram")}
                >
                    <img
                        className={styles.snLogo}
                        alt="facebook"
                        src={facebookIcon}
                    />
                </button>

                <button
                    className={styles.snBtn}
                    type="button"
                    onClick={() => alert("telegram")}
                >
                    <img
                        className={styles.snLogo}
                        alt="instagram"
                        src={instagramIcon}
                    />
                </button>
            </div>
            <div className={styles.line} />
            <div className={styles.bottom}>
                <img alt="sdf" className={styles.copyright} src={copyright} />
                <div className={styles.copyrightText}>
                    All rights reserved, 2022
                </div>
            </div>
        </div>
    );
}

export default Footer;
