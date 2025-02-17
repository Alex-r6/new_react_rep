import React, { useEffect, useMemo, useState } from 'react'
import { Currency_lst } from './Currency_lst'
import left from '../new_culc/img/left.png'
import { Vallet } from './Vallet'
import { E_modal } from './E_modal'

const data = [
    {
        name: "US Dollar",
        title: 'USD',
        flag: 'US',
        value: {
            'JPY': 42,
            "EUR": 1.04,
            "GBP": 1.14,
            "CHF": 1.34,
        }
    },
    {
        name: "Japanese Yen",
        title: 'JPY',
        flag: 'JP',
        value: {
            'EUR': 0.06,
            "USD": 0.063,
            "GBP": 0.163,
            "CHF": 0.98,
        }
    },
    {
        name: "Euro",
        title: 'EUR',
        flag: 'FR',
        value: {
            'JPY': 0.063,
            "USD": 0.96,
            'GBP': 1.63,
            "CHF": 0.17
        }
    },
    {
        name: "Pound Sterling",
        title: 'GBP',
        flag: 'GB',
        value: {
            'JPY': 0.63,
            "USD": 0.46,
            'EUR': 0.64,
            "CHF": 1.46
        }
    },
    {
        name: "Swiss Franc",
        title: 'CHF',
        flag: 'SZ',
        value: {
            'JPY': 0.63,
            "USD": 0.46,
            'EUR': 0.57,
            "GBP": 0.26
        }
    },

]

const total_vollet = {
    "JPY": 400.00,
    "USD": 350.00,
    "EUR": 120.00,
    "GBP": 130.00,
    "CHF": 65.00
}

const sumControls = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ',', '.', null]

const first_data = JSON.parse(localStorage.getItem('new_data')) || { title: '', money: '' };
const old_vallet = JSON.parse(localStorage.getItem('vollet')) || total_vollet


export const New_culc = () => {
    const [currencyFrom, setCurrencyFrom] = useState(first_data.title)
    const [sum, setSum] = useState(first_data.money)
    const [totalResult, setTotalResult] = useState({});
    const [dataTo, setDataTo] = useState(data)
    const [img, setImg] = useState(false)
    const [vollet, setVollet] = useState(old_vallet)
    const [error_modal, setError_modal] = useState(false)



    useEffect(() => {
        currencyFrom && sum && show_totalResult(currencyFrom, sum)
    }, [currencyFrom, sum]);

    useEffect(() => {
        if (currencyFrom) {
            const storedData = JSON.parse(localStorage.getItem("new_data")) || {};
            storedData.money = sum;
            localStorage.setItem("new_data", JSON.stringify(storedData));
        }
    }, [sum]);

    const show_currencyFrom = (e) => {
        setCurrencyFrom(e.target.value)
        setDataTo(data.filter(elem => elem.title != currencyFrom))
    }

    const show_sum = (e) => {
        let value = e.target.value;
        if (+value > 999999) return;
        if (!sumControls.includes(e.nativeEvent.data)) return;

        const res = value.split('.');

        if (res[1] && res[1].length > 2) {
            res[1] = res[1].slice(0, 2);
            value = res.join('.');
        }

        setSum(value);
    };

    const show_totalResult = (arg, sum) => {
        if (!sum || !arg) return setTotalResult({});

        const find_currency = data.find(elem => elem.title == arg);
        const valueList = Object.entries(find_currency.value);
        const result = valueList.reduce((acc, [currency, rate]) => {
            acc[currency] = (rate * sum).toFixed(2);
            return acc;
        }, {});

        setDataTo(data.filter(elem => elem.title != arg));
        setTotalResult(result);
    };

    const show_info = (title, money) => {
        if (!money || !title) return
        const object = {
            title: title,
            money: money
        }
        localStorage.setItem('new_data', JSON.stringify(object))

        setCurrencyFrom(title);
        setSum(money);
    }

    const selectTeg = useMemo(() => <select onChange={show_currencyFrom} value={currencyFrom}>
        <option value="" hidden={true}>Choose currency</option>
        {data.map(elem =>
            <option key={elem.name} value={elem.title}>{elem.name}</option>)}
    </select>, [currencyFrom])


    // const show_img = () => { //!
    //     setImg(!img)
    // }

    const culc_vallet = (elem) => {

        if (!vollet[currencyFrom] || vollet[currencyFrom] < sum) {
            setError_modal(true)
            return console.error(`Недостаточно средств в валюте ${currencyFrom}`);
        }

        vollet[currencyFrom] = +(vollet[currencyFrom] - parseFloat(sum)).toFixed(2);
        vollet[elem.title] = +(vollet[elem.title] + parseFloat(totalResult[elem.title])).toFixed(2);

        localStorage.setItem('vollet', JSON.stringify(vollet))

        setVollet({ ...vollet })
        setSum('')
        setTotalResult({})

    };

    const clear_all_storage = () => {
        localStorage.removeItem('vollet')
        localStorage.removeItem('new_data')
    }



    const set_money = () => currencyFrom && setSum(vollet[currencyFrom])



    return (
        <div className='culc'>
            <div className='culc_header'>
                <p className='culc_header_p'>currency exchange</p>
            </div>
            <div className='culc_toDo'>
                {selectTeg}
                <input value={sum} onChange={show_sum} onClick={(e) => e.target.select()} type="number" />
                <button onClick={clear_all_storage}>Clear</button>
                {currencyFrom ? <button style={{ background: "blue" }} onClick={set_money}>Set Money</button> : ''}
            </div>
            <div >
                <Currency_lst dataTo={dataTo} sum={sum} totalResult={totalResult} show_info={show_info} culc_vallet={culc_vallet} />
            </div>
            <div className={`vollet ${img ? 'move' : ''}`}>
                <div className='vollet_img_cont'>
                    <img src={left} width="50" onClick={() => setImg(!img)} className={`vollet_img ${img ? 'open' : 'close'}`} />
                </div>
                <Vallet vollet={vollet} />
            </div>

            <E_modal currencyFrom={currencyFrom} sum={sum} vollet={vollet[currencyFrom]} error_modal={error_modal} del_e_model={() => setError_modal(false)} />

        </div>
    )
}



// email     has @
// password   text
// tel   1234567890

// const Form = () => {
// const [password, setPassword] = useState('')
//     return <>
// <InputForm type="password" change={setPassword} value={password} rool={{ is : false}} />
// <InputForm type="tel"  rool={{ is : true, rools : ['1', '2','3','4','5','6','7','8','9','0']}} />
// <InputForm type="email"  rool={{ is : true, rools : ['@']}} />
//     </>
// }


// const InputForm = () => {

// return <div>
//     <input/>
//     {isError && 'error'}
// </div>

// }
