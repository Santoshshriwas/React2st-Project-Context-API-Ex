import { myContext } from "./contextProvider";
import { useState,useContext } from "react";
const UnAuthApp=()=>{
  const [usr,setUser]=useState("");
  const {login}=useContext(myContext);
  return(
    <>
    <center>
      <input type="text" placeholder="Enter Name :" value={usr} onChange={(e)=>{setUser(e.target.value)}}/><br/><br/>
      <button onClick={()=>{login(usr)}}>
        Login Now!
      </button>
      </center>
    </>
  )
}
export default UnAuthApp;