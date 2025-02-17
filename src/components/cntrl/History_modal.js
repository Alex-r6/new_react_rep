import React from 'react'

export const History_modal = ({history, setHistory_modal, change_data, del_history}) => {

  const close_his_modal = () => {
    setHistory_modal(false)
  }

  const formatUnixTimestamp = (timestamp) => {
    console.log(timestamp);
    const date = new Date(timestamp);  // Преобразуем в миллисекунды
  
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');  // месяцы с 0 до 11
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
  
    return `${year}:${month}:${day} ${hours}-${minutes}-${seconds}`;
  };

  return (
    <div className='history_cont'>
      {history.map((elem, index) => {
        const time_result = formatUnixTimestamp(elem.time)
        return (
        <div key={elem.id || index} className="history_div">
          <p>{elem.quantity} ({elem.valuteFrom}) = {elem.totalSum} ({elem.second_valute}) ({time_result})</p>
          <button onClick={()=> change_data(elem)}>Show</button>
          <button onClick={()=>del_history(index)}>X</button>
        </div>
      )})}
      <button className='history_btn' onClick={close_his_modal}>X</button>
    </div>
  );
};

















// const arr = [1,2,3,4,5]


// const res1 = arr.map((elem) => elem + 10)
// a => a;

// function createA(a) {
//   return a
// }

// const res2 = arr.map((elem) => {
//   return elem + 10
// })