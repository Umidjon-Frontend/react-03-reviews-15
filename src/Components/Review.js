import React, { useState } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FcPrevious, FcNext } from "react-icons/fc";
import data from "../data";

function Review() {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = data[index];

    function handlePrevNextBtn(idx) {
        setIndex((index) => {
            let newIndex = index + idx;
            return checkNumber(newIndex);
        });
    }

    function checkNumber(number) {
        if (number > data.length - 1) {
            return 0;
        }
        if (number < 0) {
            return data.length - 1;
        }
        return number;
    }

    function randomUser() {
        let newRandomNumber = Math.floor(Math.random() * data.length);

        if (newRandomNumber === index) {
            newRandomNumber = index + 1;
        }
        setIndex(checkNumber(newRandomNumber));
    }

    return (
        <article className="review">
            <div className="img-container">
                <img src={image} alt={name} className="person-img" />
                <span className="quote-icon">
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className="author">{name}</h4>
            <p className="job">{job}</p>
            <p className="info">{text}</p>
            <div className="button-container">
                <button
                    className="prev-btn"
                    onClick={() => handlePrevNextBtn(-1)}
                >
                    <FcPrevious />
                </button>
                <button
                    className="next-btn"
                    onClick={() => handlePrevNextBtn(1)}
                >
                    <FcNext />
                </button>
            </div>
            <button className="random-btn" onClick={randomUser}>
                surprise me
            </button>
        </article>
    );
}

export default Review;
