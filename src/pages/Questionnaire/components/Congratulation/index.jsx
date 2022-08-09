import React, { useContext, useEffect } from "react";
import { ContextApp } from "../../../../store/answers.reducer";
import bulb from "../../../../gif/bulb.gif";
import { sendMetrik } from "../../../../utils/metriks";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../../../../services/firestore";
import emailjs from "@emailjs/browser";
import { convertAnswer } from "../../../../utils/convertAnswers";

const Congratulation = () => {
    const { state, dispatch } = useContext(ContextApp);

    useEffect(() => {
        setDoc(doc(db, "answers", state.user.email), {
            user: { name: state.user.name, email: state.user.email },
            answers: state.answers,
        });

        sendMetrik("complete", state.user.email);

        let emailTemplate = {
            name: state.user.name,
            email: state.user.email,
        };
        for (let i = 1; i < 15; i++) {
            console.log(i - 1);
            console.log(state.answers[i - 1]);
            emailTemplate["answer" + i] = convertAnswer(
                i,
                state.answers[i - 1].answer
            );
        }
        emailjs
            .send(
                "service_htmjajn",
                "template_8hti78o",
                emailTemplate,
                "z6zuyF3ikqdQxg2GK"
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );

        return () => {
            dispatch({ type: "CLEAN_ANSWERS" });
        };
    }, []);

    return (
        <div
            style={{
                height: "80vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <div
                style={{
                    fontFamily: "GilroyBold",
                    color: "#1B2B68",
                    fontSize: 20,
                    textAlign: "center",
                }}
            >
                УРА! Вы прошли тест!
            </div>
            <div
                style={{
                    fontFamily: "Gilroy",
                    color: "#1B2B68",
                    fontSize: 20,
                    textAlign: "center",
                    marginTop: 30,
                }}
            >
                По результатм теста, Вы готовы стать предпринимателем на
            </div>
            <div
                style={{
                    fontFamily: "GilroyBold",
                    color: "#1B2B68",
                    fontSize: 30,
                    textAlign: "center",
                }}
            >
                {state.finalRating} %!
            </div>
            <img
                style={{
                    width: "14%",
                    margin: "0 auto",
                    display: "block",
                    marginTop: 50,
                }}
                src={bulb}
            />
            <div
                style={{
                    fontFamily: "GilroyBold",
                    color: "#1B2B68",
                    fontSize: 18,
                    textAlign: "center",
                    marginTop: 70,
                }}
            >
                У вас есть все шансы создать успешный бизнес на американском
                рынке, а мы с удовольствием поможем вам!
            </div>
        </div>
    );
};
export default Congratulation;
