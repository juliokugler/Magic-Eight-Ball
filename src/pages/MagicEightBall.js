import React, { useState } from 'react';
import styles from "./MagicEightBall.module.css";
import logo from '../assets/8ballLogo.png';

const MagicEightBall = () => {
    const [ballAnswer, setBallAnswer] = useState("");
    const [randomNumber, setRandomNumber] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [prevQuestion, setPrevQuestion] = useState(""); 

    const answers = [
        "Not in this lifetime.",
        "Sure, why not?",
        "Yeah, sure, buddy...",
        "Definitely!",
        "I'm on my lunch break, ask me again later.",
        "Not in a million years.",
        "Most likely",
        "Yes but, like, no...",
        "You bet!",
        "Are you out of your mind?",
        "Yes, when time is due, my child",
        "Why would you ask that to a ball?",
        "Yes, but be careful.",
        "Woah, haha, no.",
        "Signs point to yes.",
        "Ask a Crystal Ball.",
        "Focus and ask again.",
        "Cannot predict now.",
        "Yes, and you know it.",
        "Probably not, but who knows?",
        "Don't ever ask me this again.",
        "Yes, but only on tuesdays.",
        "Not really, but you can try...",
        "Hold your horses, cowboy.",
        "Sure, and that's an eight ball fact!"
    ];

    const getRandomNumber = (e) => {
        e.preventDefault();
        const newQuestion = e.target.elements.question.value.trim();

        if (newQuestion !== prevQuestion) {
            setIsLoading(true);
            setTimeout(() => {
                const number = Math.floor(Math.random() * 25);
                setRandomNumber(number);
                setBallAnswer(answers[number]);
                setPrevQuestion(newQuestion);
                setIsLoading(false);
            }, 2000);
        }
    };

    return (
        <section className={styles.container}>
            {isLoading && (
                <div className={styles.loaderWrapper}>
                    <div className={styles.loader}></div>
                </div>
            )}
            <img className={styles.logo} alt='8 ball' src={logo} />
            <section className={styles.questionPopup}>
                <h3>Ask any question!</h3>
                <form onSubmit={getRandomNumber}>
                    <input className={styles.questionInput} type="text" name="question" />
                    <button type="submit">Ask</button>
                </form>
                {!isLoading && (
                    <h2 className={`${styles.response} ${ballAnswer ? styles.visible : ''}`}>{ballAnswer}</h2>
                )}
            </section>
        </section>
    );
};

export default MagicEightBall;