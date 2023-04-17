import React, { useState } from "react";
import "./style.css";

const navLink = [
  { id: 0, title: "Home", url: "/", slug: "home" },
  { id: 1, title: "Service", url: "#", slug: "service" },
  { id: 2, title: "News", url: "#", slug: "news" },
  { id: 3, title: "Blog", url: "#", slug: "blog" },
  { id: 4, title: "Contact", url: "#", slug: "contact" },
];

const SideBar = () => {
  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="sidebar-wrapper">
      <ul className="list">
        {navLink &&
          navLink.map((item) => {
            return (
              <li
                className={activeItem === item.slug ? "item active" : "item"}
                key={item.id}
                onClick={() => handleItemClick(item.slug)}
              >
                <span className="item-title">{item.title}</span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SideBar;
