import React from "react";

export default function Questions() {
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

    const infoButtons = [{
        name: "Não lembrei",
        color: "#FF3030"
    }, {
        name: "Quase não lembrei",
        color: "#FF922E"
    }, {
        name: "Zap!",
        color: "#2FBE34"
    }];

    function comparador() {
        return Math.random() - 0.5;
    }
    let randomDeck = deck.sort(comparador);


    function Question({ index, question, answer }) {
        const [statusCard, setStatusCard] = React.useState({
            showCard:false,
            showAnswer:false,
            closed:false,
            zap:false,
            almost:false
        });

        function appearQuestion() {
            setStatusCard(previousState => ({ ...previousState, showCard:true }));
        }

        function appearAnswer() {
            setStatusCard(previousState => ({ ...previousState, showAnswer:true }));
        }

        function closeCard(type) {
            switch (type) {
                case 0:
                    setStatusCard(previousState => ({ ...previousState, 
                        showCard:false, 
                        showAnswer:false,
                        closed:true }));
                    break;
                case 1:
                    setStatusCard(previousState => ({ ...previousState, 
                        showCard:false, 
                        showAnswer:false,
                        closed:true,
                        zap:true,
                        almost:true }));
                    break;
                case 2:
                    setStatusCard(previousState => ({ ...previousState, 
                        showCard:false, 
                        showAnswer:false,
                        closed:true,
                        zap:true }));
                    break;
                default:
                    break;
            }
        }

        return (
            <li className={statusCard.showCard ? "aberta" : "fechada"} >
                {statusCard.showCard ?
                    statusCard.showAnswer ?
                        <>
                            <p>{answer}</p>
                            <span>
                                {infoButtons.map((button, index) =>
                                    <button key={index} onClick={() => closeCard(index)} style={{ background: button.color }}>{button.name}</button>)}
                            </span>
                        </>
                        :
                        <>
                            <p>{question}</p>
                            <img onClick={appearAnswer} src="./images/Vector.png" alt="" />
                        </>
                    :
                    statusCard.closed ?
                    statusCard.zap ?
                    statusCard.almost ?
                                <>
                                    <h2 className="answered" style={{ color: "#FF922E" }}>Pergunta {index + 1}</h2>
                                    <ion-icon name="help-circle"></ion-icon>
                                </>
                                :
                                <>
                                    <h2 className="answered" style={{ color: "#2FBE34" }}>Pergunta {index + 1}</h2>
                                    <ion-icon name="checkmark-circle"></ion-icon>
                                </>
                            :
                            <>
                                <h2 className="answered" style={{ color: "#FF3030" }}>Pergunta {index + 1}</h2>
                                <ion-icon name="close-circle"></ion-icon>
                            </>
                        :
                        <>
                            <h2 onClick={appearQuestion}>Pergunta {index + 1}</h2>
                            <ion-icon onClick={appearQuestion} name="play-outline"></ion-icon>
                        </>
                }
            </li>
        )
    }


    return (
        <ul className="questions">
            {randomDeck.map((QetA, index) =>
                <Question
                    key={index}
                    index={index}
                    question={QetA.question}
                    answer={QetA.answer}
                />)}
        </ul>
    )
}