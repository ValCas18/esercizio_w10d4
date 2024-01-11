import { render, screen } from "@testing-library/react";
import Welcome from "../components/Welcome";

describe("Correctly mounted Welcome", () => {
	it("correctly mount Welcome", () => {
		render(<Welcome />);
		const exist = screen.getByText(/benvenuti/i);
		expect(exist).toBeInTheDocument();
	});
});
