import React, {Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import WebFont from 'webfontloader';
import './i18next'

WebFont.load({
    google: {
        families: ['Manrope:500,600,700', 'sans-serif']
    }
});

ReactDOM.render(
    <Suspense fallback = {(<div>Loading...</div>)}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Suspense>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
