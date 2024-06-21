import React from 'react';
import Notification from './Notification';

const NotLoggedNotification = () => {
    return (
        <Notification text={"Please log in to continue"}
            style={{color: "red", fontWeight: "600", fontSize: "2rem", textAlign: "center"}}
        />
    );
};

export default NotLoggedNotification;