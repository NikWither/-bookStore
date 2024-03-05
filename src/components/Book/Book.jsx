import style from './Book.module.css';

import React from 'react'

export default function Book({book, totalPrice}) {
  return (
    <div onClick={() => totalPrice(book)} className={style.book}>
        <div className={style.book__body}>
            <div className={style.book__wrapper}>
                <div className={style.book__info}>
                    <p>{book.id}. Название: «{book.name}»</p>
                </div>
                <div className={style.book__info}>
                    <p>Автор: {book.author}</p>
                </div>
                <div className={style.book__info}>
                    <p>Страна: {book.country}</p>
                </div>
                <div className={style.book__info}>
                    <p>Цена: {book.price} руб.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
