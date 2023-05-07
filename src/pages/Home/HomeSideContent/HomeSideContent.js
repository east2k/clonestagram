import React from "react";
import styles from "./HomeSideContent.module.css"
import { HomeUserProfile } from "../../../components/HomeUserProfile/HomeUserProfile";
import { HomeOtherUser } from "../../../components/HomeOtherUser/HomeOtherUser";
import { HomeSideContentFooter } from "../../../components/HomeSideContentFooter/HomeSideContentFooter";

export const HomeSideContent = () => {
    const profilePic = [
        "https://placekitten.com/60/60"
    ]

    const sideProfile = [
        {
            pic: "https://placekitten.com/35/35",
            name: "Catty",
            description: "Followed by..."
        }, {
            pic: "https://placekitten.com/35/35",
            name: "Kitler",
            description: "Followed by..."
        }, {
            pic: "https://placekitten.com/35/35",
            name: "KitKat",
            description: "Followed by..."
        }, {
            pic: "https://placekitten.com/35/35",
            name: "Henlo",
            description: "Followed by..."
        }, {
            pic: "https://placekitten.com/35/35",
            name: "MeowMeow",
            description: "Followed by..."
        },
    ]

    const newOthers = sideProfile.map((item, index) => {
        return (
            <HomeOtherUser
                key={index}
                otherPic={item.pic}
                otherName={item.name}
                otherDescription={item.description}
            />
        )
    })
    return (
        <div className={styles.home_more}>
            <HomeUserProfile
                profilePic={profilePic[0]}
                profileName={"eastk2k"}
                profileTag={"Crest"}
                profileButton={"Switch"}
            />
            <div className={styles.home_suggestions}>
                <div className={styles.home_suggestions_header}>
                    <p className={styles.home_suggestion_header_text}>Suggested for you</p>
                    <p className={styles.home_suggestion_header_button}>See All</p>
                </div>
                <div className={styles.home_suggestions_body}>
                    {newOthers}
                </div>
            </div>
            <HomeSideContentFooter />
            <p className={styles.home_more_copyright}>&copy; 2023 INSTAGRAM FROM META</p>
        </div>
    )
}