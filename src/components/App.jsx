import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics.js'
import FriendList from './FriendList/FriendList.js'
import TransactionHistory from './TransactionHistory/TransactionHistory.js'
import Container from './Container/Container.js'
import user from './Profile/user.json'
import data from '../js/addRandomColor'
import friendsData from './FriendList/friends.json'
import transactions from './TransactionHistory/transactions.json'



export const App = () => {
  return (
    <div>
      <Container><Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      /></Container>
       <Container><Statistics title="Upload stats" stats={data} /></Container>
       <Container><FriendList friends={friendsData} /></Container>
       <Container><TransactionHistory items={transactions}/></Container>
    </div>
  );
};
