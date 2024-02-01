/*
// import Comp1 from "./Comp1";
// import { useState,createContext } from "react";
// const myContext= createContext();
// const App=()=>{
//   const [user,setUser]=useState("Santosh");
//   return(<>
//   <myContext.Provider value={{user}}>
//   <h1>This is App 1 {user}</h1>
//   <Comp1/>
//   </myContext.Provider>
//   </>);
// }
// export default App;
// export {myContext}
*/
import { useContext } from "react";
import AuthApp from "./AuthApp";
import { myContext } from "./contextProvider";
import UnAuthApp from "./unAuthapp";

const App=()=>{
  const {user}=useContext(myContext);
  return(
    <>
      <h1>
        Welcom
      </h1>
      {user.auth? <AuthApp/>:<UnAuthApp/>}
    </>
  );
}
export default App;