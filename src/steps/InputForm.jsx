import React from 'react';
import PropTypes from 'prop-types';

function InputForm({forms, handlerInput, handlerOK}) {

  return (
    <form className='input-form'>
      <div className='form-date'>
        <label htmlFor="Date">Дата (ДД.ММ.ГГ)</label>
        <input data-name='date' value={forms.date} type='text' onChange={handlerInput} required/>  
      </div>
      <div className='form-distance'>
      <label htmlFor="Date">Пройдено км</label>
        <input data-name='distance' value={forms.distance} type='number' onChange={handlerInput} required/>  
      </div>
      <button className='btn-ok' onClick={handlerOK}>OK</button>
    </form>
  )
}

InputForm.prototype = {
  InputForm: PropTypes.object,
  handlerInput: PropTypes.func,
  handlerOK: PropTypes.func,
} 

export default InputForm