import React, { useState } from "react";
import styles from "./index.module.scss";
import { Container, Row, Col } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Mousewheel } from "swiper";
import "swiper/css";
import { useSwiper } from "swiper/react";
import "./styles.css";
import acquaintance from "../../../../images/acquaintance.png";
import investigation from "../../../../images/investigation.png";
import registration from "../../../../images/registration.png";
import amazonIcon from "../../../../images/amazonIcon.png";
import launch from "../../../../images/launch.png";
import triangle from "../../../../images/triangle.png";
import advertis from "../../../../images/advertis.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SlideContent = ({ width, height, title, text, img }) => {
    return (
        <Row className={styles.slideWrapper}>
            <Col xs={6} md={5} className={styles.slideTitleContainer}>
                <img style={{ width, height }} src={img} />
                <h2 className={styles.steptitle}>{title}</h2>
            </Col>
            <Col xs={12} md={7}>
                <div className={styles.stepsubtitle}>{text}</div>
            </Col>
        </Row>
    );
};

const SlideContentMobile = ({ width, height, title, text, img }) => {
    return (
        <>
            <Row>
                <Col className={styles.slideTitleContainer}>
                    <img style={{ width, height }} src={img} />
                    <h2 className={styles.steptitle}>{title}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div className={styles.stepsubtitleMobile}>{text}</div>
                </Col>
            </Row>
        </>
    );
};

const Flipping = ({ swipeDirecion }) => {
    const swiper = useSwiper();
    if (swipeDirecion === "right") {
        swiper.slideNext(200);
    }

    if (swipeDirecion === "left") {
        swiper.slidePrev(200);
    }

    return (
        <button onClick={() => swiper.slideNext()}>
            Slide to the next slide
        </button>
    );
};

