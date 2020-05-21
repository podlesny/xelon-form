import React from 'react'
import PropTypes from 'prop-types';
import './styles.css'

/**
 * 
 * @param {Props} Props
 * E-mail input 
 */
const EmailInput = ({onChange, error, message}) => {
    return (
        <div>
            <input 
                type="text"
                id="send_email"
                name="subscribe-email"
                className="modal-input"
                placeholder="Email *"
                required="required"
                onChange = {onChange}
                autoFocus
            />
            <div className = 'message'>{message}</div>
            <div className = 'message error-message'>{error}</div>
        </div>
        
    )
}

EmailInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    message: PropTypes.string,
}

export default EmailInput