import React from "react";
import styles from "./SearchExpand.module.css";
import { Icon } from "@iconify/react";

export const SearchExpand = ({expandSidebar}) => {
    return (
        <div
            className={`${styles.sidebar_extend} ${
                expandSidebar ? styles.expand : ""
            }`}
        >
            <div className={styles.sidebar_extend_header}>
                <h1 className={styles.search_header}>Search</h1>
                <div className={styles.search_container}>
                    <input
                        type="text"
                        placeholder="Search"
                        className={styles.search_input}
                    />
                    <Icon className={styles.search_icon} icon="ph:x-light" />
                </div>
            </div>
            <div className={styles.search_body}>
                <p className={styles.search_recent_label}>Recent</p>
                <span className={styles.search_placeholder}>
                    No recent searches.
                </span>
            </div>
        </div>
    );
};
