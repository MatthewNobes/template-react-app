import { NavOption } from "./NavOption";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

describe("NavOption testing", () => {
	it("should render the navigation route object passed in", () => {
		render(
			<BrowserRouter>
				<NavOption
					id={1}
					route={"/test"}
					label={"test label"}
					ariaLabel={"test link"}
				/>
			</BrowserRouter>,
		);

		const navBar = screen.getByText("test label");
		expect(navBar.text).toBe("test label");
		expect(navBar.href).toBe("http://localhost/test");
		expect(navBar.id).toBe("1");
	});
});
