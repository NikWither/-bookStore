import React, { useState, useEffect } from 'react';

import CheckboxFilter from './CheckboxFilter/CheckboxFilter.jsx';
import { SelectSort } from './SelectSort/SelectSort.jsx';

import style from './BookFilter.module.css';

export default function BookFilter({filterBooks, sortBooks, order, books}) {

    const [booksCountries, setBookCountries] = useState([]);

    books.forEach((book) => {
        if (!booksCountries.includes(book.country)) {
            setBookCountries([...booksCountries, book.country])
        }
    })

    return (
        <div className={style.book__filter}>
            
            {/* Sorting section */}

            <div className={style.filter__sort}>
                <p>Сортировать по</p>
                <SelectSort sortBooks={sortBooks} />
            </div>

            {/* Chekbox section */}
            
            <div className={style.filter__filter}>
                <div className={style.filter__wrapper}>

                    <div className={style.filter__radio}>
                        {
                            booksCountries.map((country, index) => (
                                <CheckboxFilter 
                                key={index} 
                                country={country} 
                                number={index}
                                isChecked={false}
                                filterBooks={filterBooks}
                                 />
                            ))
                        }
                        
                    </div>
                </div>
            </div>

        </div>
    )
}


{/* <div onClick={() => sortBooks()} className={style.filter__order}>
<p>Сортировка по цене</p>
<img 
className={style.arrowImg}
src={order ? arrowUp : arrowDown} 
alt="arrow" />
</div>
<button onClick={() => console.log('sadas')} className={style.filter__sort_reset}>Сброс</button> */}