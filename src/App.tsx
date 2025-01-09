import { useCallback, useEffect, useState } from "react";
import { QuizImg } from "./QuizImg";
import { QuizText } from "./QuizText";
import words from "./quizList.json";
import { BiBulb } from "react-icons/bi";
import { Balloons } from "./Balloons";

const getWord = () => {
  return words[Math.floor(Math.random() * words.length)];
}

export default function App() {

  const [wordToGuess, setWordToGuess] = useState(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const [isShowHint, setIsShowHint] = useState(false);

  const incorrectLetters = guessedLetters.filter(letter => !wordToGuess.word.includes(letter));
  const isWinner = wordToGuess.word.split('').every(letter => guessedLetters.includes(letter));
  const isLoser = incorrectLetters.length >= 7;

  const addGuessedLetters = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isWinner || isLoser) return
      setGuessedLetters(currentLetters => [...currentLetters, letter])
    },
    [guessedLetters, isWinner, isLoser],
  )

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return
      e.preventDefault()
      addGuessedLetters(key)
    }

    document.addEventListener('keypress', handler)

    return () => {
      document.removeEventListener('keypress', handler)
    }
  }, [guessedLetters])

  useEffect(() => {

    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== 'Enter') return
      e.preventDefault()
      setWordToGuess(getWord())
      setGuessedLetters([])
    }

    document.addEventListener('keydown', handler)

    return () => {
      document.removeEventListener('keydown', handler)
    }
  }, [])

  const toggleShowHideHint = () => {
    setIsShowHint(prev => !prev)
  }

  return (
    <div className="flex flex-col items-center py-5">
      <h1 className="text-3xl font-bold my-5">
        {isWinner && "Winner! - Refresh to try again"}
        {isLoser && "Nice Try - Refresh to try again"}
      </h1>

      <Balloons
        numberOfGuessed={incorrectLetters.length}
      />

      <>
        {
          isShowHint ? (
            <QuizImg quizImg={wordToGuess.img} hideHint={toggleShowHideHint} />
          ) : (
            <button
              className="text-3xl my-5"
              onClick={toggleShowHideHint}
              disabled={isWinner || isLoser}
            >
              <BiBulb />
            </button>
          )
        }
      </>

      <QuizText
        reveal={isLoser}
        wordToGuess={wordToGuess.word}
        guessedLetters={guessedLetters}
      />
    </div>
  )
}