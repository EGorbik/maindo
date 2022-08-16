import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-scroll";
import styles from "./index.module.scss";
import darkLogo from "../../images/darkLogo.png";
import telegramIcon from "../../images/telegramIcon.png";
import facebookIconGray from "../../images/grayFacebook.png";
import instagramIconGray from "../../images/grayInstagram.png";
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
                        <div
                            onClick={() =>
                                (window.location.href =
                                    "https://t.me/founderdad")
                            }
                            className={styles.snBtn}
                            styles={{ cursor: "pointer" }}
                        >
                            <img
                                className={styles.socialNetwork}
                                src={telegramIcon}
                            />
                        </div>
                        <div className={styles.snBtn}>
                            <img
                                className={styles.socialNetwork}
                                src={facebookIconGray}
                            />
                        </div>
                        <div className={styles.snBtn}>
                            <img
                                className={styles.socialNetwork}
                                src={instagramIconGray}
                            />
                        </div>
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
                <div
                    onClick={() =>
                        (window.location.href = "https://t.me/founderdad")
                    }
                    className={styles.snBtn}
                >
                    <img
                        className={styles.snLogo}
                        alt="telegram"
                        src={telegramIcon}
                    />
                </div>

                <div className={styles.snBtn}>
                    <img
                        className={styles.snLogo}
                        alt="facebook"
                        src={facebookIconGray}
                    />
                </div>

                <div className={styles.snBtn}>
                    <img
                        className={styles.snLogo}
                        alt="instagram"
                        src={instagramIconGray}
                    />
                </div>
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
