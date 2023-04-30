import React from "react";
import styles from "./HomeStorySlideshow.module.css"
import { Icon } from "@iconify/react";

export const HomeStorySlideshow = () => {
    const storyImages = [
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
        "https://placekitten.com/70/70",
        "https://placekitten.com/70/70",
    ];

    const newImageElements = storyImages.map((item, index) => {
        return (
            <div
                key={index}
                className={styles.story_profile_image_container}
            >
                <img src={item} />
            </div>
        )
    })

    const newWidth = storyImages.length * 75;

    return (
        <div className={styles.home_content_story_slideshow_container}>
            <div className={styles.slideshow_icons + " " + styles.left}>
                <Icon icon="material-symbols:arrow-back-ios-new-rounded" width="13px" />
            </div>
            <div className={styles.home_content_story_slideshow} style={{ width: newWidth }}>
                {newImageElements}
            </div>
            <div className={styles.slideshow_icons + " " + styles.right}>
                <Icon icon="material-symbols:arrow-forward-ios-rounded" width="13px" />
            </div>
        </div>
    )
}