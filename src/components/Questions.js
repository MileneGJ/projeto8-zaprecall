import SingleQuestion from "./SingleQuestion"

export default function Questions({deck, setCounter, counter, progress}) {

    function comparador() {
        return Math.random() - 0.5;
    }
    let randomDeck = deck.sort(comparador);

    return (
        <ul className="questions">
            {randomDeck.map((QetA, index) =>
                <SingleQuestion
                    addProgress={progress}
                    counter={counter}
                    setCounter={setCounter}
                    key={index}
                    index={index}
                    question={QetA.question}
                    answer={QetA.answer}
                />)}
        </ul>
    )
}