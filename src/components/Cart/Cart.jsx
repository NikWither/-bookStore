import React from 'react'

export default function Cart({ordersPrice}) {
  return (
    <div>
        <p><b>Общая стоимость</b></p>
        <p>{ordersPrice} руб.</p>
    </div>
  )
}
