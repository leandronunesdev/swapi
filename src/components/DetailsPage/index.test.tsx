import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { describe } from "node:test";
import { DetailsPage } from ".";

describe("<DetailsPage />", () => {
  it("should render div with a specific className", async () => {
    render(<DetailsPage className="test-class">Anything</DetailsPage>);

    const detailsPage = screen.getByText(/anything/i);

    expect(detailsPage).toBeInTheDocument();
    expect(detailsPage).toHaveAttribute("class", "details-page test-class");
  });
});
