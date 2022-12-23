import { createContext, useState } from "react";
const Context=createContext();
function Provider ({children}){
    const [foods,setFoods]=useState([]);
    return (
        <Context.Provider value={{foods,setFoods}}>
            {children}
        </Context.Provider>
    )
}
export {Context,Provider}