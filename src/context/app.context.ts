import { createContext } from "react";
import { useCharacter } from "../hooks/use.character";

export type ContextStructure = {
  characterContext: ReturnType<typeof useCharacter>;
};

export const AppContext = createContext<ContextStructure>(
  {} as ContextStructure
);
