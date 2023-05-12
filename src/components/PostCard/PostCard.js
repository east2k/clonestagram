import React, { memo } from "react";
import styles from "./PostCard.module.css"
import { PostCardHeader } from "./PostCardHeader/PostCardHeader";
import { PostCardBody } from "./PostCardBody/PostCardBody";


export const PostCard = memo(({
    postID,
    profileImage,
    profileName,
    postLocation,
    postImage,
    postLikes,
    postDescription,
    postCommentInput,
    handleCommentBoxChange }) => {
    console.log("rendered card", postID);

    return (
        <div className={styles.post_card}>
            <PostCardHeader
                profileName={profileName}
                profileImage={profileImage}
                postLocation={postLocation}
            />
            <div className={styles.post_content}>
                <img src={postImage} alt="Post" />
            </div>
            <PostCardBody
                postID={postID}
                profileName={profileName}
                postLikes={postLikes}
                postDescription={postDescription}
                postCommentInput={postCommentInput}
                handleCommentBoxChange={handleCommentBoxChange}
            />
        </div>
    )
})