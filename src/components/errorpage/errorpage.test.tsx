import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Error from "./errorpage";
describe("Given 404 error Page", () =>
  describe("When it is instantiate", () => {
    test("renders a text in the page ", () => {
      render(<Error></Error>);

      const role = screen.getByRole("heading");

      expect(role).toBeInTheDocument();
    });
  }));
