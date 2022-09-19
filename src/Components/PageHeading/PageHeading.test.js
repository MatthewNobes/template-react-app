import { render, screen } from "@testing-library/react";
import { PageHeading } from "./PageHeading";

test("the page heading renders with the correct text", () => {
	const pageHeadingText = "Test Header";

	render(<PageHeading pageHeading={pageHeadingText} />);

	const pageHeading = screen.getByText(pageHeadingText);
	expect(pageHeading).toBeInTheDocument();
});
