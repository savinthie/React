import { createContext,useContext,useState } from "react"; 

const UserContext = createContext(undefined);

export const UserProvider = ({children}) =>{
    const[user]=useState({
        name:"Savinthie",
        email:"savinthie.20210181@iit.ac.lk",
        dob:"15/07/2002",
    });
    return <UserContext.Provider value={{user}}></UserContext.Provider>
};

export const useUser = () =>useContext(UserContext);
