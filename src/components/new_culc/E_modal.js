
import { Vallet } from './Vallet'

export const E_modal = ({ currencyFrom, sum, vollet, error_modal, del_e_model}) => {
  return (
    <>
    {error_modal && <div className='modal-c'></div>}
    <div className={`e_modal ${error_modal ? 'run' : 'e_modal'}`} >
        <p>you don't have enough money</p>
        <p>you try to exchange {currencyFrom}  {sum} but you have only {currencyFrom} {vollet}</p>
        <button className='e_btn' onClick={del_e_model}>X</button>
      </div>
    </>
  )
}
