import { render, screen } from "@testing-library/react";
import { describe } from "node:test";
import { CustomLink } from ".";

describe("<CustomLink type='films' />", () => {
  it("should render a link with for a film", async () => {
    render(<CustomLink type="films" title="Film Title" id="filmId" />);

    const customLink = screen.getByRole("link", { name: /film title/i });

    expect(customLink).toBeInTheDocument();
    expect(customLink).toHaveAttribute("href", "/films/filmId");
  });
});

describe("<CustomLink type='characters' />", () => {
  it("should render a link with for a character", async () => {
    render(
      <CustomLink type="characters" title="character Title" id="characterId" />
    );

    const customLink = screen.getByRole("link", { name: /character title/i });

    expect(customLink).toBeInTheDocument();
    expect(customLink).toHaveAttribute("href", "/characters/characterId");
  });
});

describe("<CustomLink type='planets' />", () => {
  it("should render a link with for a planet", async () => {
    render(<CustomLink type="planets" title="planet Title" id="planetId" />);

    const customLink = screen.getByRole("link", { name: /planet title/i });

    expect(customLink).toBeInTheDocument();
    expect(customLink).toHaveAttribute("href", "/planets/planetId");
  });
});
