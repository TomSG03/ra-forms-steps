import React, { useState } from 'react'
import InputForm from './InputForm';
import List from './List';
import shortid from 'shortid';

function Steps() {
  const [form, setForm] = useState({id: '', date: '', distance: ''});
  const [distance, setDistance] = useState([
    {
      id: shortid.generate(),
      date: '02.02.22',
      distance: 15
    }, 
    {
      id: shortid.generate(),
      date: '03.03.22',
      distance: 10
    }, 
    ]);

  // function dataExists(form) {
  //   const find = distance.findIndex((item) => item === form[0].value)
  //   return find;
  // }


  function onInput(e) {
    e.preventDefault();
    const form = e.target.form;

    if (form[0].value === '' || form[1].value === '') {
      return
    }
    const exists = distance.findIndex((item) => item.date === form[0].value)
    if (exists !== -1) {
      const copy = Object.assign([], distance);
      copy[exists].distance += +form[1].value;
      setDistance(copy);
    } else {
      // const copy = Object.assign([], distance);
      const copy = [ ...distance, {id: shortid.generate(), date: form[0].value, distance:  form[1].value}]
      copy.sort(function (a, b) {
        if (a.date > b.date) {
          return 1;
        }
        if (a.date < b.date) {
          return -1;
        }
        // a должно быть равным b
        return 0;
      });
      setDistance(copy)
    }
    form[0].value = '';
    form[1].value = '';
  }

  function onEvent(e) {
    // console.log(e.target.classList);
    if (e.target.classList.contains('item-del')) {
      setDistance(prev => prev.filter(o => o.id !== e.target.dataset.id));
    } else {

    }
    
  }

  return (
    <>
      <InputForm form={form} handlerInput={onInput} />
      <List list={distance} onEvent={onEvent}/>
    </>
  )
}

export default Steps