import React, {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import ShowModalButton from "./components/ShowModalButton"
import SignUpWindow from "./components/SignUpWindow"
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';

Modal.setAppElement('#root');

/**
 * Parent component
 */
function App() {
    const [modalOpen,setModalOpen] = useState(false)
    const [locale, setLocale] = useState('de')
    const { t, i18n } = useTranslation()

    /**
     * Open modal window
     */
    const openModal = () => {
        setModalOpen(true)
    }

    /**
     * Close modal window
     */
    const closeModal = () => {
        setModalOpen(false)
    }

    /**
     * 
     * @param {event} event 
     * Change locale
     */
    const changeLocaleHandler = event => {
        setLocale(event.target.value)
        i18n.changeLanguage(event.target.value)
    }

    return (
        <div className="App">
            <header className="App-header">
                <select onChange={changeLocaleHandler} value={locale}>
                    <option value = 'de'>Deutsch</option>
                    <option value = 'en'>English</option>
                </select>
                <ShowModalButton onClick = {openModal}/>
                <SignUpWindow 
                    modalOpen = {modalOpen}
                    closeModalHandler = {closeModal}
                />
            </header>
        </div>
    )
}

export default App
