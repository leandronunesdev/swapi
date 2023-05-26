import React, { ReactNode } from "react";
import "./styles.scss";

type CardsGridProps = {
  children: ReactNode;
};

export const CardsGrid = ({ children }: CardsGridProps) => {
  return <div className="cards-grid">{children}</div>;
};
