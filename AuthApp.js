import { useContext } from "react"
import { myContext } from "./contextProvider"

const AuthApp=()=>{
  const {user,logout}=useContext(myContext);
  return(
    <>
    <center>
      <h1>
        Welcom : {user.name}!
      </h1>
      <button onClick={()=>{logout()}}>
        Logout
      </button>
      </center>
    </>
  )
}
export default AuthApp;