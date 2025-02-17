import React, { useEffect, useRef, useState } from 'react'
import { History_modal } from './History_modal'


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
    {
        name: "E",
        value: {
            'UA': 0.063,
            "$": 0.96
        }
    },
]

// localStorage x3
const old_valute_from = localStorage.getItem('valuteFrom') || ''
const old_valute_to = localStorage.getItem('valuteTo') || ''
const old_sum_from = localStorage.getItem('sumFrom') || ''
const old_history = JSON.parse(localStorage.getItem('history')) || [];



export const Cntrl = () => {
    const [valuteFrom, setValuteFrom] = useState(old_valute_from) //!
    const [valuteTo, setValuteTo] = useState(old_valute_to) //! 'UA'; '$'
    const [sumFrom, setSumFrom] = useState(old_sum_from);//!
    const [history_modal, setHistory_modal] = useState(false)
    const [history, setHistory] = useState(old_history)
    const [accaunt, setAccount] = useState({
        'UA': 10000,
        "$": 500,
        "E": 200
    })



    useEffect(() => {
        localStorage.setItem('valuteFrom', valuteFrom)
    }, [valuteFrom])//!
    useEffect(() => {
        localStorage.setItem('valuteTo', valuteTo)
    }, [valuteTo])//!
    useEffect(() => {
        localStorage.setItem('sumFrom', sumFrom)
    }, [sumFrom])//!
    useEffect(() => {
        localStorage.setItem('history', JSON.stringify(history))
    }, [history])


    const change = (e) => setSumFrom(e.target.value)

    const choose_first_currency = (e) => {
        setValuteFrom(e.target.value)
        if (e.target.value == valuteTo) {
            setValuteTo('')
        }
    }
    const choose_second_currency = (e) => {
        setValuteTo(e.target.value)

    }

    let totalSum = 0;



    const culc_result = () => {
        if (valuteFrom === '' || !valuteTo || !sumFrom) return ''
        // const selected_currency = data.find(elem => elem.name == valuteFrom)
        // make_culc()
        // return (sumFrom * selected_currency.value[valuteTo]).toFixed(2)

        const selected_currency = data.find(elem => elem.name == valuteFrom);
        const result = (sumFrom * selected_currency.value[valuteTo]).toFixed(2);
        totalSum = result
        return result;
    }

    totalSum = culc_result();

    const make_culc = () => {
        if (!valuteTo || !valuteFrom || !sumFrom) return;
        if (+sumFrom > +accaunt[valuteFrom]) return console.log('No money');
        


        accaunt[valuteFrom] = (accaunt[valuteFrom] - sumFrom).toFixed(2);
        accaunt[valuteTo] = (+accaunt[valuteTo] + (totalSum * 0.99)).toFixed(2);
        setAccount({ ...accaunt })


        // UA = 1000 
        // sumFrom = 4000
        // accaunt[UA] = (+accaunt[UA] + (+totalSum - ((1 / 100) * sumFrom))).toFixed(2);



        // const find_currency_from = Object.keys(accaunt).find(elem=> elem == valuteFrom)
        // const find_currency_to = Object.keys(accaunt).find(elem=> elem == valuteTo)
        // if(find_currency_from && find_currency_to){
        //     const currentBalance = parseFloat(accaunt[find_currency_from]);
        //     if(currentBalance >= sumFrom){
        //         accaunt[find_currency_from] = parseFloat(accaunt[find_currency_from]) - parseFloat(sumFrom) - (1 / 100) * parseFloat(sumFrom);
        //         accaunt[find_currency_to] = parseFloat(accaunt[find_currency_to]) + parseFloat(totalSum);
        //     }else{
        //         console.log('no Money');
        //     }

        // }
    }


    const add_to_history = () => {
        const object = {
            valuteFrom: valuteFrom,
            second_valute: valuteTo,
            quantity: sumFrom,
            totalSum: totalSum,
            time: Date.now()
        }
        setHistory([...history, object])
        localStorage.setItem('history', JSON.stringify(history))

    }



    const clear_all = () => {
        localStorage.removeItem('valuteFrom')
        localStorage.removeItem('valuteTo')
        localStorage.removeItem('sumFrom')
        localStorage.removeItem('history')
        setSumFrom('')
        setValuteFrom('')
        setValuteTo('')
    }

    const dataTo = data.filter(elem => elem.name != valuteFrom);
    // const dataTo = valuteFrom === '' ? [] : data.filter(elem => elem.name != valuteFrom);

    const open_modal = () => {
        // setHistory_modal(true)
        // add_to_history()
        make_culc()
    }

    const change_data = (obj) => {
        setValuteFrom(obj.valuteFrom)
        setValuteTo(obj.second_valute)
        setSumFrom(obj.quantity)
    }


    const del_history = (index) => {
        const new_lst = history.filter((_, i) => i !== index);
        setHistory(new_lst)

        if (new_lst.length == 0) {
            setHistory_modal(false)
        }
    }

    const checkDisabled = () => {
        if (valuteFrom && valuteTo) {
            return false
        } else {
            return true
        }
    }

    const isDisabled = checkDisabled()

    const add_one = () => {
        const first_valute = data.findIndex(elem => elem.name == valuteFrom);
        const second_valute = dataTo.findIndex(elem => elem.name == valuteTo);

        const next_value_from = (first_valute + 1) % data.length;
        const next_value_to = (second_valute + 1) % dataTo.length;

        setValuteFrom(data[next_value_from].name);
        setValuteTo(dataTo[next_value_to].name);
    }



    return (
        <div className='curr_cont'>
            <div>{JSON.stringify(accaunt)}</div>
            <div>
                <div>
                    <select value={valuteFrom} onChange={choose_first_currency}>
                        {data.map((elem) => {
                            return <option value={elem.name} key={elem.name}>{elem.name}</option>
                        })}
                        <option hidden={true} value="">Choose currency</option>
                    </select>
                    <input onChange={change} value={sumFrom} type="number" />
                </div>
                <div>
                    <select value={valuteTo} onChange={choose_second_currency}>
                        <option value="" hidden={true}>Choose currency</option>
                        {dataTo.map((elem) => {
                            return <option value={elem.name} key={elem.name}>{elem.name}</option>
                        })}
                    </select>
                    <input value={totalSum || ''} readOnly />
                </div>
                {history_modal && <History_modal history={history} setHistory_modal={setHistory_modal} setHistory={setHistory} change_data={change_data} del_history={del_history} />}
                <button onClick={clear_all}>Clear</button>
                <button onClick={open_modal}>History list</button>
                <button disabled={isDisabled} onClick={add_one}>+1</button>
            </div>
        </div>
    )
}



