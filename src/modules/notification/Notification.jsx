import React from 'react';
import './Notification.css';

const Notification = ({text}) => {
    return (
        <div className='notification'>
            {text}
        </div>
    );
};

export default Notification;