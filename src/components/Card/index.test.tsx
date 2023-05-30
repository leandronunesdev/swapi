import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe } from "node:test";
import { Card } from ".";

describe("<Card cardType='films' />", () => {
  it("should render a link with the film name", async () => {
    render(
      <Card
        cardType="films"
        name="Film Name"
        id="filmId"
        episodeID={5}
        releaseDate="1977-05-25"
      />
    );

    const card = screen.getByRole("link", { name: /film name/i });
    const icon = screen.getByTitle(/film icon/i);
    const episode = await screen.findByText(/episode v/i);
    const year = await screen.findByText(/1977/i);

    expect(card).toBeInTheDocument();
    expect(card).toContainElement(icon);
    expect(card).toContainElement(episode);
    expect(card).toContainElement(year);
    expect(card).toHaveAttribute("href", "/films/filmId");
  });
});

describe("<Card cardType='characters' />", () => {
  it("should render a link with the character name", async () => {
    render(
      <Card
        cardType="characters"
        name="character Name"
        id="characterId"
        episodeID={5}
        releaseDate="1977-05-25"
      />
    );

    const card = screen.getByRole("link", { name: /character name/i });
    const icon = screen.getByTitle(/character icon/i);

    expect(card).toBeInTheDocument();
    expect(card).toContainElement(icon);
    expect(card).toHaveAttribute("href", "/characters/characterId");
  });
});

describe("<Card cardType='planets' />", () => {
  it("should render a link with the planet name", async () => {
    render(
      <Card
        cardType="planets"
        name="planet Name"
        id="planetId"
        episodeID={5}
        releaseDate="1977-05-25"
      />
    );

    const card = screen.getByRole("link", { name: /planet name/i });
    const icon = screen.getByTitle(/planet icon/i);

    expect(card).toBeInTheDocument();
    expect(card).toContainElement(icon);
    expect(card).toHaveAttribute("href", "/planets/planetId");
  });
});
