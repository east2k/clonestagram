import React from "react";
import styles from "./Home.module.css"
import { HomeSideContent } from "./HomeSideContent/HomeSideContent";
import { HomeStorySlideshow } from "../../components/HomeStorySlideshow/HomeStorySlideshow";

export const Home = () => {
    return (
        <div className={styles.Home}>
            <div className={styles.home_content}>
                <HomeStorySlideshow />
                <div className={styles.home_content_body}></div>
            </div>
            <HomeSideContent />
        </div>
    )
}