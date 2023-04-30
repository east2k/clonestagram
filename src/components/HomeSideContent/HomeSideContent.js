import React from "react";
import styles from "./HomeSideContent.module.css"

export const HomeSideContent = () => {
    return (
        <div className={styles.home_more}>
            <div className={styles.home_user_profile}>
                <img className={styles.home_suggestion_profile_pic} />
                <div className={styles.home_user_profile_details}>
                    <p className={styles.home_user_profile_username}></p>
                    <p className={styles.home_user_profile_tagname}></p>
                </div>
                <p className={styles.home_more_button}></p>
            </div>
            <div className={styles.home_suggestions}>
                <div className={styles.home_suggestions_header}>
                    <p></p>
                    <p></p>
                </div>
                <div className={styles.home_suggestions_body}>
                    <div className={styles.home_suggestion_other_user}>
                        <img className={styles.home_suggestion_other_user_pic} />
                        <div className={styles.home_user_other_user_details}>
                            <p className={styles.home_user_other_user_username}></p>
                            <p className={styles.home_user_other_user_tagname}></p>
                        </div>
                        <p className={styles.home_more_button}></p>
                    </div>
                </div>
            </div>
            <div className={styles.home_more_about}>
                <span></span>
            </div>
            <p className={styles.home_more_copyright}></p>
        </div>
    )
}