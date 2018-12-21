import React, {Component} from 'react';
import Message from '../Message/Message.js';
import style from './Chat.css';

export default class Chat extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            messageInput: "",
            messageData: []
        }
    }
    keyChange = event => {
        const {messageData, messageInput} = this.state;
        if (event.key === 'Enter') {
            this.setState({
                messageData: [...messageData, messageInput],
                messageInput: ""

            })
        }
    }

    handleChange = event => {
        this.setState({
            messageInput: event.target.value
        })
    }
    
    render() {
        return(
            <div className="chat">
                <div className="message-list">
                    <div className="messages">
                    {this.state.messageData.map(el => {
                        return <Message id={el} key={el} messageData={el} />
                    })}
                    </div>
                </div>
                
                <input 
                    className="input-message"
                    type="text"
                    onChange={this.handleChange}
                    onKeyPress={this.keyChange}
                    value={this.state.messageInput}
                />
            </div>
        )
    }
}
// https://codepen.io/a810524z/pen/XKoQoB