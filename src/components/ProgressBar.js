import happy from '../assets/images/party.png'
import sad from '../assets/images/sad.png'

export default function ProgressBar(props) {
    return (
        <div className={props.result !== "" ? "finalBar" : "progressBar"}>
            {props.result === "positive" ?
                <>
                    <span>
                        <img src={happy} alt="" />
                        <h2>Parabéns!</h2>
                    </span>
                    <p>Você não esqueceu de nenhum flashcard!</p>
                </>
                :
                props.result === "negative"?
                <>
                    <span>
                        <img src={sad} alt="" />
                        <h2>Putz...</h2>
                    </span>
                    <p>Ainda faltam alguns...<br/> Mas não desanime!</p>
                </>
                :
                <></>
            }
            {props.children}

            {props.result!==""? <button className="restart" onClick={props.restart} >REINICIAR RECALL</button>:<></>}
        </div>
    )
}