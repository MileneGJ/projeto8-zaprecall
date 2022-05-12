import Questions from './Questions'
import ProgressBar from './ProgressBar'
import Header from './components/Header'

export default function Content () {
    return (
        <div className="container">
            <Header />
            <Questions />
            <ProgressBar />
        </div>
    )
}