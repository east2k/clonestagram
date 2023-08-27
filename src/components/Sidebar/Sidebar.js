import React, { useState, useEffect, useRef } from "react";
import { Icon } from "@iconify/react";

import { SidebarItem } from "./SidebarItem/SidebarItem";
import { HamburgerMenu } from "./HamburgerMenu/HamburgerMenu";

import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import { SearchExpand } from "./SearchExpand/SearchExpand";

export const Sidebar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const [expandSidebar, setExpandSidebar] = useState(false);

    const hamburgerMenuRef = useRef();
    const searchExpandRef = useRef();

    const onHandleToggle = () => {
        setToggleMenu((prevToggle) => !prevToggle);
    };

    useEffect(() => {
        const closeMenus = (e) => {
            if (!hamburgerMenuRef.current.contains(e.target)) {
                setToggleMenu(false);
            }
            if (!searchExpandRef.current.contains(e.target)) {
                setExpandSidebar(false);
            }
        };

        document.body.addEventListener("mousedown", closeMenus);

        return () => document.body.removeEventListener("mousedown", closeMenus);
    }, []);

    const handleExpandSidebar = () => {
        setExpandSidebar(!expandSidebar);
    };

    return (
        <div
            className={`${styles.sidebar_container} ${
                expandSidebar ? styles.expand : ""
            }`}
            ref={searchExpandRef}
        >
            {/* Expand SearchBar */}
            <SearchExpand expandSidebar={expandSidebar} />
            <div className={styles.sidebar_body}>
                {/* Logo */}
                <Link className={styles.sidebar_logo_container} to="/">
                    {expandSidebar ? (
                        <Icon
                            icon="mdi:instagram"
                            className={styles.ig_logo}
                            width="25px"
                            style={{ color: "white" }}
                        />
                    ) : (
                        <span className={styles.logo_label}>Instagram</span>
                    )}
                </Link>
                {/* Sidebar Navigation Items */}
                <div className={styles.sidebar_content}>
                    <SidebarItem
                        handleExpandSidebar={handleExpandSidebar}
                        expandSidebar={expandSidebar}
                    />
                </div>
                {/* Hamburger Menu */}
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
                        {expandSidebar ? (
                            ""
                        ) : (
                            <p className={styles.sidebar_hamburger_menu_label}>
                                More
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
