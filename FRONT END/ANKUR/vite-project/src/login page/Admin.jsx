import React,{useState,useEffect} from "react";
//import { useNavigate } from "react-router-dom";

function Admin(){

    const [AdId,setAdId]=useState("");
    const [pass,setPass]=useState("");
  //  const history=useNavigate();
    function handleIdChange(event){
        setAdId(event.target.value);
    }
    function handlePassChange(event){
        let len = event.target.value.length;
        setPass("•".repeat(len));
    }

    function handleClick(event) {
        const userType = event.target.value.toLowerCase();
    //    history(`/login/${userType}`);
    }
    

    return(<>
    <div className="Menu">
        
        
    </div>
    
    
    <div className="fac-login">
        <h1>LOGIN</h1>
        <div className="inputs">
            <label >USERNAME:</label>
            <label >Id:</label>
            <input type="text" value={AdId} onChange={handleIdChange} placeholder="Enter Id" id="username"/><br />
            <label >PASSWORD:</label>
            <input type="text" value={pass} onChange={handlePassChange} placeholder="••••••••" id="password"/>
        </div>
        <button >LOGIN</button>
    </div>
    </>);

}
export default Admin;