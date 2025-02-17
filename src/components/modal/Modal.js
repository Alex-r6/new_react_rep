import axios from 'axios'
import React from 'react'
import { useState } from "react";
import { add_post } from '../../api/post';
import {NotificationManager} from 'react-notifications';

export const Modal = ({ setIs_modal, add_to_list }) => {
    const [inp_title, setInp_title] = useState('')
    const [inp_body, setInp_body] = useState('')

    const show_inp_title = (e) => {
        setInp_title(e.target.value)
    }

    const show_inp_body = (e) => {
        setInp_body(e.target.value)
    }

    const add_new_elem = async () => {

        const response = await add_post(inp_title, inp_body)
        
        if (response === null) NotificationManager.error('Error message', 'Click me!')
        else add_to_list(response)

        setIs_modal(false)
        console.log(response);

    }

    return (
        <div className='modal'>
            <input onChange={show_inp_title} value={inp_title} />
            <input onChange={show_inp_body} value={inp_body} />
            <button className='modal_btn' onClick={() => add_new_elem()}>Add</button>
        </div>
    )
}





