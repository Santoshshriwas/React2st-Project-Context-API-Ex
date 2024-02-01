import { useContext } from "react";
import { myContext } from "./contextProvider";


const Bhopal=()=>{
  const {val}=useContext(myContext);
  return(
    <>
       <h1>
        Anather Component:{val}
       </h1>
    </>
  );
}
export default Bhopal;