import React, { useState } from "react";
import styles from "./SidebarItem.module.css";
import { Icon } from "@iconify/react";

import profileImage from "../../../images/profile-images/user-profile.jpg";
import { Link } from "react-router-dom";

export const SidebarItem = ({ handleExpandSidebar, expandSidebar }) => {
  const [activeMenu, setActiveMenu] = useState([
    {
      id: 0,
      labelName: "Home",
      linkPath: "/",
      iconLink: "material-symbols:home-outline",
      iconLinkActive: "material-symbols:home",
      currentActive: true,
    },
    {
      id: 1,
      labelName: "Search",
      linkPath: "#",
      iconLink: "clarity:search-line",
      iconLinkActive: "mingcute:search-2-fill",
      currentActive: false,
    },
    {
      id: 2,
      labelName: "Explore",
      linkPath: "/explore",
      iconLink: "material-symbols:explore-outline",
      iconLinkActive: "material-symbols:explore-rounded",
      currentActive: false,
    },
    {
      id: 3,
      labelName: "Reels",
      linkPath: "/reels",
      iconLink: "carbon:media-library",
      iconLinkActive: "carbon:media-library-filled",
      currentActive: false,
      isLink: true,
    },
    {
      id: 4,
      labelName: "Messages",
      linkPath: "/messages",
      iconLink: "ph:messenger-logo",
      iconLinkActive: "mdi:facebook-messenger",
      currentActive: false,
    },
    {
      id: 5,
      labelName: "Notifications",
      linkPath: "#",
      iconLink: "mdi:cards-heart-outline",
      iconLinkActive: "mdi:cards-heart",
      currentActive: false,
    },
    {
      id: 6,
      labelName: "Create",
      linkPath: "#",
      iconLink: "eva:plus-square-outline",
      iconLinkActive: "eva:plus-square-fill",
      currentActive: false,
    },
  ]);

  const handleChangeActiveClick = (index) => {
    if (index === 7) setProfilePageActive(true);
    else setProfilePageActive(false);
    if (index === 1) handleExpandSidebar();
    setActiveMenu((prevActiveMenu) => {
      return prevActiveMenu.map((menuItem) => {
        return menuItem.id === index
          ? { ...menuItem, currentActive: true }
          : { ...menuItem, currentActive: false };
      });
    });
  };

  const newMenuList = activeMenu.map((item, index) => {
    return (
      <Link
        key={index}
        className={`${styles.sidebar_content_item} ${
          item.currentActive ? styles.active : ""
        }
        `}
        onClick={() => handleChangeActiveClick(index)}
        to={item.linkPath}
      >
        <div className={styles.sidebar_content_item_icon}>
          <Icon
            icon={item.currentActive ? item.iconLinkActive : item.iconLink}
            width="25px"
          />
        </div>
        {expandSidebar ? (
          ""
        ) : (
          <p className={styles.sidebar_content_item_name}>{item.labelName}</p>
        )}
      </Link>
    );
  });

  const [profilePageActive, setProfilePageActive] = useState(false);

  return (
    <>
      <div className={styles.sidebar_content_item_list}>
        {newMenuList}
        <Link
          className={`${styles.sidebar_content_item} ${
            profilePageActive ? styles.active : ""
          }`}
          to="/profile"
          onClick={() => handleChangeActiveClick(7)}
        >
          <div
            className={`${styles.sidebar_content_item_profile} ${
              profilePageActive ? styles.active : ""
            }`}
          >
            <img src={profileImage} alt="Profile" />
          </div>
          {expandSidebar ? (
            ""
          ) : (
            <p className={styles.sidebar_content_item_name}>Profile</p>
          )}
        </Link>
      </div>
    </>
  );
};
