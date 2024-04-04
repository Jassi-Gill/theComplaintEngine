import React,{useState,useEffect} from "react";
import { useNavigate } from "react-router-dom";

function Faculty(){

    const [facId,setFacId]=useState("");
    const [pass,setPass]=useState("");
    const history=useNavigate();
    function handleIdChange(event){
        setFacId(event.target.value);
    }
    function handlePassChange(event){
        let len = event.target.value.length;
        setPass("•".repeat(len));
    }

    function handleClick(event) {
        const userType = event.target.value.toLowerCase();
        history(`/login/${userType}`);
    }
    
    

    return(<>
    <div className="Menu">
        <button onClick={handleClick} value={Student}>Student</button>
        <button onClick={handleClick} value={Faculty}>Faculty</button>
        <button onClick={handleClick} value={Admin}>Admin</button>
        <button onClick={handleClick} value={Worker}>Worker</button>
    </div>
    
    
    <div className="fac-login">
        <h1>LOGIN</h1>
        <div className="inputs">
            <label >USERNAME:</label>
            <input type="text" value={facId} onChange={handleIdChange} placeholder="Enter Id" id="username"/><br />
            <label >PASSWORD:</label>
            <input type="text" value={pass} onChange={handlePassChange} placeholder="••••••••" id="password"/>
        </div>
        <button >LOGIN</button>
    </div>
    </>);

}
export default Faculty;