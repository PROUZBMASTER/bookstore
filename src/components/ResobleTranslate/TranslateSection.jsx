import React from 'react'
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import { Transale } from '../../utils/Constants';
                                                                    
export default function SelectTransla() {
  const { t } = useTranslation();
  const changeLanguage = (language) => {
    i18next.changeLanguage(language.target.value);
  }
  return (
    <select onChange={changeLanguage} className='mt-2 px-3 text-dark-700 outline-none text-[19px] font-dark bg- border rounded-[15px] sm:mx-4 md:mx-4' name="Translate" id="1">
      {Transale.map((option, index) => {
        return (
          <React.Fragment key={index}>
            <option className='bg-slate-200 border-none ' value={option.value}>{t(option.text)}</option>
          </React.Fragment>
        )
      })}
    </select>
  )
}