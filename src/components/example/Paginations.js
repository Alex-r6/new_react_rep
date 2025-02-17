import React from 'react'
import { ClipLoader } from 'react-spinners'


// const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export const Paginations = (props) => {
    const { is_spin, loading, show_num, show, pages } = props;
    console.log(pages)
    console.log(show_num)
    return (
        <div className='num'>
            {is_spin ? <ClipLoader
                loading={loading}
                cssOverride={{
                    display: "block",
                    margin: "0 auto",
                    borderColor: "green",
                    position : 'fixed',
                    bottom : '100px'
                }}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            /> : pages.map((page) => (
                <button
                    style={{ cursor: 'pointer' }}
                    key={page}
                    slot={page}
                    onClick={show}
                    className={page === show_num ? 'active_example' : ''}
                >
                    {page}
                </button>
            ))}
        </div>
    )
}
