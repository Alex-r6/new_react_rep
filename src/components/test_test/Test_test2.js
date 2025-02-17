import React, { useEffect, useState } from 'react'
import { get_new_post } from '../../api/post'
import { Paginations } from '../example/Paginations'
import { Audio } from 'react-loader-spinner'
import { Buttons } from './Buttons'

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// window.addEventListener('resize', (e) => {
//     console.log(window.innerWidth);
//   });

export const Test_test = () => {
    const [show_res, setShow_res] = useState([])
    const [show_num, setShow_num] = useState(1)
    const [is_spin, setIs_spin] = useState(false)
    // const isComp = window.innerWidth > 800;
    const [isComp, setIsComp] = useState(window.innerWidth > 800)
    const [btn_value, setBtn_value] = useState(1)
    const [btn_id, setBtn_id] = useState('')
    
    useEffect(() => {
        const qwe = async () => {
            const res = await get_new_post(show_num)
            setShow_res(res)
        }
        qwe()

        // resize
        const changeSize = () => {
            setIsComp(window.innerWidth > 800)
        }
        window.addEventListener('resize', changeSize);

        return () => {
            window.removeEventListener('resize', changeSize)
        }
    }, [])



    const show = (e) => {
        const page = +e.target.slot;
        setShow_num(page);
        make_request(page)
    }

    const make_request = async (page) => {
        setIs_spin(true)
        const res = await get_new_post(page)
        setShow_res(res)
        setIs_spin(false)
    }

    const show_color = (value, id) => {
        setBtn_value(value)
        setBtn_id(id);

    }

    return (
        <div>
            {show_res.map(elem => <div className='lst_cont_p' key={elem.id}>
                <p className={btn_id === elem.id
                    ? btn_value === 1
                        ? 'p_red'
                        : btn_value === 2
                            ? 'p_green'
                            : btn_value === 3
                                ? 'p_yellow'
                                : 'p_blue'
                    : 'p_default'}>{elem.title}</p>
                <Buttons show_color={(value) => show_color(value, elem.id)} />
            </div>)}
            {is_spin ? <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass="toll_spinner"
            /> :
                isComp && <Paginations show_num={show_num} show={show} pages={pages} />

            }

        </div>
    )
}
