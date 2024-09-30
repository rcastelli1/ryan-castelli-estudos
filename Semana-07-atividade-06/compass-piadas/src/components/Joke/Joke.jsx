import { useState } from 'react'
import './Joke.css'

function Joke({ jokeItem, removeJoke }) {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <div className="joke">
      <p>{jokeItem.joke}</p>
      {showAnswer && <p className="response">{jokeItem.response}</p>}
      <button onClick={() => setShowAnswer(!showAnswer)}>
        {showAnswer ? 'Esconder resposta' : 'Ver resposta'}
      </button>
      <button onClick={() => removeJoke(jokeItem.id)} className="delete-btn">Delete</button>
    </div>
    
  );
}

export default Joke;