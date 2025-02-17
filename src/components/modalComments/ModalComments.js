import React, { useContext, useState } from 'react'
import { add_comments } from '../../api/comments'
import {NotificationManager} from 'react-notifications';
import { ThemeContext } from '../../context/themeContext';

export const ModalComments = ({add_new_comment, setIs_modalComment}) => {
    const [commentBody, setCommentBody] = useState('')
    const data = useContext(ThemeContext)
    console.log(data)

    const show_commentBody = (e) => {
        setCommentBody(e.target.value)
    }

    const add_newComment = async() => {
        const result = await add_comments(commentBody)
        setIs_modalComment(false)
        if (result == null) return NotificationManager.error('Error message', 'Click me!')
        else add_new_comment(result)
    }

  return (
    <div className='modalComment' style={{background : data.isLogin ? 'red' : 'black'}}>
        <input value={commentBody} onChange={show_commentBody}/>
        <button className='modal_btn' onClick={()=> add_newComment()}>Add</button>
        
    </div>
  )
}
