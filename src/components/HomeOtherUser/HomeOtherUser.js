import React from "react";
import styles from "./HomeOtherUser.module.css"

export const HomeOtherUser = ({ otherPic, otherName, otherDescription }) => {
    return (
        <div className={styles.home_suggestion_other_user}>
            <div className={styles.home_suggestion_other_user_pic_container}>
                <img className={styles.home_suggestion_other_user_pic} src={otherPic} alt="Profile" />
            </div>
            <div className={styles.home_user_other_user_details}>
                <p className={styles.home_user_other_user_username}>{otherName}</p>
                <p className={styles.home_user_other_user_description}>{otherDescription}</p>
            </div>
            <p className={styles.home_more_button}>Follow</p>
        </div>
    )
}