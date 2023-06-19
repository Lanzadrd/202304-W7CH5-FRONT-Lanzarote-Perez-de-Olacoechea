import { useCallback, useEffect, useMemo, useReducer } from "react";
import { ApiRepository } from "../services/api.repository";
import { Character } from "../models/character";
import { CharacterState, characterReducer } from "../reducers/reducer";
import * as ac from "../reducers/actions.creator";
import { Navigate } from "react-router-dom";

export function useCharacter() {
  const initialState: CharacterState = {
    character: [],
    next: "",
    prev: "",
    filter: "",
  };

  const [characterState, dispatch] = useReducer(characterReducer, initialState);

  const url = "https://lanza-oh.onrender.com/user/";

  const repo: ApiRepository<Character> = useMemo(
    () => new ApiRepository<Character>(url),
    []
  );

  const handleLoad = useCallback(
    async (url: string) => {
      const loadedCharacter = await repo.getAll(url);
      const characterResults = loadedCharacter.results;
      dispatch(ac.loadCharacterAction(characterResults));
      dispatch(ac.NextCharacterAction(loadedCharacter.info.next));
      dispatch(ac.PrevCharacterAction(loadedCharacter.info.prev));
    },
    [repo]
  );

  const handleFilter = useCallback(
    async (filter: string) => {
      const loadedCharacter = await repo.getFiltered(filter);
      const characterResults = loadedCharacter.results;
      dispatch(ac.loadCharacterAction(characterResults));
      dispatch(ac.NextCharacterAction(loadedCharacter.info.next));
      dispatch(ac.PrevCharacterAction(loadedCharacter.info.prev));
    },
    [repo]
  );

  const handleLogin = useCallback(
    async (data: object) => {
      const checkLogin = await repo.login(data);
      return checkLogin;
    },
    [repo]
  );

  // useEffect(() => {
  //   handleLoad(url);
  // }, [handleLoad]);

  return {
    character: characterState.character,
    next: characterState.next,
    prev: characterState.prev,
    handleLogin,
    handleLoad,
    handleFilter,
  };
}
