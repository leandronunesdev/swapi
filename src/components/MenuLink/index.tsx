"use client";
import Link from "next/link";
import React from "react";
import "./styles.scss";
import { usePathname } from "next/navigation";

type MenuLinkProps = {
  href: string;
  linkName: string;
};

export const MenuLink = ({ href, linkName }: MenuLinkProps) => {
  const pathname = usePathname();

  const isActive =
    pathname.includes(linkName.toLowerCase()) ||
    (pathname === "/" && linkName === "Home");

  return (
    <Link href={href} className={`menu-link ${isActive && "active-menu-link"}`}>
      {linkName}
    </Link>
  );
};
