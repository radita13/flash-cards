import { useState } from "react";
import flashCard from "../data/question.json";
import { FlashCardProgress } from "./FlashCardProggres";
import { Flashcard } from "./Flashcard";

export const FlashCardContainer = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isonFlip, setIsonFlip] = useState(true);

    const handleNextClick = () => {
        setCurrentIndex((nextIndex) => (nextIndex + 1) % flashCard.length);
        setIsonFlip(true);
    }

    const handlePreviousClick = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + flashCard.length) % flashCard.length);
        setIsonFlip(true);
    }

    const handleFlip = () => {
        setIsonFlip((flip) => !flip);
    }

    return (
        <div>
            <h1 className="title">Flash Cards</h1>
            <FlashCardProgress currentIndex={currentIndex} totalCards={flashCard.length} />
            <div className="flashcard-container">
                <Flashcard
                    question={flashCard[currentIndex].question}
                    answer={flashCard[currentIndex].answer}
                    onFlip={isonFlip}
                    backFlip={handleFlip}
                />
                <div className="controls">
                    <div className="previous" onClick={handlePreviousClick}>
                        <span>&lt; Previous</span>
                    </div>
                    <button className="flip" onClick={handleFlip}>{isonFlip ? "Hide Answer" : "Show Answer"}</button>
                    <div className="next" onClick={handleNextClick}>
                        <span>Next &gt;</span>
                    </div>
                </div>
            </div>
        </div>
    )
}