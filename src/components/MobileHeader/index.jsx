import React from "react";
import { Container } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
import styles from "./index.module.scss";
import darkLogo from "../../images/darkLogo.png";
import crossDark from "../../images/crossDark.png";
import telegramIcon from "../../images/telegramIcon.png";
import facebookIcon from "../../images/facebookIcon.png";
import instagramIcon from "../../images/instagramIcon.png";

function MobileHeader({ setIsOpenMobileHeader }) {
    return (
        <div className={styles.wrapper}>
            <Navbar collapseOnSelect expand="lg">
                <Container className={styles.container}>
                    <Navbar.Brand>
                        <img
                            className={styles.logo}
                            alt="logo"
                            src={darkLogo}
                        />
                    </Navbar.Brand>
                    <img
                        className={styles.burger}
                        onClick={() => setIsOpenMobileHeader(false)}
                        alt="burger"
                        src={crossDark}
                    />
                </Container>
                <div className={styles.navbar}>
                    <Link
                        onClick={() => setIsOpenMobileHeader(false)}
                        to="aboutUs"
                        spy
                        smooth
                        offset={0}
                        delay={0}
                        duration={100}
                    >
                        <div className={styles.title}>О нас</div>
                    </Link>
                    <div className={styles.line} />
                    <Link
                        onClick={() => setIsOpenMobileHeader(false)}
                        to="whyAreWe"
                        spy
                        smooth
                        offset={0}
                        delay={0}
                        duration={100}
                    >
                        <div className={styles.title}>Почему мы</div>
                    </Link>
                    <div className={styles.line} />
                    <Link
                        onClick={() => setIsOpenMobileHeader(false)}
                        to="howWork"
                        spy
                        smooth
                        offset={0}
                        delay={0}
                        duration={100}
                    >
                        <div className={styles.title}>Как мы работаем</div>
                    </Link>
                </div>
            </Navbar>
            <div className={styles.footer}>
                <div className={styles.footerTitle}>
                    Получи консультацию прямо сейчас!
                </div>
                <div className={styles.socialNetworksContainer}>
                    <img
                        className={styles.snLogo}
                        alt="telegram"
                        src={telegramIcon}
                    />
                    <img
                        className={styles.snLogo}
                        alt="facebook"
                        src={facebookIcon}
                    />
                    <img
                        className={styles.snLogo}
                        alt="instagram"
                        src={instagramIcon}
                    />
                </div>
            </div>
        </div>
    );
}

export default MobileHeader;
