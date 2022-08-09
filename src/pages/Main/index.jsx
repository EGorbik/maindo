import React from "react";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import HowWork from "./components/HowWork";
import Conclusion from "./components/Сonclusion";
import { Element } from "react-scroll";
import styles from "./index.module.scss";

const Main = () => {
    return (
        <div className={styles.wrapper}>
            <Home />
            <Element name="whyAreWe" className="element">
                <AboutUs />
            </Element>
            <Element name="howWork" className="element">
                <HowWork />
            </Element>
            <Element name="conclusion" className="element">
                <Conclusion />
            </Element>
        </div>
    );
};

export default Main;
