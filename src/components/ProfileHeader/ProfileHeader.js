import React from "react";
import styles from "./ProfileHeader.module.css"
import { Icon } from "@iconify/react";
import { ProfileHighlight } from "../ProfileHighlight/ProfileHighlight";

export const ProfileHeader = () => {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.header}>
                <div className={styles.profile_image_container}>
                    <div className={styles.profile_image}>
                        <img src="https://placekitten.com/250/250" alt="Profile" />
                    </div>
                </div>
                <div className={styles.profile_details}>
                    <div className={styles.profile_details_header}>
                        <h1 className={styles.profile_details_username}>east2k</h1>
                        <button className={styles.profile_edit_button}>Edit profile</button>
                        <button className={styles.profile_settings_button}>
                            <Icon icon="ph:gear" width="30px" />
                        </button>
                    </div>
                    <div className={styles.profile_details_content}>
                        <p className={styles.user_posts}><span className={styles.amount}>0</span> posts</p>
                        <p className={styles.user_followers}><span className={styles.amount}>1500</span> followers</p>
                        <p className={styles.user_following}><span className={styles.amount}>777</span> following</p>
                    </div>
                    <div className={styles.profile_details_description}>
                        <p className={styles.profile_name}>Crest <span className={styles.profile_pronouns}>he/him/it</span></p>
                        <p className={styles.profile_user_about}>yeet</p>
                    </div>
                </div>
            </div>
            <ProfileHighlight />
        </header>
    )
}