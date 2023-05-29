import React from "react";
import { MenuLink } from "../MenuLink";
import "./styles.scss";

export const Menu = () => {
  const menuOptions = [
    { href: "", name: "Home" },
    { href: "films", name: "Films" },
    { href: "characters", name: "Characters" },
    { href: "planets", name: "Planets" },
  ];

  return (
    <div className="menu">
      {menuOptions.map((option) => {
        return (
          <MenuLink
            key={option.name}
            href={`${option.href}`}
            linkName={option.name}
          />
        );
      })}
    </div>
  );
};
