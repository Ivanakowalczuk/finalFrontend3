import { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const initialState = {theme: "", data: []}

const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
 /* const [valorStorage, setValorStorage ] = useState([])  */
  const [dentist, setDentist] = useState([])

  const url = 'https://jsonplaceholder.typicode.com/users'
   
 /* useEffect(() => {

  },[valorStorage])*/


   useEffect(()=>{
   fetch(url)
       .then(res => res.json())
       .then(data => setDentist(data))
  },[])

 
  
 
  return (
    <ContextGlobal.Provider value={{dentist, setDentist}}>
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider
export const useGlobalStates = () => useContext(ContextGlobal)