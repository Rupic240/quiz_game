type QuizImgProps = {
    quizImg: string,
    hideHint: () => void
}

export function QuizImg({ quizImg, hideHint }: QuizImgProps) {
    return (
        <button onClick={hideHint}>
            <img src={quizImg} alt="quiz-image" className="w-36 h-36 rounded-lg my-5" />
        </button>
    )
}
