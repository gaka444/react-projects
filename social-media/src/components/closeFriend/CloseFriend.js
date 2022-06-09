import React from 'react';

function CloseFriend({user}) {
    return (
        <li className='sidebarFriend'>
            <img className='sidebarFriendImg' src={user.profilePicture} alt="Jane doe" />
            <span className='sidebarFriendName'>{user.username}</span>
        </li>
    );
}

export default CloseFriend;