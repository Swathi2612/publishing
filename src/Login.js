 import {useEffect, useState} from "react"
 const Login=()=>{
   const [data,setData]=useState([]);

   useEffect(()=>{
       fetch("http://localhost:3005/user")
      .then(res=>res.json())
      .then(data=>setData(data))
   },[])
   console.log(data);

    return(
        <>
        <form>
        <input type="text" placeholder="Name"/><br/>
        <input type="email" placeholder="Email"/><br/>
        <input type="number" placeholder="Number"/><br/>
        <button type="submit">Submit</button>
        </form>

        
            {data.map(item=>{
                return <>
                <div>{item.name}</div>
                <div>{item.email}</div>
                </>
            })}            
        
        </>
    )
}
export default Login;