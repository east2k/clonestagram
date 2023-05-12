import React from "react";
import styles from "./PostCardHeader.module.css"
import { Icon } from "@iconify/react";

export const PostCardHeader = ({ profileName, profileImage, postLocation }) => {
    return (
        <div className={styles.post_header}>
            <div className={styles.post_header_image_container}>
                <img src={profileImage} alt="User" />
            </div>
            <div className={styles.post_header_details}>
                <div className={styles.post_header_details_name}>
                    <span className={styles.post_header_username}>{profileName}</span>
                    <span className={styles.post_header_time}>7h</span>
                </div>
                <div className={styles.post_header_details_location}>
                    <span>{postLocation}</span>
                </div>
            </div>
            <Icon className={styles.post_header_icon} icon="ph:dots-three-bold" width="25px" />
        </div>
    )
}