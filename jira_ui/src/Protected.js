import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props) => {
    const history = useNavigate();
    let Cmp = props.Cmp

    useEffect(()=> {

if(!localStorage.getItem('isLoggedIn'))
{
   
    history("/login")
}

    }, [])

return (
    <div>

        <Cmp/>
    </div>
);
}

export default Protected;