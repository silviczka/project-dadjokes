import './joke.css';
import { useState } from 'react';

export const Joke = ({ userAvatar, userName, text, likes, dislikes }) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [dislikeCount, setDislikeCount] = useState(dislikes);
  const handleClickLike = () => {
    setLikeCount((old) => {
      return old + 1;
    });
  };
  const handleClickDislike = () => {
    setDislikeCount((old) => {
      return old + 1;
    });
  };
  return (
    <div className="joke">
      <div className="joke__body">
        <div className="joke__user">
          <img className="user-avatar" src={userAvatar} />
          <p className="user-name">{userName}</p>
        </div>

        <p className="joke__text">{text}</p>
      </div>
      <div className="joke__likes">
        <button
          id="btn-up"
          className="btn-like btn-like--up"
          onClick={handleClickLike}
        ></button>
        <span id="likes-up" className="likes-count likes-count--up">
          {likeCount}
        </span>
        <button
          id="btn-down"
          className="btn-like btn-like--down"
          onClick={handleClickDislike}
        ></button>
        <span id="likes-down" className="likes-count likes-count--down">
          {dislikeCount}
        </span>
      </div>
    </div>
  );
};
