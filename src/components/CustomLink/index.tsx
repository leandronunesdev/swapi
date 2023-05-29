import Link from "next/link";
import React from "react";

type CustomLinkProps = {
  title: string;
  type: "films" | "characters" | "planets";
  id: string;
};

export const CustomLink = ({ title, type, id }: CustomLinkProps) => {
  return (
    <Link href={`/${type}/${id}`}>
      <li>{title}</li>
    </Link>
  );
};
