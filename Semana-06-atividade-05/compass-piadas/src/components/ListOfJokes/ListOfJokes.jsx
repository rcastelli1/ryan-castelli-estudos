import { useState, useEffect } from 'react';
import jokesJson from '../data/piadas.json';
import Joke from '../Joke/Joke';
import JokeForms from '../JokeForms/JokeForms';

function JokeList() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    setJokes(jokesJson);
  }, []);

  const addJoke = (newJoke) => {
    if (jokes.length >= 10) {
      alert('Delete uma piada para adicionar outra!');
      return;
    }
    setJokes([...jokes, newJoke]);
  };

  const removeJoke = (id) => {
    setJokes(jokes.filter(joke => joke.id !== id));
  };

  return (
    <div>
      <h1>Compass piadas</h1>
      <JokeForms addJoke={addJoke} />
      <div>
        {jokes.map(joke => (
          <Joke key={joke.id} jokeItem={joke} removeJoke={removeJoke} />
        ))}
      </div>
    </div>
  );
}

export default JokeList;
