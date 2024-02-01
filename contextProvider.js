/*
import { createContext,useState } from "react";
const myContext=createContext();

const ContextProvider=({children})=>{
  const [val,setVal]=useState(0);

  return(
    <>
       <myContext.Provider value={{val,setVal}}>
        {children}
       </myContext.Provider>
    </>
  );
}
export default ContextProvider;
export {myContext};
*/
import { createContext,useState } from "react";
const myContext=createContext();

const ContextProvider=({children})=>{
  const [user,setUser]=useState({name:"",auth:false});
  //user={name:"",auth:false}
 const login=(nm)=>{
  setUser({name:nm, auth:true});
 }
 const logout=()=>{
  setUser({name:"",auth:false});
 }

  return(
    <>
       <myContext.Provider value={{user,login,logout}}>
        {children}
       </myContext.Provider>
    </>
  );
}
export default ContextProvider;
export {myContext};