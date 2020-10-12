import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

function Contact(props){
    return(
        <div className="Contact">
            <img src={props.avatar} className="avatar"></img>
            <div>
                <h4 className="name">{props.name}</h4>
                <div className="status">
                    <p><span className={props.status ? "status-online" : "status-offline"}></span>{props.status ? "Online" : "Offline"}</p>
                </div>
            </div>
        </div>
    )
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired,
}

export default Contact;