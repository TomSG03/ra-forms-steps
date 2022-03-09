import React, { useState } from 'react'
import InputForm from './InputForm';
import List from './List';
import shortid from 'shortid';

function valid(forms) {
  if (forms.date === '' || forms.distance === '') {
    return false;
  }
  if (!forms.date.match(/^([0]?[1-9]|[1|2][0-9]|[3][0|1])[.]([0]?[1-9]|[1][0-2])[.]([0-9]{4}|[0-9]{2})$/)) {
    return false;
  }
  return true;
}

function Steps() {
  const [forms, setForms] = useState({ id: '', date: '', distance: '' });
  const [distance, setDistance] = useState([]);


  function handlerOK(e) {
    e.preventDefault();

    if (valid(forms)) {
      const exists = distance.findIndex((item) => item.date === forms.date)
      if (exists !== -1) {
        const copy = [...distance];
        copy[exists].distance = Number(copy[exists].distance) + Number(forms.distance);
        setDistance(copy);
      } else {
        const copy = [...distance, { id: shortid.generate(), date: forms.date, distance: forms.distance }]
        copy.sort((a, b) => new Date(b.date) - new Date(a.date));
        setDistance(copy)
      }
      setForms({ date: '', distance: '' })
    }
  }

  function onEvent({ target }) {
    if (target.classList.contains('item-del')) {
      setDistance(prev => prev.filter(o => o.id !== target.dataset.id));
    } else {
      console.log(target.dataset.id);
      const edit = distance.findIndex((item) => item.id === target.dataset.id)
      setForms({ date: distance[edit].date, distance: distance[edit].distance })
    }
  }

  function handlerInput({ target }) {
    console.log(target.dataset.name);
    setForms((prev) => {
      if (target.dataset.name === 'date') {
        return { ...prev, date: target.value };
      }
      if (target.dataset.name === 'distance') {
        return { ...prev, distance: target.value };
      }
    })
  }

  return (
    <>
      <InputForm forms={forms} handlerInput={handlerInput} handlerOK={handlerOK} />
      <List list={distance} onEvent={onEvent} />
    </>
  )
}

export default Steps
