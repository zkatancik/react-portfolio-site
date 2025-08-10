import { render, screen, within } from "@testing-library/react";
import App from "./App";

test("renders navbar brand", () => {
  render(<App />);
  const nav = screen.getByRole("navigation");
  const brand = within(nav).getByText(/zack katancik/i);
  expect(brand).toBeInTheDocument();
});
