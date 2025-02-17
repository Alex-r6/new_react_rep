import React, { useEffect, useRef, useState } from 'react'


const data = [
    {
        name: "$",
        value: {
            'UA': 42,
            "E": 1.04
        }
    },
    {
        name: "UA",
        value: {
            '$': 0.06,
            "E": 0.063
        }
    },
    {
        name: "E",
        value: {
            'UA': 0.063,
            "$": 0.96
        }
    },
]
// const val = '$'
// const dd =  {
//     name : "E",
//     value : {
//         'UA' : 0.063,
//         "$" : 0.96
//     }
// }
// const ff = dd.value[val]

let first_currency = ''
let final_currency = ''
let history = {}
// const old_data = localStorage.getItem(JSON.parse(history))
// const old_history = JSON.parse(localStorage.getItem('currency')) || {}

export const Cntrl = () => {
    const [new_data, setNew_data] = useState([])
    const [insert_inp, setInsert_inp] = useState('')
    const [total, setTotal] = useState('')
    const selectRef = useRef("1")
    // const [firstCurrency, setFirstCurrency] = useState('1') 
    // const [finalCurrency, setFinalCurrency] = useState('1')

    useEffect(() => {
        const savedData = JSON.parse(localStorage.getItem('currency')) || {};
        setInsert_inp(savedData.insert_inp);
        setTotal(savedData.total);
        setNew_data(savedData.new_data || []);
    }, []);

    const make_new_data = (event) => {
        const new_lst = data.filter(elem => elem.name != event.target.value)
        setNew_data(new_lst)
        first_currency = event.target.value
        // setFinalCurrency(event.target.value)
    }

    const show_insert_inp = (e) => {
        setInsert_inp(+e.target.value)
        const selected_currency = new_data.find(elem => elem.name === final_currency)
        if (selected_currency) {
            const result = e.target.value * selected_currency.value[first_currency]
            setTotal(result)
            history = {
                insert_inp: insert_inp,
                total: total,
                new_data: new_data,
            }
            localStorage.setItem('currency', JSON.stringify(history))
        }
    }

    const show_insert_inp2 = (e) => {
        final_currency = e.target.value
        // setFinalCurrency(e.target.value)
        const selected_currency = new_data.find(elem => elem.name === final_currency);
        if (selected_currency && insert_inp) {
            const result = insert_inp * selected_currency.value[first_currency];
            setTotal(result);
            history = {
                insert_inp: insert_inp,
                total: total,
                new_data: new_data,
            }
            localStorage.setItem('currency', JSON.stringify(history))
        }
    }

    const clear_all_data = () => {
        setInsert_inp('')
        setTotal('')
        setNew_data([])
        if (selectRef.current) {
            selectRef.current.value = '1'
        }
        localStorage.removeItem('currency')
        // setFirstCurrency('1') 
        // setFinalCurrency('1')
    }

    return (
        <div className='curr_cont'>
            <div>
                <select ref={selectRef} onChange={(e) => make_new_data(e)} >
                    <option value="1">Choose currency</option>
                    {data.map(elem => <option key={elem.name} value={elem.name}>{elem.name}</option>)}
                </select>
                <input value={insert_inp} onChange={show_insert_inp} />
            </div>
            <div>
                <select onChange={(e) => show_insert_inp2(e)}>
                    <option value="1">Choose currency</option>
                    {new_data.map(elem => <option key={elem.name}>{elem.name}</option>)}
                </select>
                <input value={total} />
            </div>
            <button onClick={clear_all_data}>Clear</button>
        </div>
    )
}
