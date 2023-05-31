import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import { CardsGrid } from ".";

describe("<CardsGrid />", () => {
  it("should render a grid with a child", async () => {
    render(<CardsGrid>Anything</CardsGrid>);

    const cardsGrid = screen.getByText(/anything/i);

    expect(cardsGrid).toBeInTheDocument();
  });
});
