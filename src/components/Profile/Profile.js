import PropTypes from 'prop-types';
import s from './Profile.module.css'


function Profile({avatar, username, tag, location, stats}) {
    return <div className={s.profile}>
  <div className={s.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={s.avatar}
    />
    <p className={s.name}>{username}</p>
    <p className={s.tag}>{tag}</p>
    <p className={s.location}>{location}</p>
  </div>

  <ul className={s.statsList}>
    <li>
      <span className="label">Followers</span>
      <span className={s.statsQuantity}>{stats.followers}</span>
    </li>
    <li>
      <span className="label">Views</span>
      <span className={s.statsQuantity}>{stats.views}</span>
    </li>
    <li>
      <span className="label">Likes</span>
      <span className={s.statsQuantity}>{stats.likes}</span>
    </li>
  </ul>
</div>
}
  
Profile.propTypes = {
    avatar: PropTypes.string.isRequired,  
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number).isRequired,
};



    export default Profile;