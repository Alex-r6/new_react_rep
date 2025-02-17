import React, { useEffect, useState } from 'react'
import { get_new_post } from '../../api/post'
import { Paginations } from '../example/Paginations'
import { Audio } from 'react-loader-spinner'
import { Buttons } from './Buttons'
import { Line } from './Line'

const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// window.addEventListener('resize', (e) => {
//     console.log(window.innerWidth);
//   });
const params = new URLSearchParams(window.location.search);
const searchValue = params.get('page');

// 
export const Test_test = () => {
    const [show_res, setShow_res] = useState([])
    const [show_num, setShow_num] = useState(+searchValue == 0 ? 1 : +searchValue)
    const [is_spin, setIs_spin] = useState(false)
    const [isComp, setIsComp] = useState(window.innerWidth > 600)


    useEffect(() => {
        const qwe = async () => {
            const res = await get_new_post(show_num)
            window.history.replaceState(null, '', `/test_test?page=${show_num}`)
            setShow_res(res)
        }
        qwe()

        // resize
        const changeSize = () => {
            setIsComp(window.innerWidth > 600)
        }
        window.addEventListener('resize', changeSize);

        return () => {
            window.removeEventListener('resize', changeSize)
        }
    }, [])

    const show = (e) => {
        const page = +e.target.slot;
        window.history.replaceState(null, '', `/test_test?page=${page}`)
        setShow_num(page);
        make_request(page)
    }

    const make_request = async (page) => {
        setIs_spin(true)
        const res = await get_new_post(page)
        setShow_res(res)
        setIs_spin(false)
    }

    const del_line = (id) => {
        const new_lst = show_res.filter(e=> e.id != id)
        setShow_res(new_lst)
    }

    const load_for_phone = async (show_num) => {
        setIs_spin(true)
        const next_page = show_num + 1
        const res = await get_new_post(next_page)
        window.history.replaceState(null, '', `/test_test?page=${next_page}`)
        setShow_res(prevShowRes => [...prevShowRes, ...res]);
        setShow_num(next_page)
        setIs_spin(false)
    };

    const handleScroll = (e) => {
        const bottom =  e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight + 5; 
        if (bottom && is_spin == false) {
            load_for_phone(show_num);
        }
    };

    const scip_to_first = async () => {
        // setIs_spin(true)
        // const res = await get_new_post(1)
        // setShow_num(1)
        // setIs_spin(false)
        // setShow_res(res);
        // window.history.replaceState(null, '', `/test_test?page=${1}`)
        
        window.history.replaceState(null, '', `/test_test?page=1`)
        window.location.reload()
        
    }

    return (
        <div className='task-c' onScroll={handleScroll}>
            {show_res.length === 0 ? <div><p>No found</p>       
                                    {/* <a href='http://localhost:3000/test_test?page=1' >Skip</a> */}
                                    <button onClick={scip_to_first}>Skip</button>
                                    </div> :
            show_res.map(e => <Line key={e.id} title={e.title} del_line={() => del_line(e.id)}/>) }
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
