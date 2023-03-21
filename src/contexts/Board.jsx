import { createContext, useReducer } from "react";

export const BoardContext = createContext();

const BoardProvider = ({children}) => {
   const [stat,dispatch] = useReducer(reducer)
    return (
        <BoardContext.Provider value={{}}>
            {children}
        </BoardContext.Provider>
    )
}