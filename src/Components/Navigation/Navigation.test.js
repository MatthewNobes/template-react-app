import { Navigation } from "./Navigation";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("Navigation testing", () => {
	it("should render the 2 navigation routes passed in", () => {
		const routes = [
			{
				id: 0,
				label: "Feature One",
				route: "/",
				ariaLabel: "Feature One Link",
			},
			{
				id: 1,
				label: "Feature Two",
				route: "/FeatureTwo",
				ariaLabel: "Feature Two Link",
			},
		];

		const navBar = render(
			<BrowserRouter>
				<Navigation routes={routes} />
			</BrowserRouter>,
		);

		expect(navBar).toBeDefined();
	});
});
