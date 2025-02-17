import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext'

export const Header_modal = ({ setIs_header_modal, is_header_modal }) => {
    const userContext = useContext(UserContext)

    const log_in = () => {
        setIs_header_modal(false)
        userContext.setUser(user => ({
            ...user,
            isLogin: true
        }))
    }

    const log_out_sure = () => {
        setIs_header_modal(false)
        userContext.setUser(user => ({
            ...user,
            isLogin: false
        }))
    }

    const log_out = () => {
        setIs_header_modal(false)
    }

    return (
        <div className='header_modal'>
            {userContext.user.isLogin ?
                <div>
                    <p className='p_modal_header'>Are you sure:</p>
                    <button onClick={log_out_sure}>Sure</button>
                    <button onClick={log_out}>No</button>
                </div>
                : <div className='user_in'>
                    <p className='p_modal_header'>Log in:</p>
                    <input placeholder='Enter email' />
                    <input placeholder='Enter password' />
                    <button onClick={log_in}>Submit</button>
                </div>}
        </div>
    )
}
