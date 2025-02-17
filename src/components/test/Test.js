import React, { useState } from 'react'
import { useValue } from '../../hooks/useValue';
import { One_test } from './One_test';

export const Test = () => {
    const [word, setWord] = useState('')
    const [word_list, setWord_list] = useState([])
   
console.log(word_list)
    // const inpControl = useValue('')

    const show_word = (e) => {
        setWord(e.target.value)
    }

    const add_word = () => {
        setWord('')
        setWord_list([...word_list, word])
    }

    const updateWord = (index, newWord) => { // 1 test
      // const updatedWords = word_list.map((elem, i) => 
      //     i === index ? newWord : elem
      // );
      // [a,s,d]
      const updatedWords = word_list.map((elem, i) => { // a 0
        const result = i === index ? newWord : elem; // 0 === 1
         // 
        return result
      });
      setWord_list(updatedWords); 
  };
  
  return (
    <div className='test_cont'>
        <input value={word} onChange={show_word}/>
        <button onClick={()=>add_word()}>Click</button>
        {/* {word_list.map(elem => {is_open ? (<input/> ): (<p onClick={()=>open_input()} key={elem.id}>{elem}</p>)})} */}
        {word_list.map((elem, index) => <One_test key={index} elem={elem} index={index} updateWord={updateWord} setword={setWord}  show_word={show_word} />
               
            )}
    </div>
  )
}
