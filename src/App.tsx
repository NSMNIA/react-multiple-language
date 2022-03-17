import React from 'react'
import { useTranslation } from "react-i18next";
import SelectLanguage from './components/SelectLanguage';

type Props = {}

const App = (props: Props) => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("welcome_to_react")}</h1>
      <p>
        {t("paragraph")}
      </p>
      <SelectLanguage />
    </div>
  )
}

export default App
