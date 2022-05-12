export default function Welcome ({content}) {

    return(
        <div className="welcome">
            <img src="./images/image 1.png" alt="" />
            <h1>ZapRecall</h1>
            <button onClick={content}>Iniciar Recall!</button>
        </div>
    )
}