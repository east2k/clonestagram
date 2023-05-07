import React from "react";
import styles from "./HomeSideContentFooter.module.css"

export const HomeSideContentFooter = ({ contentName, contentLink }) => {

    const footerContent = [
        {
            name: "About",
            link: "/"
        }, {
            name: "Help",
            link: "/"
        }, {
            name: "Press",
            link: "/"
        }, {
            name: "API",
            link: "/"
        }, {
            name: "Jobs",
            link: "/"
        }, {
            name: "Privacy",
            link: "/"
        }, {
            name: "Terms",
            link: "/"
        }, {
            name: "Locations",
            link: "/"
        }, {
            name: "Language",
            link: "/"
        }, {
            name: "Meta Verified",
            link: "/"
        },
    ]

    const newFooterContentElement = footerContent.map((item, index) => {
        return (
            <a
                key={index}
                className={styles.footer_link}
                href={item.link}
            >
                {item.name}
            </a>
        )
    })

    return (
        <div className={styles.home_more_about}>
            {newFooterContentElement}
        </div>
    )
}