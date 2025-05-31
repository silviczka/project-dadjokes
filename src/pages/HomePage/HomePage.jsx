import './style.css';
import { JokeList } from '../../components/JokeList/JokeList';

export const HomePage = () => {
  return (
    <div className="container">
      <JokeList />
    </div>
  );
};
