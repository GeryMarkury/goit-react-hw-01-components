import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../components/Profile/user.json';
import data from '../components/Statistics/data.json';
import friends from '../components/FriendList/friends.json';
import transactions from '../components/TransactionHistory/transactions.json';
import css from './App.module.css'

export const App = () => {
  return (
    <div className={css.container}>
    <div><Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      /></div>
      <div><Statistics title="Upload stats" stats={data} /></div>
      <div><FriendList friends={friends} /></div>
      <div><TransactionHistory items={transactions} /></div>
    </div>
  );
};
