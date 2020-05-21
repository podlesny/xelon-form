import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const Languages = ['en', 'de']

const resources = {
  en: {
    translation: {
      "start_message": "Test for free!",
      "register_message": "Sign up and test 30 days for free!",
      "submit_message": "Start now!"
    }
  },
  de: {
    translation: {
      "start_message": "Kostenlos testen!",
      "register_message": "Anmelden und 30 Tage kostenlos testen!",
      "submit_message": "Jetzt starten!"
    }
  }
}

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'de',
    resources,
    debug: true,
    whiteList: Languages,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  })


export default i18n