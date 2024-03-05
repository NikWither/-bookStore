import React, { useState } from 'react'
import style from './CheckboxFilter.module.css';

export default function CheckboxFilter({country, number, isChecked, filterBooks}) {

  const [chooseCountry, setchooseCountry] = useState(false);

  const getChecked = (target) => {
    setchooseCountry(!chooseCountry);
    filterBooks(target.value, target.checked);
  }

  return (
    <div className={style.checkboxSection}>
      <div className={style.checkboxSection__item}></div>
        <input 
        onChange={(event) => getChecked(event.target)} 
        type="checkbox" 
        id={number} 
        value={country} 
        checked={chooseCountry}
        className={style.checkboxSection__input}
         />
        <label className={style.checkboxSection__label}>{country}</label>
    </div>
  )
}
