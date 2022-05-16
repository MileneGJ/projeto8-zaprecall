import SingleQuestion from "./SingleQuestion"
import React from "react";

export default function Questions({ deck, progress }) {
    
    const [closedQuestions,setClosedQuestions] = React.useState([])

    function closeQuestion(question,Qindex) {
        setClosedQuestions([...closedQuestions,{
            name:question,
            index:Qindex
        }]);
    }
    
    function fixClosedQuestions(deck) {
        if (closedQuestions.length > 0) {
            for(let i=0;i<closedQuestions.length;i++){
                for(let j=0;j<deck.length;j++){
                    if(closedQuestions[i].name===deck[j].question){
                        let aux = deck[closedQuestions[i].index];
                        deck[closedQuestions[i].index] = deck[j];
                        deck[j]=aux;
                    }
                }
            }
        }
        return deck;
    }

    function comparador() {
        return Math.random() - 0.5;
    }
    
    let randomDeck = deck.sort(comparador);
    let finalDeck = fixClosedQuestions(randomDeck);

    return (
        <ul className="questions">
            {finalDeck.map((QetA, index) =>
                <SingleQuestion
                    addProgress={progress}
                    closeQuestion={closeQuestion}
                    key={index}
                    index={index}
                    question={QetA.question}
                    answer={QetA.answer}
                />)}
        </ul>
    )
}