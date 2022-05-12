import Questions from './Questions'
import ProgressBar from './ProgressBar'
import Header from './Header'

export default function Content () {
    return (
        <div className="container">
            <Header />
            <Questions />
            <ProgressBar />
        </div>
    )
}