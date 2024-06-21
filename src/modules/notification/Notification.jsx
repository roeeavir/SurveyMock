import React from 'react';
import './Notification.css';

const Notification = ({text, style}) => {
    return (
        <div className='notification' style={style}>
            {text}
        </div>
    );
};

export default Notification;