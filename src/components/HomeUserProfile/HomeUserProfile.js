import React from "react";
import styles from "./HomeUserProfile.module.css"

export const HomeUserProfile = ({ profilePic, profileName, profileTag, profileButton }) => {
    return (
        <div className={styles.home_user_profile}>
            <div className={styles.home_suggestion_profile_pic_container}>
                <img className={styles.home_suggestion_profile_pic} src={profilePic} alt="Profile" />
            </div>
            <div className={styles.home_user_profile_details}>
                <p className={styles.home_user_profile_username}>{profileName}</p>
                <p className={styles.home_user_profile_tagname}>{profileTag}</p>
            </div>
            <p className={styles.home_more_button}>{profileButton}</p>
        </div>
    )
}