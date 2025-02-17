import React, { useState } from 'react'
import { useJock } from '../../hooks/useJock'
import { Audio } from 'react-loader-spinner'
import Select from 'react-select';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { Modal_joke } from '../Modal_joke';
import '../api_css.css'

// import AwesomeButtonStyles from 'react-awesome-button/src/styles/styles.scss';

const options = [
    { value: '1', label: 'Random' },
    { value: '2', label: 'From A-Z' },
    { value: '3', label: 'From Z-A' },
];

export const User = () => {
    const [selectedOption, setSelectedOption] = useState(null);
    const [is_modal, setIs_modal] = useState(false)
    // console.log(selectedOption)
    const joke = useJock() // red golf joke

    const onSelect = (data) => {
        setSelectedOption(data)
        switch (data.value) {
            case '1': return shuffleJokes()
            case '2': return sort_joke_by_alphabet()
            case '3': return sort_joke_not_alphabet()
        }
    }

    const del_joke = (id) => {
        const new_list = joke.jocks.filter(elem => elem.id !== id)
        joke.setJocks(new_list)
    }

    const shuffleJokes = () => {
        const shuffledJokes = joke.jocks.sort(() => Math.random() - 0.5)
        joke.setJocks(shuffledJokes)
    }

    const sort_joke_by_id = () => {
        joke.setJocks(joke.jocks.sort((a, b) => b.id - a.id))

    }

    const sort_joke_by_alphabet = () => {
        const new_lst = joke.jocks.sort((a, b) => {
            if (a.setup > b.setup) {
                return 1;
            }
            if (a.setup < b.setup) {
                return -1;
            }
            return 0;
        });
        joke.setJocks(new_lst)
    }

    const sort_joke_not_alphabet = () => {
        const new_lst = joke.jocks.sort((a, b) => {
            if (a.setup < b.setup) {
                return 1;
            }
            if (a.setup > b.setup) {
                return -1;
            }
            return 0;
        });
        joke.setJocks(new_lst)
    }

    const open_modal = () => {
        setIs_modal(true)
    }

    

    return (
        <div >
            {joke.error ? <p>{joke.error}</p> : joke.jocks.map(elem =>
                <div className='joke_cont' key={elem.id}>
                    <p>Question: {elem.setup}</p>
                    <p>Answer: {elem.punchline}</p>
                    <button className='joke_x' onClick={() => del_joke(elem.id)}>X</button>
                </div>)}
            {joke.loading && <Audio
                height="80"
                width="80"
                radius="9"
                color="green"
                ariaLabel="loading"
                wrapperStyle
                wrapperClass="spinner"
            />}
            {/* <button className='joke_btn' onClick={joke.getJock}>Click</button> */}
            <AwesomeButton className='joke_btn'
                // cssModule={AwesomeButtonStyles}
                disabled={joke.isWork}
                type="primary"
                onPress={joke.getJock}>
                Click
            </AwesomeButton>
            <Select
                defaultValue={selectedOption}
                onChange={onSelect}
                options={options}
            />
            <button onClick={open_modal}>Open Modal</button>
            {is_modal && <Modal_joke jokes={joke.jocks} setJokes={joke.setJocks} />}
        </div>
    )
}
