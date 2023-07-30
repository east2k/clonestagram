import React from "react";
import styles from "./ProfileBody.module.css"
import { Icon } from '@iconify/react';


export const ProfileBody = () => {
    const postImages = ["https://placekitten.com/1280/1280", "https://placekitten.com/1280/1280"]
    return (
        <div className={styles.ProfileBody}>
            <div className={styles.bodyMenu}>
                <div className={`${styles.bodyMenuOption} ${styles.active}`}>
                    <Icon icon="mdi:grid" />
                    <span>POSTS</span>
                </div>
                <div className={styles.bodyMenuOption}>
                    <Icon icon="majesticons:bookmark-line" />
                    <span>SAVED</span>
                </div>
                <div className={styles.bodyMenuOption}>
                    <Icon icon="streamline:interface-user-profile-focus-close-geometric-human-person-profile-focus-user" />
                    <span>TAGGED</span>
                </div>
            </div>
            <div className={styles.bodyContent}>
                <div className={styles.contentGrid}>
                    <div className={styles.postContainer}>
                        <img src={postImages[0]} alt="Post" />
                    </div>
                    <div className={styles.postContainer}>
                        <img src={postImages[0]} alt="Post" />
                    </div>
                    <div className={styles.postContainer}>
                        <img src={postImages[0]} alt="Post" />
                    </div>
                    <div className={styles.postContainer}>
                        <img src={postImages[0]} alt="Post" />
                    </div>
                </div>
            </div>
        </div>
    )
}