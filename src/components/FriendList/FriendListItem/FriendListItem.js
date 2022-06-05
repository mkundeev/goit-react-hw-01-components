import PropTypes from 'prop-types';
import s from './FriendListItem.module.css'

function FriendListItem({avatar, isOnline, name}) {
    return <>
  
  <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
        <div className={s.wrap}><span className= {isOnline ? `${s.isOnline}`: `${s.isOffline}`}></span>
        <p className={s.name}>{name}</p></div>
</>
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,  
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
};



    export default FriendListItem;