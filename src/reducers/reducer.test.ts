import { actionTypes } from "./action.types";
import { CharacterAction } from "./actions.creator";
import { CharacterState, characterReducer } from "./reducer";

describe("Given the reducer characterReducer", () => {
  describe("When", () => {
    const CharacterState: CharacterState = {
      character: [],
      next: "",
      prev: "",
      filter: "",
    };

    const action: CharacterAction = {
      type: "test",
      payload: [],
    } as unknown as CharacterAction;
    const finalState: CharacterState = {
      character: [],
      next: "",
      prev: "",
      filter: "",
    };

    test("Then it should ...", () => {
      const newState = characterReducer(CharacterState, action);
      expect(newState).toEqual(finalState);
    });
  });

  describe("When", () => {
    const CharacterState: CharacterState = {
      character: [],
      next: "",
      prev: "",
      filter: "",
    };

    const action: CharacterAction = {
      type: actionTypes.load,
      payload: [],
    } as unknown as CharacterAction;
    const finalState: CharacterState = {
      character: [],
      next: "",
      prev: "",
      filter: "",
    };

    test("Then it should ...", () => {
      const newState = characterReducer(CharacterState, action);
      expect(newState).toEqual(finalState);
    });
  });
});
