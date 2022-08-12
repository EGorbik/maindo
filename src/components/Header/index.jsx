import React from "react";
import styles from "./index.module.scss";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-scroll";
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
                            <Link
                                onClick={() => navigate("/")}
                                to="aboutUs"
                                spy={true}
                                smooth={true}
                                offset={-300}
                                delay={0}
                                duration={100}
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
                            </Link>
                            <Link
                                to="whyAreWe"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                delay={0}
                                duration={100}
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
                            </Link>
                            <Link
                                to="howWork"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                delay={0}
                                duration={100}
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
                            </Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="https://web.telegram.org/?legacy=1#/im?p=@founderdad">
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
