import { Profile } from './Profile/Profile';
import { FriendList } from './FriendList/FriendList';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <section className="section">
      <div className="container">
        <Profile />
      </div>

      <div className="container">
        <Statistics />
      </div>
      <div className="container">
        <FriendList />
      </div>
      <div className="container">
        <TransactionHistory />
      </div>
    </section>
  );
};
