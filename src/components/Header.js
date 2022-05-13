import logo from '../assets/images/image 2.png'

export default function Header () {
    return (
        <span className="header">
            <img src={logo} alt="" />
            <h1>ZapRecall</h1>
        </span>
    )
}