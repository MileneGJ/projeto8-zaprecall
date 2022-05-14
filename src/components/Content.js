import Questions from './Questions'
import ProgressBar from './ProgressBar'
import Header from './Header'
import React from 'react'

export default function Content() {
    const deck = [{
        question: "O que é JSX?",
        answer: "Uma extensão de linguagem do JavaScript"
    }, {
        question: "O React é __",
        answer: "Uma biblioteca JavaScript para construção de interfaces"
    }, {
        question: "Componentes devem iniciar com __",
        answer: "Letra maiúscula"
    }, {
        question: "Podemos colocar __ dentro do JSX",
        answer: "Expressões"
    }, {
        question: "O ReactDOM nos ajuda __",
        answer: "Interagindo com a DOM para colocar componentes React na mesma"
    }, {
        question: "Usamos o npm para __",
        answer: "Gerenciar os pacotes necessários e suas dependências"
    }, {
        question: "Usamos props para __",
        answer: "Passar diferentes informações para componentes"
    }, {
        question: "Usamos estado (state) para __",
        answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"
    }];

    const [trackedProgress, setTrackedProgress] = React.useState([])
    let progressArray = []
    const [finalResult, setFinalResult] = React.useState("")

    function addProgress(type) {
        switch (type) {
            case "wrong":
                progressArray=[...trackedProgress,"close-circle"];
                setTrackedProgress(progressArray);
                verifyFinal()
                break
            case "almost":
                progressArray=[...trackedProgress,"help-circle"];
                setTrackedProgress(progressArray);
                verifyFinal()
                break
            case "right":
                progressArray=[...trackedProgress,"checkmark-circle"];
                setTrackedProgress(progressArray);
                verifyFinal()
                break
            default:
                break
        }
    }

    function verifyFinal() {
        if (progressArray.length === deck.length && progressArray.includes("close-circle")) {
            setFinalResult("negative");
        }
        if (progressArray.length === deck.length && !progressArray.includes("close-circle")) {
            setFinalResult("positive");
        }
    }


    return (
        <div className="container">
            <Header />
            <Questions
                progress={addProgress}
                deck={deck} />
            <ProgressBar result={finalResult}>
                <p>{trackedProgress.length}/{deck.length} CONCLUÍDOS </p>
                <div className='trackedProgress'>
                    {trackedProgress.map((name, index) => <ion-icon key={index} name={name} ></ion-icon>)}
                </div>
            </ProgressBar>
        </div>
    )
}