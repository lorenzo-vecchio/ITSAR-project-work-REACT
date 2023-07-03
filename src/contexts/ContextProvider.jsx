import { useState, createContext } from "react"

export const ContextId = createContext()

const memorizzaId = () =>{
    const [id, setId] = useState()
    const [idPromemoria, setIdPromemoria] = useState()

    const modificaId = (ID) =>{
        setId(ID)
    }

    const modificaId2 = (ID) =>{
        setIdPromemoria(ID)
    }

    return {id, modificaId, idPromemoria, modificaId2}
}

const ContextProvider = ({children}) =>{
    const {id, modificaId, idPromemoria, modificaId2} = memorizzaId()

    return(
        <ContextId.Provider value={{id, modificaId, idPromemoria, modificaId2}}>
            {children}
        </ContextId.Provider>
    )
}

export default ContextProvider;

