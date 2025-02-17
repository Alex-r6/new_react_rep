import { useEffect, useState } from "react";
import { get_comments } from "../../api/comments";
import { ModalComments } from '../modalComments/ModalComments'
import {NotificationManager} from 'react-notifications';

export const Comments = () => {
    const [lst, setLst] = useState([])
    const [is_modalComment, setIs_modalComment] = useState(false)

    useEffect(() => {
        const get_lst = async () => {
            const response = await get_comments()
            if (response == null) {
                return NotificationManager.error('Error message', 'Click me!')
            } else {
                setLst(response)
            }
        }
        get_lst()
    }, [])

    const show_modalComment = () => {
        setIs_modalComment(true)
    }

    const add_new_comment = (elem) => {
        setLst([elem, ... lst])
    }
    return (
        <div>
            {is_modalComment && <ModalComments add_new_comment={add_new_comment}  setIs_modalComment={setIs_modalComment}/>}
            <div className="btn_cont">
                <button onClick={() => show_modalComment()}>Add</button>
            </div>
            {lst.map(elem => <p className="comments_p" key={elem.id}>{elem.body}</p>)}
        </div>
    )
}
