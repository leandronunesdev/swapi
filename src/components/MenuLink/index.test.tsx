import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MenuLink } from ".";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("<MenuLink />", () => {
  it("should render a link", async () => {
    (usePathname as jest.Mock<string>).mockReturnValue("/mock-path"); // Provide a mock pathname for testing

    render(<MenuLink href="/link" linkName="Test" />);

    const menuLink = screen.getByRole("link", { name: /test/i });
    expect(menuLink).toBeInTheDocument();
  });
});
