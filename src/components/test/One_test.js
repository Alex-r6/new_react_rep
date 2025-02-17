import React, { useState } from 'react'
import { useValue } from '../../hooks/useValue';

export const One_test = ({ elem, index }) => {
  const inpControl = useValue(elem)


  return (
    <div>
      {inpControl.isOpen ? (
        <input key={index} onChange={inpControl.changeEvent} value={inpControl.value} onBlur={inpControl.closeEdit} />
      ) : (
        <p key={index} onClick={inpControl.openEdit}>{inpControl.value}</p>
      )}
    </div>
  )
}


// export const One_test = ({elem, index, show_word, updateWord}) => { // 123

//   const [change_word, setChange_word] = useState(elem)
//   const [is_open, setIs_open] = useState(false)

//   const show_new_inp = (e) => {
//     setChange_word(e.target.value)
    
//   }
  
//   const make_inp = () => {
//     setIs_open(true)
//   }
  
//   const finish_edit =()=> {
//     setIs_open(false)
//     updateWord(index, change_word)

//   }

//   return (
//     <div>
//          {is_open ? (
//                     <input key={index} onChange={show_new_inp} value={change_word} onBlur={finish_edit}/>
//                 ) : (
//                     <p key={index} onClick={make_inp}>{change_word}</p>
//                 )}
//     </div>
//   )
// }
