import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import { Hero } from "@/components";

describe("<Hero />", () => {
  it("should renders", () => {
    render(<Hero />);

    const hero = screen.getByText(/star wars wiki/i);

    expect(hero).toBeInTheDocument();
  });
});
