import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Addform from "./addform";

describe("Given add form page", () =>
  describe("when it is instantiate", () => {
    test("render a text in a form", () => {
      render(<Addform></Addform>);

      const role = screen.getByRole("button");

      expect(role).toBeInTheDocument();
    });
  }));
