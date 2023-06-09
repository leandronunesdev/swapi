import { render, screen } from "@testing-library/react";
import { Menu } from ".";
import { usePathname } from "next/navigation";

jest.mock("next/navigation", () => ({
  usePathname: jest.fn(),
}));

describe("<Menu />", () => {
  it("should render a link", async () => {
    (usePathname as jest.Mock<string>).mockReturnValue("/mock-path");

    render(<Menu />);

    const menu = screen.getByTestId("menu");
    expect(menu).toBeInTheDocument();
  });
});
