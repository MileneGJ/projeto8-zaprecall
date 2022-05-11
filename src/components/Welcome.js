import React from "react";

export default function Welcome () {
    const [display,setDisplay] = React.useState("flex");
    function appearContent(){
        setDisplay("none");
    }
    return(
        <div style={{display:display}} className="welcome">
            <img src="./images/image 1.png" alt="" />
            <h1>ZapRecall</h1>
            <button onClick={appearContent}>Iniciar Recall!</button>
        </div>
    )
}