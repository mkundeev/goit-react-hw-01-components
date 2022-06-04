import Profile from './Profile/Profile'
import Statistics from './Statistics/Statistics.js'
import FriendList from './FriendList/FriendList.js'
import user from './Profile/user.json'
import data from '../js/addRandomColor'
import friendsData from '../components/FriendList/friends.json'

console.log(friendsData)

export const App = () => {
  return (
    <div>
      <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friendsData}/>
    </div>
  );
};
