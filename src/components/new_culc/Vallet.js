import React from 'react'

export const Vallet = ({vollet}) => {
    return (
        <div className='vollet_cont'>
            <p>Euro: {vollet.EUR}</p>
            <p>Pound Sterling: {vollet.GBP}</p>
            <p>Japanese Yen: {vollet.JPY}</p>
            <p>US Dollar: {vollet.USD}</p>
            <p>Swiss Franc: {vollet.CHF}</p>
        </div>
    )
}
