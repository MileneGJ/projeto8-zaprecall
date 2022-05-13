import logo from '../assets/images/image 1.png'

export default function Welcome ({content}) {

    return(
        <div className="welcome">
            <img src={logo} alt="" />
            <h1>ZapRecall</h1>
            <button onClick={content}>Iniciar Recall!</button>
        </div>
    )
}