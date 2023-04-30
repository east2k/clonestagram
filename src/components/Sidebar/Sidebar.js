import React, { useState, useEffect, useRef } from "react";
import { Icon } from '@iconify/react';

import { SidebarItem } from "./SidebarItem/SidebarItem";
import { HamburgerMenu } from "./HamburgerMenu/HamburgerMenu";

import styles from "./Sidebar.module.css";

export const Sidebar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const hamburgerMenuRef = useRef();

    const onHandleToggle = () => {
        setToggleMenu(prevToggle => !prevToggle)
    }

    useEffect(() => {

        const closeHamburgerMenu = (e) => {
            if (!hamburgerMenuRef.current.contains(e.target)) {
                setToggleMenu(false)
            }
        }

        document.body.addEventListener("mousedown", closeHamburgerMenu)

        return () => document.body.removeEventListener("mousedown", closeHamburgerMenu)
    }, [])

    return (
        <div className={styles.sidebar_container}>
            <div className={styles.sidebar_logo_container}>
                <Icon icon="mdi:instagram" width="25px" style={{ color: 'white' }} /> <span className={styles.logo_label}>Instagram</span>
            </div>
            <div className={styles.sidebar_content}>
                <SidebarItem />
            </div>
            <div
                ref={hamburgerMenuRef}
                className={styles.sidebar_hamburger_menu_container}
            >
                <HamburgerMenu toggleMenu={toggleMenu} />
                <div
                    className={styles.sidebar_hamburger_menu}
                    onClick={onHandleToggle}
                >
                    <div className={styles.sidebar_hamburger_menu_icon}>
                        <Icon icon="cil:hamburger-menu" />
                    </div>
                    <p className={styles.sidebar_hamburger_menu_label}>More</p>
                </div>
            </div>
        </div>
    )
}