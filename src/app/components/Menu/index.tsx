import React from "react";
import { MenuLink } from "../MenuLink";

import "./styles.scss";

export const Menu = () => {
  const menuOptions = [
    { href: "", name: "home" },
    { href: "films", name: "films" },
    { href: "characters", name: "characters" },
    { href: "planets", name: "planets" },
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
