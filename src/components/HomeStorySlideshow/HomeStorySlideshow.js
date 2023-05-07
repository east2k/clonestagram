import React, { useState } from "react";
import styles from "./HomeStorySlideshow.module.css"
import { Icon } from "@iconify/react";

export const HomeStorySlideshow = () => {

    const [slidePos, setSlidePos] = useState(0);

    const storyImages = [
        "https://placekitten.com/70/60",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/75",
    ];

    const newImageElements = storyImages.map((item, index) => {
        return (
            <div
                key={index}
            >
                <div
                    className={styles.story_profile_image_container}
                >
                    <img src={item} alt="Cat"/>
                </div>
                <p className={styles.story_profile_name}>Cat {index}</p>
            </div>
        )
    })

    const newWidth = storyImages.length * 75;

    const handleSlideshowClick = (placement) => {
        setSlidePos(prevSlidePos => {
            if (placement === "left") {
                return prevSlidePos += 20
            } else {
                return prevSlidePos -= 20
            }
        })
    }

    return (
        <div className={styles.home_content_story_slideshow_container}>
            <button
                onClick={() => handleSlideshowClick("left")}
                className={styles.slideshow_icons + " " + styles.left}
            >
                <Icon icon="material-symbols:arrow-back-ios-new-rounded" width="13px" />
            </button>
            <div className={styles.home_content_story_slideshow} style={{ width: newWidth, left: `${slidePos}%` }}>
                {newImageElements}
            </div>
            <button
                onClick={() => handleSlideshowClick("right")}
                className={styles.slideshow_icons + " " + styles.right}
            >
                <Icon icon="material-symbols:arrow-forward-ios-rounded" width="13px" />
            </button>
        </div>
    )
}