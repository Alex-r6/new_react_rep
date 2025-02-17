import React, { useState } from 'react'
import { Color_modal } from './Color_modal';

const buttons = ['red', 'green', 'blue']

export const Line = ({title, del_line}) => {
    const [color, setColor] = useState('black');
    const [isMove, setIsMove] = useState(false);
    const [is_p, setIs_p] = useState(false)
    const [new_text, setNew_text] = useState(title)
    const [new_title, setNew_title] = useState(title)
    const [o_modal, setO_modal] = useState(false)
    const [cont_color, setCont_color] = useState('#FAEBD7 ')


    const change_isMove = () => {
        setIsMove(!isMove)
    }

    const change_p = () => {
        setIs_p(true)
    }

    const show_p = (e) => {
        setNew_text(e.target.value)
    }

    const close_new_text = () => {
        setNew_title(new_text)
        setIs_p(false)
    }

    const openO_model = () => {
        setO_modal(true)
    }

    return (<div className='lst_cont_p' style={{ backgroundColor: cont_color }}>
        <button onClick={del_line}>X</button>
        {is_p ? <input onChange={show_p} value={new_text} onBlur={close_new_text} className="inp_line"/> : <p className='p_text' style={{color : color}} onDoubleClick={change_p}>{new_title}</p>}
        <div className='buttons-c'>
            {buttons.map(color => <button onClick={() => setColor(color)} key={color} >{color}</button>)}
        </div>

        {/* {o_modal ? <Color_modal setCont_color={setCont_color} cont_color={cont_color}  setO_modal={setO_modal} o_modal={o_modal}/> : <button onClick={openO_model} >Color</button>} */}
        {!o_modal && <button onClick={openO_model} >Color</button>}
        <Color_modal setCont_color={setCont_color} cont_color={cont_color}  setO_modal={setO_modal} o_modal={o_modal}/>
        {/* <button className='btn-p' onClick={()=>setColor('yellow')}>yel</button> */}
        {/* <button className={'btn-c ' + (isMove ? 'btn-c-y' : 'btn-c-f')} onClick={change_isMove}>0</button> */}

    </div>
    )
}


