import { useState } from 'react';
import './JokeForm.css';

// eslint-disable-next-line react/prop-types
function JokeForm({ addJoke }) {
  const [jokeText, setJokeText] = useState('');
  const [answerText, setAnswerText] = useState('');

  const handleAddJoke = () => {
    if (!jokeText || !answerText) return;

    const newJoke = {
      id: Date.now().toString(),
      joke: jokeText,
      response: answerText,
    };

    addJoke(newJoke);
    setJokeText('');
    setAnswerText('');
  };

  return (
    <div className="joke-forms">
      <input type="text" placeholder="Coloque a nova piada" value={jokeText} onChange={(e) => setJokeText(e.target.value)}
      />
      <input type="text" placeholder="Coloque sua resposta" value={answerText} onChange={(e) => setAnswerText(e.target.value)}
      />
      <button onClick={handleAddJoke} className="add-btn">Adicionar nova piada</button>
    </div>
  );
}

export default JokeForm;
