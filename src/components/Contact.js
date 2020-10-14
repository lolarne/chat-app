import React from 'react';
import './Contact.css';
import PropTypes from 'prop-types';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            online: false,
        };
    };

    render() {
        return (
            <div className="Contact">
                <img src={this.props.avatar} className="avatar"></img>
                <div>
                    <h4 className="name">{this.props.name}</h4>
                    <div className="status">
                        <p><span className={this.state.online ? "status-online" : "status-offline"}
                        onClick={event => {
                            const newOnline = !this.state.online;
                            this.setState({online: newOnline});
                        }}>
                        </span>{this.state.online ? "Online" : "Offline"}</p>
                    </div>
                </div>
            </div>
        )
    }
}


Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    state: PropTypes.bool.isRequired,
}

export default Contact;
