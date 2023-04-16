import React from "react";
import { Icon } from '@iconify/react';

import { SidebarItem } from "./SidebarItem/SidebarItem";

import styles from "./Sidebar.module.css"

export const Sidebar = () => {
    return (
        <div className={styles.sidebar_container}>
            <div className={styles.sidebar_logo_container}>
                <Icon icon="mdi:instagram" width="25px" style={{ color: 'white' }} /> <span className={styles.logo_label}>Instagram</span>
            </div>
            <div className={styles.sidebar_content}>
                <SidebarItem />
            </div>
            <div className={styles.sidebar_hamburger_menu}>
                <div className={styles.sidebar_hamburger_menu_icon}>
                    <Icon icon="cil:hamburger-menu" />
                </div>
                <p className={styles.sidebar_hamburger_menu_label}>More</p>
            </div>
        </div>
    )
}