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

    let progressArray = [];
    let finalResult = "";

    const [trackedProgress, setTrackedProgress] = React.useState({
        progress: progressArray,
        result: finalResult
    })

   function addProgress(type) {
        switch (type) {
            case "wrong":
                progressArray = [...trackedProgress.progress, "close-circle"];
                setTrackedProgress({
                    progress: progressArray,
                    result: finalResult
                });
                verifyFinal()
                break
            case "almost":
                progressArray = [...trackedProgress.progress, "help-circle"];
                setTrackedProgress({
                    progress: progressArray,
                    result: finalResult
                });
                verifyFinal()
                break
            case "right":
                progressArray = [...trackedProgress.progress, "checkmark-circle"];
                setTrackedProgress({
                    progress: progressArray,
                    result: finalResult
                });
                verifyFinal()
                break
            default:
                break
        }
    }

    function verifyFinal() {
        if (progressArray.length === deck.length && progressArray.includes("close-circle")) {
            finalResult = "negative";
            setTrackedProgress({
                progress: progressArray,
                result: finalResult
            });
        }
        if (progressArray.length === deck.length && !progressArray.includes("close-circle")) {
            finalResult = "positive";
            setTrackedProgress({
                progress: progressArray,
                result: finalResult
            });
        }
    }

    function restartRecall() {
        progressArray = [];
        finalResult = "";
        setTrackedProgress({
            progress: progressArray,
            result: finalResult
        });
    }


    return (
        <div className="container">
            <Header />
            <Questions
                progress={addProgress}
                deck={deck} />
            <ProgressBar result={trackedProgress.result} restart={restartRecall}>
                <p>{trackedProgress.progress.length}/{deck.length} CONCLUÍDOS </p>
                <div className='trackedProgress'>
                    {trackedProgress.progress.map((name, index) => <ion-icon key={index} name={name} ></ion-icon>)}
                </div>
            </ProgressBar>
        </div>
    )
}