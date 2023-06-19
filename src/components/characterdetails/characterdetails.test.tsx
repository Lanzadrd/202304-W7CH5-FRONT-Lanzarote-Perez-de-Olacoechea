import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import CharacterDetails from "./characterdetails";
import { AppContext, ContextStructure } from "../../context/app.context";
import { MemoryRouter as Router } from "react-router-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: jest.fn().mockReturnValue({ id: 1 }),
}));

describe("Given character details component", () => {
  const value: ContextStructure = {
    characterContext: {
      character: [{ id: 1 }],
    },
  } as unknown as ContextStructure;

  test("renders Home with character cards", () => {
    render(
      <>
        <Router>
          <AppContext.Provider value={value}>
            <CharacterDetails></CharacterDetails>
          </AppContext.Provider>
        </Router>
      </>
    );

    const characterDetails = screen.getByText("Gender:");
    expect(characterDetails).toBeInTheDocument();
  });
});
