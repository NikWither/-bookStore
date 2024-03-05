import React from 'react'

export const SelectSort = ({sortBooks}) => {

    return (
        <div>
            <select name="choice" onChange={(event) => sortBooks(event.target.value)}>
                <option value="default">По умолчанию</option>
                <option value="priceDown">По убыванию цены</option>
                <option value="priceUp">По возрастанию цены</option>
            </select>
        </div>
    )
}
