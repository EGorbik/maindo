import React from "react";
import styles from "./index.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import * as Scroll from "react-scroll";
import { useNavigate } from "react-router-dom";
import HeaderButton from "../HeaderButton/index";
import { COLORS } from "../../constants/colors";
import logo from "../../images/logo.png";
import logoDark from "../../images/logoDark.png";
import burgerDark from "../../images/burgerDark.png";
import burger from "../../images/burger.png";

const Header = ({ setIsOpenMobileHeader, dark }) => {
    let navigate = useNavigate();

    return (
        <div className={styles.wrapper}>
            <Navbar collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand onClick={() => navigate("/")}>
                        <img
                            className={styles.logo}
                            alt="logo"
                            src={dark ? logoDark : logo}
                        />
                    </Navbar.Brand>

                    <img
                        className={styles.burger}
                        onClick={() => setIsOpenMobileHeader(true)}
                        alt="burger"
                        src={dark ? burgerDark : burger}
                    />

                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className={styles.navContainer + " me-auto"}>
                            <div
                                onClick={() => {
                                    navigate("/");
                                    setTimeout(() => {
                                        Scroll.scroller.scrollTo("aboutUs", {
                                            duration: 100,
                                            delay: 0,
                                            smooth: true,
                                            offset: -300,
                                        });
                                    });
                                }}
                            >
                                <div
                                    className={styles.navItem}
                                    style={{
                                        color: dark
                                            ? COLORS.darkBlue
                                            : COLORS.white,
                                    }}
                                >
                                    О нас
                                </div>
                            </div>
                            <div
                                onClick={() => {
                                    navigate("/");
                                    setTimeout(() => {
                                        Scroll.scroller.scrollTo("whyAreWe", {
                                            duration: 100,
                                            delay: 0,
                                            smooth: true,
                                            offset: -70,
                                        });
                                    });
                                }}
                            >
                                <div
                                    className={styles.navItem}
                                    style={{
                                        color: dark
                                            ? COLORS.darkBlue
                                            : COLORS.white,
                                    }}
                                >
                                    Почему мы
                                </div>
                            </div>
                            <div
                                onClick={() => {
                                    navigate("/");
                                    setTimeout(() => {
                                        Scroll.scroller.scrollTo("howWork", {
                                            duration: 100,
                                            delay: 0,
                                            smooth: true,
                                            offset: -70,
                                        });
                                    });
                                }}
                            >
                                <div
                                    className={styles.navItem}
                                    style={{
                                        color: dark
                                            ? COLORS.darkBlue
                                            : COLORS.white,
                                    }}
                                >
                                    Как мы работаем
                                </div>
                            </div>
                        </Nav>
                        <Nav>
                            <Nav.Link href="https://t.me/founderdad">
                                <HeaderButton
                                    dark={dark}
                                    img={
                                        dark
                                            ? "telegramWhite.png"
                                            : "telegram.png"
                                    }
                                />
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;
