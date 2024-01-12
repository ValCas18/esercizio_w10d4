import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

describe("Test", () => {
	it("correctly mount Welcome", () => {
		render(<App />);
		const welcomeExists = screen.getByText(/benvenuti/i);
		expect(welcomeExists).toBeInTheDocument();
	});

	it("correct number of cards", () => {
		render(<App />);
		const cardNum = screen.getAllByTestId("book-card");
		expect(cardNum).toHaveLength(150);
	});

	it("correctly mount CommentArea", () => {
		render(<App />);
		const commentAreaExists = screen.getByPlaceholderText(/inserisci/i);
		expect(commentAreaExists).toBeInTheDocument();
	});
	it("filter correctly", async () => {
		render(<App />);
		const inputField = screen.getByPlaceholderText(/cerca un libro/i);
		fireEvent.change(inputField, { target: { value: "witcher" } });
		const filteredListItems = screen.getAllByTestId("book-card");
		expect(filteredListItems).toHaveLength(3);
	});
	it("filter correctly again", async () => {
		render(<App />);
		const inputField = screen.getByPlaceholderText(/cerca un libro/i);
		fireEvent.change(inputField, { target: { value: "wheel of time" } });
		const filteredListItems = screen.getAllByTestId("book-card");
		expect(filteredListItems).toHaveLength(1);
	});
	it("gets red border", () => {
		render(<App />);
		const borderCard = screen.getAllByTestId("book-card")[0];
		fireEvent.click(borderCard);
		expect(borderCard).toHaveStyle("border: 3px solid red");
	});
	it("doesnt get red border anymore", () => {
		render(<App />);
		const borderCardOne = screen.getAllByTestId("book-card")[0];
		const borderCardTwo = screen.getAllByTestId("book-card")[1];
		fireEvent.click(borderCardOne);
		expect(borderCardOne).toHaveStyle("border: 3px solid red");
		fireEvent.click(borderCardTwo);
		expect(borderCardOne).not.toHaveStyle("border: 3px solid red");
	});
	it("doesnt have button", () => {
		render(<App />);
		const button = screen.queryByPlaceholderText(/elimina/i);
		expect(button).not.toBeInTheDocument();
	});
});
