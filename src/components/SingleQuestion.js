import React from "react";
import turnArrow from '../assets/images/Vector.png'

export default function SingleQuestion({ index, question, answer, addProgress, closeQuestion}) {
    const infoButtons = [{
        type:"wrong",
        name: "Não lembrei",
        color: "#FF3030"
    }, {
        type:"almost",
        name: "Quase não lembrei",
        color: "#FF922E"
    }, {
        type:"right",
        name: "Zap!",
        color: "#2FBE34"
    }];

    const [statusCard,setStatusCard] = React.useState({
        showCard: false,
        showAnswer: false,
        closed: false,
        zap: false,
        almost: false
    });

    function appearQuestion() {
        setStatusCard({ ...statusCard, showCard: true });
    }

    function appearAnswer() {
        setStatusCard({ ...statusCard, showAnswer: true });
    }

    function closeCard(type, question, Qindex) {
        closeQuestion(question, Qindex);
        addProgress(type);
        switch (type) {
            case "wrong":
                setStatusCard({
                    ...statusCard,
                    showCard: false,
                    showAnswer: false,
                    closed: true
                });

                break;
            case "almost":
                setStatusCard({
                    ...statusCard,
                    showCard: false,
                    showAnswer: false,
                    closed: true,
                    zap: true,
                    almost: true
                });

                break;
            case "right":
                setStatusCard({
                    ...statusCard,
                    showCard: false,
                    showAnswer: false,
                    closed: true,
                    zap: true
                });

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
                            {infoButtons.map((button, Bindex) =>
                                <button key={Bindex} onClick={() => closeCard(button.type,question,index)} style={{ background: button.color }}>{button.name}</button>)}
                        </span>
                    </>
                    :
                    <>
                        <p>{question}</p>
                        <img onClick={appearAnswer} src={turnArrow} alt="" />
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