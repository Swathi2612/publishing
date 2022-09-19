import React from 'react'
import "./create.css";
import { useReducer } from 'react'
import {useNavigate} from 'react-router-dom'

const initialvalue={
  title:"",
  text:""
}
function Create() {
let Navigate=useNavigate()

let reducer=(state,action)=>{
switch (action.type){
  case "title":
    return {...state,title:action.payload}
  case "text":
    return  {...state,text:action.payload}
    default :
    return state
}

}
   const [state,dispatch]= useReducer(reducer,initialvalue)

    let handlepost=()=>{
      fetch("http://localhost:3007/post", {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(state)
      }).then(Navigate("/"))
    }

  return (
    <div>
        <div id="create">
        <center>
        <form onSubmit={handlepost} >        
        <input type="text" placeholder='TITLE' id="title" onChange={(event)=>{dispatch({type:"title",payload:event.target.value})}}/>
        <br/>        
        <textarea placeholder='TEXT' id="text" onChange={(event)=>{dispatch({type:"text", payload:event.target.value})}} ></textarea>
        <br/>
        <button id="submit" type="submit"> publish </button>
        </form>
        </center>
        </div>
    </div>
  )
}

export default Create