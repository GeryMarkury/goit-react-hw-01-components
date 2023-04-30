import { FriendListItem } from './FriendListItem/FriendListItem'
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {friends.map(({ id, name, avatar, isOnline }) => <FriendListItem key={id} name={name} avatar={avatar} isOnline={isOnline} />)}
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    })),
};