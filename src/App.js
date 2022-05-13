import Welcome from './components/Welcome'
import Content from './components/Content'
import React from 'react'
import './assets/css/reset.css'
import './assets/css/style.css'

export default function App () {
    const [showScreen,setShowScreen] = React.useState(false);

    function appearContent(){
        setShowScreen(true);
    }
    return(
        <>
            {showScreen? <Content /> :<Welcome content={appearContent}/>}
        </>
    )
}