const HowWork = () => {
    const [nextClick, setNextClick] = useState(false);
    const [prevClick, setPrevClick] = useState(false);
    const [activeIndex, setActiveIndex] = useState(false);
    const [direction, setDirection] = useState("");

    return (
        <div className={styles.wrapper}>
            <Container className={styles.container}>
                <Fade bottom>
                    <Row className={styles.titleContainer}>
                        <Col xs={6} md={5}>
                            <h2 className={styles.title}>КАК МЫ РАБОТАЕМ</h2>
                        </Col>
                        <Col xs={12} md={7}>
                            <div className={styles.subtitle}>
                                “Конкуренты говорят, а мы научим!
                            </div>
                            <div className={styles.subtitle}>
                                Maindo - ваш ключевой агент по рынку США”
                            </div>
                        </Col>
                    </Row>
                    <div className={styles.line}></div>
                    <div className={styles.swiperContainers}>
                        <Swiper
                            slidesPerView={3}
                            direction={"horizontal"}
                            loop={false}
                            className="mySwiper"
                            style={{ height: 200 }}
                            mousewheel
                            modules={[Pagination, Mousewheel]}
                            onSlideChange={(e) => {
                                if (activeIndex > e.activeIndex) {
                                    setDirection("left");
                                } else {
                                    setDirection("right");
                                }
                                setActiveIndex(e.activeIndex);
                            }}
                        >
                            <SwiperSlide
                                className={styles.transparent}
                            ></SwiperSlide>
                            <SwiperSlide className={styles.transparent}>
                                <div className={styles.sliderTitle}>ШАГ 1</div>
                            </SwiperSlide>
                            <SwiperSlide className={styles.transparent}>
                                <div className={styles.sliderTitle}>ШАГ 2</div>
                            </SwiperSlide>
                            <SwiperSlide className={styles.transparent}>
                                <div className={styles.sliderTitle}>ШАГ 3</div>
                            </SwiperSlide>
                            <SwiperSlide className={styles.transparent}>
                                <div className={styles.sliderTitle}>ШАГ 4</div>
                            </SwiperSlide>
                            <SwiperSlide className={styles.transparent}>
                                <div className={styles.sliderTitle}>ШАГ 5</div>
                            </SwiperSlide>
                            <SwiperSlide className={styles.transparent}>
                                <div className={styles.sliderTitle}>ШАГ 6</div>
                            </SwiperSlide>
                            <SwiperSlide
                                className={styles.transparent}
                            ></SwiperSlide>
                        </Swiper>

                        <div className={styles.line}>
                            <img className={styles.triangle} src={triangle} />
                        </div>

                        <Swiper
                            direction={"vertical"}
                            loop={true}
                            className="mySwiper"
                            style={{ height: 220, marginTop: 20 }}
                        >
                            <Flipping
                                swipeDirecion={direction}
                                nextClick={nextClick}
                                prevClick={prevClick}
                                setNextClick={setNextClick}
                                isDuplicate={true}
                                setPrevClick={setPrevClick}
                            />
                            <SwiperSlide className={styles.verticalSlide}>
                                <SlideContent
                                    width={38}
                                    height={22}
                                    img={acquaintance}
                                    title="ЗНАКОМСТВО"
                                    text="Ознакомительный звонок: обсудить продукт, текущие результаты, цели при выходе на рынок США, юнит-экономику (маржу), переупаковку/ребрендинг для рынка США, конкурентную среду для продуктовой ниши, обсуждение интересующих маркетплейсов, систему роста, продуктовую диверсификацию , обсуждение юридических и логистических вопросов и, наконец, понимание того, как мы можем работать вместе"
                                />
                            </SwiperSlide>
                            <SwiperSlide className={styles.verticalSlide}>
                                <SlideContent
                                    width={38}
                                    height={38}
                                    img={investigation}
                                    title="ИССЛЕДОВАНИЕ"
                                    text="Исследования рынка"
                                />
                            </SwiperSlide>
                            <SwiperSlide className={styles.verticalSlide}>
                                <SlideContent
                                    width={34}
                                    height={34}
                                    img={registration}
                                    title="РЕГИСТРАЦИЯ"
                                    text="Cоздание юридического лица, регистрация товарного знака, открытие счета в банке"
                                />
                            </SwiperSlide>
                            <SwiperSlide className={styles.verticalSlide}>
                                <SlideContent
                                    width={38}
                                    height={38}
                                    img={amazonIcon}
                                    title="AMAZON"
                                    text="Создание аккаунта на amazon"
                                />
                            </SwiperSlide>
                            <SwiperSlide className={styles.verticalSlide}>
                                <SlideContent
                                    width={28}
                                    height={28}
                                    img={launch}
                                    title="ЗАПУСК"
                                    text="Ребрендинг, создание  страниц товаров на amazon , настройка трагетировнанной рекламы, проработка логистики, получение товара в сша, отправка на amazon"
                                />
                            </SwiperSlide>
                            <SwiperSlide className={styles.verticalSlide}>
                                <SlideContent
                                    width={38}
                                    height={38}
                                    img={advertis}
                                    title="РЕКЛАМА"
                                    text="Запустить  маркетинговую кампанию, устроить розыгрыши подарков, получить первые отзывы, создать репутацию бренда"
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </Fade>

                <div className={styles.mobileSwiper}>
                    <Swiper
                        pagination={true}
                        modules={[Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide className={styles.mobileSlide}>
                            <SlideContentMobile
                                width={38}
                                height={22}
                                img={acquaintance}
                                title="ЗНАКОМСТВО"
                                text="Ознакомительный звонок: обсудить продукт, текущие результаты, цели при выходе на рынок США, юнит-экономику (маржу), переупаковку/ребрендинг для рынка США, конкурентную среду для продуктовой ниши, обсуждение интересующих маркетплейсов, систему роста, продуктовую диверсификацию , обсуждение юридических и логистических вопросов и, наконец, понимание того, как мы можем работать вместе"
                            />
                        </SwiperSlide>
                        <SwiperSlide className={styles.mobileSlide}>
                            <SlideContentMobile
                                width={38}
                                height={38}
                                img={investigation}
                                title="ИССЛЕДОВАНИЕ"
                                text="Исследования рынка"
                            />
                        </SwiperSlide>
                        <SwiperSlide className={styles.mobileSlide}>
                            <SlideContentMobile
                                width={34}
                                height={34}
                                img={registration}
                                title="РЕГИСТРАЦИЯ"
                                text="Cоздание юридического лица, регистрация товарного знака, открытие счета в банке"
                            />
                        </SwiperSlide>
                        <SwiperSlide className={styles.mobileSlide}>
                            <SlideContentMobile
                                width={38}
                                height={38}
                                img={amazonIcon}
                                title="AMAZON"
                                text="Создание аккаунта на amazon"
                            />
                        </SwiperSlide>
                        <SwiperSlide className={styles.mobileSlide}>
                            <SlideContentMobile
                                width={28}
                                height={28}
                                img={launch}
                                title="ЗАПУСК"
                                text="Ребрендинг, создание  страниц товаров на amazon , настройка трагетировнанной рекламы, проработка логистики, получение товара в сша, отправка на amazon"
                            />
                        </SwiperSlide>
                        <SwiperSlide className={styles.mobileSlide}>
                            <SlideContentMobile
                                width={38}
                                height={38}
                                img={advertis}
                                title="РЕКЛАМА"
                                text="Запустить  маркетинговую кампанию, устроить розыгрыши подарков, получить первые отзывы, создать репутацию бренда"
                            />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </Container>
        </div>
    );
};

export default HowWork;
