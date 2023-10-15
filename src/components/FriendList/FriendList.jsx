import friends from '../../data/friends.json';
import css from './FriendList.module.css';
export const FriendList = () => {
  return (
    <FriendListHtml
      avatar={friends.map(friend => friend.avatar)}
      name={friends.map(friend => friend.name)}
      isOnline={friends.map(friend => friend.isOnline)}
    />
  );
};

const FriendListHtml = ({ avatar, name, isOnline }) => {
  return (
    <ul className={css.friendList}>
      {avatar.map((avatarUrl, index) => (
        <li key={index} className={css.item}>
          {isOnline[index] ? (
            <span className={css.statusOn}></span>
          ) : (
            <span className={css.statusOf}></span>
          )}
          <img
            className={css.avatar}
            src={avatarUrl}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{name[index]}</p>
        </li>
      ))}
    </ul>
  );
};
