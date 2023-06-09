import PropTypes from 'prop-types';
import css from './Profile.module.css'

export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes }, }) => {
    return (<div className={css.profile}>
        <div className="description">
            <img
                src={avatar}
                alt="User avatar"
                className={css.avatar}
            />
            <p className={css.name}>{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>

        <ul className={css.stats}>
            <li className={css.statsItem}>
                <span className={css.label}>Followers</span>
                <span className={css.quantity}>{followers}</span>
            </li>
            <li className={css.statsItem}>
                <span className={css.label}>Views</span>
                <span className={css.quantity}>{views}</span>
            </li>
            <li className={css.statsItem}>
                <span className={css.label}>Likes</span>
                <span className={css.quantity}>{likes}</span>
            </li>
        </ul>
    </div>)
};

Profile.propTypes = {
  avatar: PropTypes.string,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
