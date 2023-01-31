/*import React,{useState}from 'react';
const App3=()=>{
    const [num,setnum]=useState(0);
    return <button 
    onClick={()=>{
      setnum(num+1)
    }}>
      Click me{num}
      </button>;
  }
  export default App3;*/
  import React,{ useState,useEffect } from "react"
import ReactDOM from "react-dom/client";
const url='http://api.github.com/users';

const UseEffectFetchData=()=>{
    const [users,setUsers]=useState([]);

    const getUsers=async()=>{
    const response=await fetch(url);
    const users=await response.json();
    setUsers(users);
    }
useEffect(()=>{
    getUsers();
},[]);
return(
    <>
    <h3>github users</h3>
    <ul className="users">
        {users.map((user)=>{
        const { id,login,avatar_url,html_url }=user;
        return(
            <li key={id}>
                <img src={avatar_url} alt={login} />
                <div>
                    <h4>{login}</h4>
                    <a href={html_url}>profile</a>
                </div>
            </li>
         )
     })}
    </ul>
    </>
);
};
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(< UseEffectFetchData/>);
export default UseEffectFetchData;