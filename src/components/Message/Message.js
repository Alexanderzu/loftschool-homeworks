import React, {Component} from 'react';
import style from './Message.css';

export default function Message(props)  {
    return(
        <div className="message">
            {props.messageData}
        </div>
    )
}
