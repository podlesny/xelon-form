import React from 'react'
import PropTypes from 'prop-types'
import './styles.css'
import { useTranslation } from 'react-i18next'

/**
 * 
 * @param {Props} props 
 * Button that shows modal window
 */
const ShowModalButton = ({onClick}) => {

    const { t } = useTranslation()

    return (
        <a 
            className = 'danger-btn' 
            onClick = {onClick}
        >
            {t('start_message')}
        </a>
    )
}

ShowModalButton.propTypes = {
    onClick: PropTypes.func.isRequired,
}

export default ShowModalButton