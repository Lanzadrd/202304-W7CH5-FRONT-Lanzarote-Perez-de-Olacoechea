import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { AppContext, ContextStructure } from "./app.context";

const mockContext: ContextStructure = {
  characterContext: {
    character: [
      {
        url: "localhost/",
        id: 1,
        name: "wow",
        img: "img",
      },
    ],
  },
} as unknown as ContextStructure;

describe("Given AppContextProvider", () => {
  describe("When it receives the <p> element", () => {
    test("Then it prints patata", async () => {
      render(
        <AppContext.Provider value={mockContext}>
          <p>Patata</p>
        </AppContext.Provider>
      );

      const element = await screen.getByText(/Patata/);

      expect(element).toBeInTheDocument();
    });
  });
});
