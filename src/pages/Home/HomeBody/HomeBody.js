import React, { useState, useCallback } from "react";
import styles from "./HomeBody.module.css"
import { PostCard } from "../../../components/PostCard/PostCard";

export const HomeBody = () => {
    const [userDetails, setUserDetails] = useState([
        {
            postID: 1,
            profileImage: "https://placekitten.com/45/45",
            profileName: "east2k",
            postLocation: "Baguio City",
            postImage: "https://placekitten.com/450/450",
            postLikes: ["Catty"],
            postDescription: "Some Text Here",
            postCommentInput: ""
        },
        {
            postID: 2,
            profileImage: "https://placekitten.com/40/40",
            profileName: "ahhhh",
            postLocation: "Baguio City",
            postImage: "https://placekitten.com/400/400",
            postLikes: ["Catty"],
            postDescription: "Some Text Here",
            postCommentInput: ""
        },
        {
            postID: 3,
            profileImage: "https://placekitten.com/50/50",
            profileName: "lolololol",
            postLocation: "Baguio City",
            postImage: "https://placekitten.com/500/500",
            postLikes: ["Catty"],
            postDescription: "Some Text Here",
            postCommentInput: ""
        }
    ])
    console.log("rendered home");


    const handleCommentBoxChange = useCallback((event, id) => {
        setUserDetails((prevUserDetails) => {
            return prevUserDetails.map((item) => {
                return id === item.postID ? { ...item, postCommentInput: event.target.value } : item;
            });
        });
    }, []);

    const newPostCardElements = userDetails.map((item) => {
        return (
            <PostCard
                key={item.postID}
                postID={item.postID}
                profileImage={item.profileImage}
                profileName={item.profileName}
                postLocation={item.postLocation}
                postImage={item.postImage}
                postLikes={item.postLikes}
                postDescription={item.postDescription}
                postCommentInput={item.postCommentInput}
                handleCommentBoxChange={handleCommentBoxChange}
            />
        )
    })
    return (
        <div className={styles.home_content_body}>
            {newPostCardElements}
        </div>
    )
}