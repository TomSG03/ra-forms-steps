import React from 'react'

function InputForm({form, handlerInput}) {
  function onChange() {
    
  }

  return (
    <form className='input-form'>
      <div className='form-date'>
        <label htmlFor="Date">Дата (ДД.ММ.ГГ)</label>
        <input value={form.date} type='text' onChange={onChange}/>  
      </div>
      <div className='form-distance'>
      <label htmlFor="Date">Пройдено км</label>
        <input value={form.distance} type='text' onChange={onChange}/>  
      </div>
      <button className='btn-ok' onClick={handlerInput}>OK</button>
    </form>
  )
}

export default InputForm