import React from 'react'

import { SUPPORTED_LANGUAGES } from './src/constants/index'
import { I18nextProvider } from 'react-i18next'
import i18n from './services/i18n'
import { Home } from './src/views/Home'

import { NativeModules } from 'react-native'

export default function App(): React.JSX.Element {
   const language = NativeModules.I18nManager.localeIdentifier.split(/[-_]/)[0]
   const isSupportedLanguage = SUPPORTED_LANGUAGES.includes(language)

   if (isSupportedLanguage) {
      i18n.changeLanguage(language)
   } else {
      i18n.changeLanguage('en')
   }

   return (
      <I18nextProvider i18n={i18n}>
         <Home />
      </I18nextProvider>
   )
}
