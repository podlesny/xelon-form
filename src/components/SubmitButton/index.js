import React from 'react'
import PropTypes from 'prop-types'
import { useTranslation } from 'react-i18next';

/**
 * 
 * @param {Props} props
 * Button to submit data
 */
const SubmitButton = ({onClick, visible}) => {
    const { t } = useTranslation()

    return visible ? (
        <a 
            className = 'danger-btn' 
            onClick = {onClick}
        >
            {t('submit_message')}
        </a>
    ):
    <div></div>
}

SubmitButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
}

export default SubmitButton