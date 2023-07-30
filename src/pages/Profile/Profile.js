import React from "react";
import styles from "./Profile.module.css"
import { ProfileHeader } from "../../components/ProfileHeader/ProfileHeader";
import { ProfileBody } from "../../components/ProfileBody/ProfileBody";
import { ProfileFooter } from "../../components/ProfileFooter/ProfileFooter";

export const Profile = () => {
    return (
        <div className={styles.Profile}>
            <ProfileHeader />
            <ProfileBody />
            <ProfileFooter />
        </div>
    )
}