import { useState, useEffect } from 'react'
import Joke from '../Joke/Joke'
import JokeForm from '../JokeForm/JokeForm'
import LoadingGif from '../assets/XVo6.gif';


function JokeList() {
  const [jokes, setJokes] = useState([])
  const [loading, setLoading] = useState(false)

  const fetchJokes = async () => {
    setLoading(true)
    try {
      const response = await fetch('http://localhost:3100/Jokes')
      const data = await response.json()
      setJokes(data)
    } catch (error) {
      console.error('Erro ao buscar piadas:', error)
    } finally {
      setLoading(false)
    }
  }

  const addJoke = async (newJoke) => {
    if (jokes.length >= 10) {
      alert('Delete uma piada para adicionar outra!')
      return
    }

    try {
      const response = await fetch('http://localhost:3100/Jokes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newJoke),
      })

      if (response.ok) {
        fetchJokes()
      }
    } catch (error) {
      console.error('Erro ao adicionar piada:', error)
    }
  }

  const removeJoke = async (id) => {
    try {
      await fetch(`http://localhost:3100/Jokes/${id}`, {
        method: 'DELETE',
      });
      fetchJokes()
    } catch (error) {
      console.error('Erro ao deletar piada:', error);
    }
  }

  useEffect(() => {
    fetchJokes()
  }, [])

  return (
      <div>
      <h1>Compass Piadas</h1>
      <JokeForm addJoke={addJoke} />
      {loading ? (
        <div className="loading-container">
          <img src={LoadingGif} alt="Carregando..." className="loading-gif" />
        </div>
      ) : (
        <div>
          {jokes.map((joke) => (
            <Joke key={joke.id} jokeItem={joke} removeJoke={removeJoke} />
          ))}
        </div>
      )}
    </div>
  )
}

export default JokeList;