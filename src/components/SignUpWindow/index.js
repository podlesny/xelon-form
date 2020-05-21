import React, { useState } from 'react'
import './styles.css';
import Modal from 'react-modal';
import EmailInput from '../EmailInput'
import SubmitButton from '../SubmitButton'
import CloseModalButton from '../CloseModalButton'
import {useHttp} from '../../hooks/http.hook'
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie'
import { API_URL } from '../../constants'
import PropTypes from 'prop-types';


/**
 * 
 * @param {Props} props
 * Modal window component 
 */
const SignUpWindow = ({modalOpen, closeModalHandler}) => {

    const {request} = useHttp()

    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [submitVisible, setSubmitVisible] = useState(true)
    const { t } = useTranslation()

    /**
     * 
     * @param {event} event 
     * Change email state
     */
    const handleChange = event => {
        setEmail(event.target.value)
    }

    /**
     * Submit data to backend, recieve response and display it
     */
    const submitData = async () => {
        const url = `${API_URL}/user/trial/subscribe`
        const referrer = Cookies.get('referrer')
        let response
        try{
            response = await request(url, 'POST', {email, referrer})
        }
        catch(e){
            setError(e.message)
            setMessage('')
        }
        if(response.error){
            if(response.error.email){
                setError(response.error.email)
                setMessage('')
            }
            else{
                setError(response.error)
                setMessage('')
            }
        }
        else{
            setSubmitVisible(false)
            setError('')
            setMessage(response.message)
        }
    }

    return (
        <div>
            <Modal
                isOpen={modalOpen}
                className = "sign-up-window"
                contentLabel="Example Modal"
            >
                <div className = 'modal-bold-header'>{t('register_message')}</div>
                <div className = 'modal-content'>
                    <EmailInput 
                        onChange = {handleChange}
                        message = {message}
                        error = {error}
                    />
                    <SubmitButton 
                        onClick = {submitData}
                        visible = {submitVisible}
                    />
                </div>
                <CloseModalButton onClick = {closeModalHandler}/>
            </Modal>
        </div>
        
    )
}

SignUpWindow.propTypes = {
    modalOpen: PropTypes.bool.isRequired,
    closeModalHandler: PropTypes.func.isRequired
}

export default SignUpWindow