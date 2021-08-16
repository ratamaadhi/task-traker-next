import { createContext } from "react";
const store = {
  user: '',
}

export const GlobalContext = createContext(store);