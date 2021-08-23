import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {Link} from 'react-router-dom';

function LogIn(){
    const [username,setUsername] = useState('');
    const[ password,setPassword] = useState('');
    const history = useHistory();
    useEffect(()=>{
        if(localStorage.getItem('user-info')){
            history.push('/')
        }
    }, )
    
   async function LogIn(){
        console.warn(username,password)
    
        let item ={username,password};
        let result= await fetch("http://localhost:3000/login",{
            mathod: 'POST',
            headers:{
                "Content-type": "application/json",
                "Accept": 'application/json'
            },
            body:JSON.stringify(item)
        });
        result = await result.json()
        localStorage.setItem("user-info",JSON.stringify(result))
        history.push("/")
    }

return(
    <div className="login">
       
        <h1>Login Page</h1>
        <div className="col-sm-6 offset-sm-3">
        <input type="text" placeholder="username" onChang={(e)=>setUsername(e.target.value)}
            className="from-control" />
        <br />
        <input type="password" placeholder="password" onChang={(e)=>setPassword(e.target.value)}
            className="from-control" />
        <br />

        <button onClick={LogIn} className="btn">Login</button> 

        <h2>or</h2>
        <Link to="/">go to menu</Link>
        </div>
    </div>
) 
}
export default LogIn;