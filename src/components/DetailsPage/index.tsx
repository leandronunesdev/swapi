import React, { ReactNode } from "react";
import "./styles.scss";

type DetailsPageProps = {
  children: ReactNode;
  className?: string;
};

export const DetailsPage = ({ children, className }: DetailsPageProps) => {
  return <div className={`details-page ${className}`}>{children}</div>;
};
