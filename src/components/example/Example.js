import React, { useEffect, useState, CSSProperties } from 'react'
import { get_new_post } from '../../api/post'
import ClipLoader from "react-spinners/ClipLoader";
import '../api_css.css'
import { Paginations } from './Paginations';

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const search = window.location.search;
const params = new URLSearchParams(search);
const num = params.get('page')

const page = num ? +num : 1;



export const Example = () => {
    const [show_res, setShow_res] = useState([])
    const [show_num, setShow_num] = useState(page)
    const [loading, setLoading] = useState(true);
    const [is_spin, setIs_spin] = useState(false)

    const isComp = window.innerWidth >= 800;


    useEffect(() => {
        if(isComp) {

            const qwe = async () => {
                setIs_spin(true)
                const res = await get_new_post(show_num)
                window.history.replaceState(null, '', `/example?page=${show_num}`)
                if (null === res) return console.log('error')
                isComp ? setShow_res(res) : setShow_res((prev) => [...prev, ...res])
                setIs_spin(false)
            }
            qwe()
        }
    }, [show_num])

    useEffect(() => {
        if(isComp) return;
        const qwe = async () => {
            setIs_spin(true)
            const res = await get_new_post(show_num)
            window.history.replaceState(null, '', `/example?page=${show_num}`)
            if (null === res) return console.log('error')
            setShow_res(res)
            setIs_spin(false)
        }
        qwe()

        
    }, [])



    const show = (e) => {
        const page = +e.target.slot;
        setShow_num(page);
    }

    const make_request = async () => {
        const new_page = show_num + 1;
        setShow_num(new_page)

        const res = await get_new_post(new_page )
        setShow_res((prev) => [...prev, ...res])

        // console.log(111);
    }

    const handleScroll = (e) => {
        if (isComp) return;

        const element = e.target;
        if (Math.abs(element.scrollHeight - element.scrollTop - element.clientHeight) < 1) {
            // console.log('get')
            
            make_request();
        }

    };

    return (
        <div className='data_cont' onScroll={handleScroll}>
            <div className='lst_cont'>
                {show_res.map(elem => <p className='lst_cont_p' key={elem.id}>{elem.title}</p>)}
            </div>

            {isComp && <Paginations is_spin={is_spin} loading={loading} show_num={show_num} show={show} pages={pages}/>}
        </div>
    )
}
