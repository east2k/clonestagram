import React from "react";
import styles from "./ProfileBody.module.css";
import { Icon } from "@iconify/react";

export const ProfileBody = () => {
    const postImages = [
        "https://placekitten.com/1280/1280",
        "https://placekitten.com/1280/1280",
        "https://placekitten.com/1280/1280",
        "https://placekitten.com/1280/1280",
        "https://placekitten.com/1280/1280",
        "https://placekitten.com/1280/1280",
        "https://placekitten.com/1280/1280",
    ];

    const handlePostClick = () => {
        console.log("clciked");
    };

    const postElement = postImages.map((post) => {
        return (
            <div className={styles.post_container} onClick={handlePostClick}>
                <img src={post} alt="Post" />
            </div>
        );
    });

    return (
        <div className={styles.Profile}>
            <div className={styles.body_menu}>
                <div className={`${styles.body_menu_option} ${styles.active}`}>
                    <Icon icon="mdi:grid" />
                    <span>POSTS</span>
                </div>
                <div className={styles.body_menu_option}>
                    <Icon icon="majesticons:bookmark-line" />
                    <span>SAVED</span>
                </div>
                <div className={styles.body_menu_option}>
                    <Icon icon="streamline:interface-user-profile-focus-close-geometric-human-person-profile-focus-user" />
                    <span>TAGGED</span>
                </div>
            </div>
            <div className={styles.body_content}>
                <div className={styles.content_grid}>{postElement}</div>
            </div>
            <div className={styles.active_post}></div>
        </div>
    );
};
