import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Editform from "./editform";

describe("Given edit  form page", () =>
  describe("when it is instantiate", () => {
    test("render a form", () => {
      render(<Editform></Editform>);

      const role = screen.getByRole("button");

      expect(role).toBeInTheDocument();
    });
  }));
