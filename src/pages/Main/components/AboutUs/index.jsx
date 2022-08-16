import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./index.module.scss";
import Post from "./components/Post";
import aboutImg from "../../../../images/aboutImg.png";

function AboutUs() {
    return (
        <div className={styles.wrapper}>
            <Container className={styles.container}>
                <Row className={styles.titleContainer}>
                    <Col className={styles.titleText} xs={12} md={2}>
                        <h2 className={styles.title}>ПОЧЕМУ МЫ</h2>
                    </Col>
                    <Col xs={10} md={9}>
                        <p className={styles.text}>
                            MAINDO - это платaтформа, созданная
                            предпринимателями из США, и помогающая российским
                            бизнесменам выйти на американский рынок e-commerce.
                            Мы поможем вам успешно запустить и развивать свой
                            бизнес на площадках Amazon, Walmart и Shopify.
                        </p>
                    </Col>
                </Row>

                <Row className={styles.blockContainer}>
                    <Col className={styles.imgContainer} xs={6} md={4}>
                        <img
                            alt="aboutImg"
                            className={styles.mainImg}
                            src={aboutImg}
                        />
                    </Col>

                    <Col xs={12} md={8}>
                        <Post
                            number="01"
                            title="Индивидуальный подход"
                            text="MAINDO - это не видео курсы и техническая поддержка, это личное общение с создателями проекта, индивидуальный подход и ведение вашего бренда на американском онлайн рынке."
                        />
                        <div>
                            <Post
                                number="02"
                                title="Лично участвуем в развитии вашего бизнеса"
                                text="Мы откроем и оформим ваш магазин, организуем прием товара из любой точки мира, выстроим логистику его отправки на склад. С нашей технологией ваш магазин быстро наберет отзывы настоящих покупателей. Вместо введения в основы и теорию, мы ведем ваш бизнес в США; администрируем ваши аккаунты Amazon, Shopify и Walmart; масштабируем бренд; правильно и качественно настраиваем рекламу, продвигаем ваш товар через Google ads, Facebook, TikTok и коллаборацию с блогерами."
                            />
                        </div>

                        <Post
                            number="03"
                            title="Работаем по собственной системе"
                            text="Благодаря опыту более пяти лет в развитии с нуля нескольких компаний, мы разработали собственную систему ведения таких бизнесов. Теория и подходы, которые предлагают наши конкуренты во многом устарели и являются неактуальными. Мы же используем не только основы, но и прогрессивные методы, отвечающие обновлениям и трендам онлайн рынков."
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutUs;
