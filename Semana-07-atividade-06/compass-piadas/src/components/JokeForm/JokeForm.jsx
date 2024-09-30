import { useState } from 'react'
import './JokeForm.css'

function JokeForm({ addJoke }) {
  const [jokeText, setJokeText] = useState('')
  const [answerText, setAnswerText] = useState('')

  const handleAddJoke = () => {
    if (!jokeText || !answerText) return;

    const newJoke = {
      joke: jokeText,
      response: answerText,
    }

    addJoke(newJoke)
    setJokeText('')
    setAnswerText('')
  }

  const buttonDisabled = !jokeText || !answerText;

  return (
    <div className="joke-forms">
      <input type="text" placeholder="Coloque a nova piada" value={jokeText} onChange={(e) => setJokeText(e.target.value)}/>
      <input type="text" placeholder="Coloque sua resposta" value={answerText} onChange={(e) => setAnswerText(e.target.value)}/>
      <button onClick={handleAddJoke} className={`add-btn ${buttonDisabled ? 'disabled' : ''}`} disabled={buttonDisabled}> Adicionar nova piada </button>
    </div>
  );
}

export default JokeForm;