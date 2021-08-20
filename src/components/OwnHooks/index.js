import React, { useState, useEffect } from 'react';

export default function FriendListItem(props) {

    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {

        function handleStatusChange(status) {

            setIsOnline(status.isOnline);

        }

       // ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

        return () => {

           // ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
        };
    });

    return (
        <li style={{ color: isOnline ? 'green' : 'black' }}>
           
        </li>
    );
}