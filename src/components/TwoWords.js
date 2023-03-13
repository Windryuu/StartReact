function TwoWords(){
    let wordone = 'first word'
    let wordtwo = 'second word'
    return(
        <div>
            <p> this idiot messed up the code so the {wordtwo} is here before {wordone}</p>
            <p> concat doesn't give us a "third word" but {wordtwo + ' ' + wordone} </p>
        </div>
    )
}

export default TwoWords;