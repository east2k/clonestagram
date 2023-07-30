import React from "react";
import styles from "./ProfileHighlight.module.css"
import { Icon } from '@iconify/react';

export const ProfileHighlight = () => {
    const highlightItems = ["https://placekitten.com/125/125", "https://placekitten.com/125/125"]

    return (
        <div className={styles.highlightContainer}>
            <div
                className={styles.highlightCard}
                style={{ backgroundImage: `url(${highlightItems[0]})` }}
            >
                <p className={styles.highlightText}>Hello</p>
            </div>
            <div
                className={styles.highlightCard}
            >
                <Icon className={styles.plusIcon} icon="ph:plus" />
            </div>
        </div>
    )
}