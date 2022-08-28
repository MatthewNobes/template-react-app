import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

test("the header renders with the correct text", () => {
  const headerText = "Test Header";

  render(<Header headerText={headerText} />);

  const header = screen.getByText(headerText);
  expect(header).toBeInTheDocument();
});
