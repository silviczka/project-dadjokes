import { Joke } from '../Joke/Joke';
import { useEffect, useState } from 'react';

export const JokeList = () => {
  const [jokes, setJokes] = useState([]);
  useEffect(() => {
    const fetchJokes = async () => {
      const response = await fetch(`http://localhost:4000/api/jokes`);
      if (!response.ok) {
        alert('Data nenacteny');
        return;
      }
      const json = await response.json();
      setJokes(json.data);
    };
    fetchJokes();
  }, []);
  return (
    <div className="jokes-container">
      <section>
        <h1>Best Jokes Ever, Or not?</h1>
      </section>
      {jokes.map((joke, index) => (
        <Joke
          key={index}
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
        />
      ))}
    </div>
  );
};
