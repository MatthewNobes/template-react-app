import { Navigation } from "./Navigation";

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

		const navBar = Navigation({ routes: routes });

		expect(navBar.props.children.length).toBe(2);
	});
});
