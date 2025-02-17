import React from 'react'
import { useState } from 'react'
import { useJock } from '../hooks/useJock'


export const Modal_joke = ({jokes, setJokes}) => {
  // const joke2 = useJock() // hunday blue []
  const [selected, setSelected] = useState('')
 


  const show_sel = (e) => {
    const value = e.target.value
    switch (value){
      case '1' : return setSelected(value);
      case '2' : return setSelected(value);
      case '3' : return setSelected(value);
    }
  }  

  const del_joke_num = () => {
    //const new_list = 
    // jokes = [1,2,3,4,5]
    jokes.splice(0,+selected)
    // jokes = [2,3,4,5]

    // setJokes(new_list)
    setJokes([...jokes])
    console.log(selected);
    // console.log(new_list);
  }

  return (
    <div className='modal_jokes'>
      <select onChange={show_sel} value={selected}>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
      </select>
      <button onClick={del_joke_num}>Delete</button>
    </div>
  )
}

