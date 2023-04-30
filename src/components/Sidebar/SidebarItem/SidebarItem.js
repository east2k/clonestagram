import React, { useState } from "react";
import styles from "./SidebarItem.module.css"
import { Icon } from '@iconify/react';

import profileImage from "../../../images/profile-images/user-profile.jpg"

export const SidebarItem = () => {
    const [activeMenu, setActiveMenu] = useState([
        {
            id: 0,
            labelName: "Home",
            iconLink: "material-symbols:home-outline",
            iconLinkActive: "material-symbols:home",
            currentActive: true
        }, {
            id: 1,
            labelName: "Search",
            iconLink: "clarity:search-line",
            iconLinkActive: "mingcute:search-2-fill",
            currentActive: false
        }, {
            id: 2,
            labelName: "Explore",
            iconLink: "material-symbols:explore-outline",
            iconLinkActive: "material-symbols:explore-rounded",
            currentActive: false
        }, {
            id: 3,
            labelName: "Reels",
            iconLink: "carbon:media-library",
            iconLinkActive: "carbon:media-library-filled",
            currentActive: false
        }, {
            id: 4,
            labelName: "Messages",
            iconLink: "ph:messenger-logo",
            iconLinkActive: "mdi:facebook-messenger",
            currentActive: false
        }, {
            id: 5,
            labelName: "Notifications",
            iconLink: "mdi:cards-heart-outline",
            iconLinkActive: "mdi:cards-heart",
            currentActive: false
        }, {
            id: 6,
            labelName: "Create",
            iconLink: "eva:plus-square-outline",
            iconLinkActive: "eva:plus-square-fill",
            currentActive: false
        }
    ])

    const handleChangeActiveClick = (index) => {
        setActiveMenu(prevActiveMenu => {
            return prevActiveMenu.map(menuItem => {
                return menuItem.id === index ?
                    { ...menuItem, currentActive: true } :
                    { ...menuItem, currentActive: false }

            })
        })
    }

    const newMenuList = activeMenu.map((item, index) => {
        return (
            <div
                key={index}
                className={`${styles.sidebar_content_item} ${item.currentActive ? styles.active : ""}`}
                onClick={() => handleChangeActiveClick(index)}
            >
                <div className={styles.sidebar_content_item_icon}>
                    <Icon icon={item.currentActive ? item.iconLinkActive : item.iconLink} width="25px" />
                </div>
                <p className={styles.sidebar_content_item_name}>{item.labelName}</p>
            </div>
        )
    })

    return (
        <>
            <div className={styles.sidebar_content_item_list}>
                {newMenuList}
                <div className={styles.sidebar_content_item}>
                    <div className={styles.sidebar_content_item_profile}>
                        <img src={profileImage} alt="Profile" />
                    </div>
                    <p className={styles.sidebar_content_item_name}>Profile</p>
                </div>
            </div>
        </>
    )
}
