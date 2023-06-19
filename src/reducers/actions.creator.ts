import { Character } from "../models/character";
import { actionTypes } from "./action.types";

type Keys = keyof typeof actionTypes;

export type CharacterAction = {
  type: (typeof actionTypes)[Keys];
  payload: Character[] | Character | number | string;
};

export function loadCharacterAction(payload: Character[]): CharacterAction {
  return {
    type: actionTypes.load,
    payload,
  };
}

export function NextCharacterAction(payload: Character[]): CharacterAction {
  return {
    type: actionTypes.next,
    payload,
  };
}

export function PrevCharacterAction(payload: Character[]): CharacterAction {
  return {
    type: actionTypes.prev,
    payload,
  };
}

export function FilterCharacterAction(payload: Character[]): CharacterAction {
  return {
    type: actionTypes.filter,
    payload,
  };
}
