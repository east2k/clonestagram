import React from "react";
import styles from "./HamburgerMenu.module.css"
import { Icon } from '@iconify/react';

export const HamburgerMenu = ({ toggleMenu }) => {
    const activeMenu = [
        {
            labelName: "Settings",
            iconLink: "ph:gear"
        }, {
            labelName: "You activity",
            iconLink: "fluent:shifts-activity-20-regular"
        }, {
            labelName: "Saved",
            iconLink: "material-symbols:bookmark-outline-sharp"
        }, {
            labelName: "Switch appearance",
            iconLink: "octicon:moon-24"
        }, {
            labelName: "Report a problem",
            iconLink: "mdi:comment-warning-outline"
        }
    ]

    const newMenuList = activeMenu.map((item, index) => {
        return (
            <div
                key={index}
                className={styles.hamburger_menu_content_item}
            >
                <div className={styles.hamburger_menu_content_container}>
                    <div className={styles.hamburger_menu_content_item_icon}>
                        <Icon icon={item.iconLink} width="20px" />
                    </div>
                    <p className={styles.hamburger_menu_content_item_name}>{item.labelName}</p>
                </div>
                <Icon icon="ic:sharp-keyboard-arrow-right" color="gray" />
            </div>
        )
    })

    return (
        <div
            className={`${styles.hamburger_menu_container} ${toggleMenu ? styles.toggle : ""}`}
        >
            {newMenuList}
            <div className={styles.hamburder_menu_separator}></div>
            <div className={styles.hamburger_menu_content_item}>
                <div className={styles.hamburger_menu_content_container}>
                    <p className={`${styles.hamburger_menu_content_item_name} ${styles.switch}`}>Switch accounts</p>
                </div>
                <Icon icon="ic:sharp-keyboard-arrow-right" color="gray" />
            </div>
            <div className={`${styles.hamburder_menu_separator} ${styles.thin}`}></div>
            <div className={styles.hamburger_menu_content_item}>
                <div className={styles.hamburger_menu_content_container}>
                    <p className={`${styles.hamburger_menu_content_item_name} ${styles.switch}`}>Log out</p>
                </div>
            </div>
        </div >
    )
}