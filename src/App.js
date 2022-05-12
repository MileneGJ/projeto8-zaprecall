import Welcome from './components/Welcome'
import Content from './components/Content'
import React from 'react'

export default function App () {
    const [showScreen,setShowScreen] = React.useState(false);

    function appearContent(){
        setShowScreen(true)
    }
    return(
        <>
            {showScreen? <Content /> :<Welcome content={appearContent}/>}
            
        </>
    )
}