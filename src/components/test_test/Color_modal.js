import React, { useState } from 'react'

export const Color_modal = ({setCont_color, cont_color, setO_modal, o_modal}) => {
    const [temp_color, setTemp_color] = useState('')
  
    const show_color = (e) => {
        setTemp_color(e.target.value)
    }

    const make_new_color = () => {
        setCont_color(temp_color)
        setO_modal(false)
    }

    const close_color_modal = () => {
      setO_modal(false)
  }
  return (
    <div className={'color_modal ' + (o_modal ? 'move' : 'stop')}>
        <input value={cont_color} onChange={show_color} type="color"/>
        <button className='color_modal_btn' onClick={make_new_color}>Change</button>
        <button className='color_modal_x' onClick={close_color_modal}>X</button>
    </div>
  )
}
