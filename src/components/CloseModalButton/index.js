import React from 'react'
import PropTypes from 'prop-types';
import './styles.css'


/**
 * 
 * @param {Props} props
 * Button that closes modal window
 */
const CloseModalButton = ({onClick}) => {
    return (
        <button 
            title="Close (Esc)" 
            type="button" 
            className="mfp-close"
            onClick = {onClick}
            >×
        </button>
    )
}

CloseModalButton.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default CloseModalButton