import React from 'react'

function List({ list, onEvent }) {
if (list.length === 0) {
  return null
}

const head = <div className='list-head'>
    <p>Дата (ДД.ММ.ГГ)</p>
    <p>Пройдено км</p>
    <p>Действия</p>
  </div>


const items = list.map((item) => 
  <li className='list-item' key={item.id} onClick={onEvent}>
    <p>{item.date}</p>
    <p>{item.distance}</p>
    <div>
      <button className='item-edit' data-id={item.id}>✎</button> 
      <button className='item-del' data-id={item.id}>✘</button> 
    </div>
  </li>);

  return (
    <>
    {head}
    <ul className='list'>
      {items}
    </ul>
    </>
  )
}

export default List