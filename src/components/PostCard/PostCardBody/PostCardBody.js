import React, { memo } from "react";
import styles from "./PostCardBody.module.css"
import { Icon } from "@iconify/react";

export const PostCardBody = memo(({
    postID,
    profileName,
    postLikes,
    postDescription,
    postCommentInput,
    handleCommentBoxChange }) => {
    console.log("rendered body", postID);

    return (
        <div className={styles.post_body}>
            <div className={styles.post_body_icons}>
                <button className={styles.button_icon}>
                    <Icon icon="mdi:cards-heart-outline" width="25" color="white" />
                </button>
                <button className={styles.button_icon}>
                    <Icon icon="iconamoon:comment" width="25" color="white" />
                </button>
                <button className={styles.button_icon}>
                    <Icon icon="system-uicons:paper-plane-alt" width="25" color="white" />
                </button>
                <button className={`${styles.button_icon} ${styles.bookmark}`} >
                    <Icon icon="material-symbols:bookmark-outline" width="25" color="white" />
                </button>
            </div>
            <p className={styles.post_body_details}>Liked by {postLikes[0]} and others</p>
            <div className={styles.post_body_description}>
                <span className={styles.post_body_username}>{profileName}</span>
                <p>{postDescription}</p>
            </div>
            <div className={styles.post_body_comment_box}>
                <textarea
                    className={styles.comment_box_input}
                    placeholder="Add a comment..."
                    value={postCommentInput}
                    onChange={(event) => handleCommentBoxChange(event, postID)}
                />
                <div></div>
                <button className={styles.comment_box_button}>Post</button>
                <button className={styles.emoji_button}>
                    <Icon icon="ic:outline-emoji-emotions" width="15" />
                </button>
            </div>
        </div>
    )
})