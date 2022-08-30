import { render, screen } from "@testing-library/react";
import { Header } from "./Header";
import { BrowserRouter } from "react-router-dom";

test("the header renders with the correct text", () => {
  const headerText = "Test Header";

  render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header headerText={headerText} />
    </BrowserRouter>
  );

  const header = screen.getByText(headerText);
  expect(header).toBeInTheDocument();
});
