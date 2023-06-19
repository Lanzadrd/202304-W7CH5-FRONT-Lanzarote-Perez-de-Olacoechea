// import "@testing-library/jest-dom";
// import { render, screen } from "@testing-library/react";
// import { buttons } from "./buttons";
// import { AppContext, ContextStructure } from "../../context/app.context";
// import userEvent from "@testing-library/user-event";

// describe("Given a Controls component", () => {
//   const value: ContextStructure = {
//     charactersContext: {
//       setCurrentPage: jest.fn(),
//       currentPage: 1,
//     },
//   } as unknown as ContextStructure;
//   describe("When it is instantiated", () => {
//     let elements: HTMLElement[];
//     beforeEach(() => {
//       render(
//         <AppContext.Provider value={value}>
//           <PagingButtons></PagingButtons>
//         </AppContext.Provider>
//       );
//       elements = screen.getAllByRole("button");
//     });

//     test("Then it should be in the document", () => {
//       expect(elements[0]).toBeInTheDocument;
//       expect(elements[1]).toBeInTheDocument;
//     });
//     test("Then, if the user click on the buttons, setCurrenPage have to been called", async () => {
//       await userEvent.click(elements[0]);
//       expect(value.charactersContext.setCurrentPage).toHaveBeenCalled();
//       await userEvent.click(elements[1]);
//       expect(value.charactersContext.setCurrentPage).toHaveBeenCalled();
//     });
//   });
// });
