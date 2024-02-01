import { useContext } from "react";
import Bhopal from "./bhopal";
import { myContext } from "./contextProvider";

const Cybrom=()=>{
  const {val,setVal}=useContext(myContext)
  return(
    <>
    <h1>
      My Counter Program
    </h1>
    <button onClick={()=>{setVal(val+10)}}>Increment by 10</button>
    <h1>Count : {val}</h1>
    <button onClick={()=>{setVal(val-10)}}>Dercement by 10</button>
    <Bhopal/>
    </>
  );
}
export default Cybrom;