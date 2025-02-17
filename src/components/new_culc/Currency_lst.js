import React, { useMemo, useState } from 'react'
import Flag from 'react-world-flags';

export const Currency_lst = ({ dataTo, totalResult, show_info, culc_vallet, sum }) => {
    const dataTodoMemo = useMemo(() => {
        return dataTo.map(elem => {
            return <div key={elem.name} className="main_culc">
                <div className="main_cont" onClick={() => show_info(elem.title, totalResult[elem.title])}>
                    <div className='cont_flag'>
                        <Flag code={elem.flag} style={{ width: 50, height: 20 }} />
                        <p className='culc_header_p'>{elem.name}</p>
                    </div>
                    <div className='final_culc_cont'>
                        <p className='culc_header_p'>
                            {elem.title in totalResult ? totalResult[elem.title] : 'No conversion yet'}
                        </p>
                    </div>
                </div>
                {elem.title in totalResult ? <button onClick={() => culc_vallet(elem)} className="btn_change">Change</button> : ''}
            </div>
        })
    }, [totalResult, dataTo, sum ])

    return (
        <div className='culc_lst'>
            {dataTodoMemo}
        </div>
    )
}
