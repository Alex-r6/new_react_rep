import React, { useState } from 'react'
import { useValue } from '../../hooks/useValue';


export const Message = () => {

  const nameControl = useValue('Robert')
  const ageControl = useValue(16, {type : 'number', max : 120, min : 0})
  const heightControl = useValue(20, {type : 'number', max : 260, min : 0})

  return (
    <div>
      <div>
        {/* {IschangeName ? <input onChange={show_name} onBlur={()=> close_NameP()} value={user.name}/> : <span onClick={() => makeName_p()}>name: {user.name}</span>} */}
        {nameControl.isOpen ? <input onChange={nameControl.changeEvent} onBlur={nameControl.closeEdit} value={nameControl.value}/> : <span onClick={nameControl.openEdit}>name: {nameControl.value}</span>}
      </div>
      <div>
        {/* {Ischangeage ? <input onChange={show_age} onBlur={close_ageP} value={user.age}/> : <span onClick={() => makeAge_p()}>age: {user.age}</span>} */}
        {ageControl.isOpen ? <input type="number" onChange={ageControl.changeEvent} onBlur={ageControl.closeEdit} value={ageControl.value}/> : <span onClick={ageControl.openEdit}>age: {ageControl.value}</span>}
      </div>
      <div>
        {heightControl.isOpen ? <input type="number" onChange={heightControl.changeEvent} onBlur={heightControl.closeEdit} value={heightControl.value}/> : <span onClick={heightControl.openEdit}>age: {heightControl.value}</span>}
      </div>
      <div>
        {/* <span>isAdmin: {user.isAdmin ? 'ok' : 'no'}</span>  */}
        {/* <button onClick={changeAdmin}>change admin</button> */}
      </div>
      <div>

      </div>
    </div>
  )
}



const arr = [1, 2, 3, 4]

const callback = (elem) => {
  return { data: elem + 1 };
}
const callback1 = elem => ({ data: elem + 1 });
const callback2 = (elem, i) => [elem + 1, i]


const newArr = arr.map(callback)