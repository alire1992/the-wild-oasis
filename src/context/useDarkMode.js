import { useContext } from "react";
import { DarkModeContex } from "./DarkModeContext";

export function useDarkMode() {
  const context = useContext(DarkModeContex);

  if (context === undefined)
    throw new Error("dark mode context are not its own provider");

  return context;
}
