import { useState } from 'react'
import './Joke.css'

function Joke({ jokeItem, removeJoke }) {
  const [showAnswer, setShowAnswer] = useState(false)

  return (
    <div className="joke">Joke</div>
    
  );
}

export default Joke;