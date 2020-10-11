import React from 'react';
import './Contact.css';

const name = "Theresa Roberts";
const avatar = "https://randomuser.me/api/portraits/women/32.jpg";
const status = true;

function Contact(){
    return(
        <div className="Contact">
            <img src={avatar} className="avatar"></img>
            <div>
                <h4 className="name">{name}</h4>
                <div className="status">
                    <p className="status-text"><span className="status-online"></span>{status ? "Online" : "Offline"}</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;
