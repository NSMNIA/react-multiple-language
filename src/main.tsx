import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';


import './index.css'
import App from './App'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs: ['en', 'es'],
    fallbackLng: "en",
    detection: {
      order: ['cookie', 'htmlTag', 'localStorage', 'sessionStorage', 'path', 'subdomain'],
      caches: ['cookie']
    },
    backend: {
      loadPath: "./assets/locales/{{lng}}/translation.json",
    }
  });

const loadingMarkup = (
  <div>
    Loading...
  </div>
)

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
)
