import Link from "next/link";
import React from "react";
import "./styles.scss";

type MenuLinkProps = {
  href: string;
  linkName: string;
};

export const MenuLink = ({ href, linkName }: MenuLinkProps) => {
  return (
    <Link href={href} className="menu-link">
      {linkName}
    </Link>
  );
};
