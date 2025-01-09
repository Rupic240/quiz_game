type QuizTextProps = {
    wordToGuess: string,
    guessedLetters: string[],
    reveal?: boolean,
}

export function QuizText({ wordToGuess, guessedLetters, reveal = false }: QuizTextProps) {
    return (
        <div className="flex gap-5">
            {wordToGuess.split('').map((letter, index) => {
                return (
                    <span key={index} className="w-10 h-14 border-b-4 text-center text-5xl font-bold uppercase">
                        <span className={`
                            ${guessedLetters.includes(letter) || reveal ? 'visible' : 'hidden'}
                            ${!guessedLetters.includes(letter) && reveal ? 'text-red-600' : 'text-white'} 
                        `}>
                            {letter}
                        </span>
                    </span>
                )
            })}
        </div>
    )
}
