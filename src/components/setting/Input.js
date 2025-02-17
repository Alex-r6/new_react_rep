import React, { useState } from 'react'

export const Input = (props) => {
    console.log(props)
    const [open, setOpen] = useState(true);
    const change = (e) => props.onChange(e.target.value)

    return (
        <div>
            {open
                ? <p onDoubleClick={() => setOpen(false)}>{props.value}</p>
                : <input value={props.value} onChange={change} onBlur={() => setOpen(true)} />
            }
        </div>
    )
}
