import PropTypes from 'prop-types';
import s from './FriendList.module.css'
import FriendListItem from './FriendListItem/FriendListItem.js';

function FriendList({friends}) {
    return <ul className={s.list}>
        { friends.map(friend => 
        (<li className={s.item} key={friend.id}>
            <FriendListItem
                avatar={friend.avatar}
                isOnline={friend.isOnline}
                name={friend.name}
            />
        </li>)
        )}
</ul>
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })).isRequired,
    
};
    export default FriendList;