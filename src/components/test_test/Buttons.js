import React, { useState } from 'react'

export const Buttons = ({show_color}) => {
    const [is_button, setIs_button] = useState(false)

    const show_button = () => {
        setIs_button(true)
    }
    const close_button = () => {
        setIs_button(false)
    }

    return (
        <div onMouseOver={show_button} onMouseOut={close_button}>
            <button onClick={()=>show_color(1)}>red</button>
            <button onClick={()=>show_color(2)}>green</button>
            <button onClick={()=>show_color(3)}>yellow</button>
            {is_button && <button onClick={()=>show_color(4)}>blue</button>}
        </div>
    )
}
