import Link from "next/link";
import React from "react";

type MenuLinkProps = {
  href: string;
  linkName: string;
};

export const MenuLink = ({ href, linkName }: MenuLinkProps) => {
  return <Link href={href}>{linkName}</Link>;
};
