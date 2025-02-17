import { useState } from "react";
import { useSettingContext } from "../../context/useSetting"
import Switch from "react-switch";

export const Setting = () => {
  const data = useSettingContext();
  const [new_color, setNew_color] = useState('')
  const [post_color, setPost_color] = useState('')
  const [checked, setChecked] = useState(data.isHome)
  const [setting_checked, setSetting_checked] = useState(false)
  const [message_checked, setMessage_checked] = useState(false)
  // const data =  useContext(SettingContext);

  // const data_setting = useSettingContext();

  // const save = () => {
  //   const value = "black"
  //   data.changeHeader(value)
  // }
  // console.log(data)

  const show_color = (e) => {
    setNew_color(e.target.value)
  }

  const save_new_color = () => {
    data.changeHeader(new_color)
  }

  const show_checked = (e) => {
    setChecked(e.target.checked)
  }

  const show_setting_checked = (e) => {
    setSetting_checked(e.target.checked)
  }

  // const show_message_checked = (e) => {
  //   setMessage_checked(e.target.checked)
  // }

  const change_header = () => {
    if (checked) {
      data.setIsHome(true)
    } else {
      data.setIsHome(false)
    }
  }

  const change_setting = () => {
    setting_checked ? data.setIsSetting(true) : data.setIsSetting(false)
  }


  const handleSwitch = () => {
    // console.log(message_checked)
    // setMessage_checked(message_checked)
    if(message_checked === true) {
      setMessage_checked(false)
    } else {
      setMessage_checked(true)
    }
    // setMessage_checked(!message_checked)
    // message_checked ? data.setIsMessage(true) : data.setIsMessage(false)
  }

  const change_message = () => {
    message_checked ? data.setIsMessage(true) : data.setIsMessage(false)
  }

  const show_post_color = (e) => {
    setPost_color(e.target.value)
  }

  const save_post_color = () => {
    data.setPostBG(post_color)
  }
  const testR = () => {
    console.log('222')
  }
  const testA = (e) => console.log(e)
  const testB = (arg) => { testA('hello'); console.log(arg) }
  return (
    <div >
       <button onClick={testB}>6633</button> 
       {/* <button onClick={() => { console.log('hello'); testR()  }}>6633</button>  */}
      {/* style={{background : data.headerBG}} */}
      {/* style={{background : data.settingBG}} */}
      <hr />
      <hr />

      <button style={{ width: '50px', height: '50px', background: 'red' }} onClick={() => data.changeHeader('red')}>red</button>
      <button style={{ width: '50px', height: '50px', background: 'green' }} onClick={() => data.changeHeader('green')}>green</button>
      <button style={{ width: '50px', height: '50px', background: 'black' }} onClick={() => data.changeHeader('black')}>black</button>
      <button style={{ width: '50px', height: '50px', background: 'yellow' }} onClick={() => data.changeHeader('yellow')}>yellow</button>
      <button style={{ width: '50px', height: '50px', background: 'white' }} onClick={() => data.changeHeader('white')}>white</button>
      <hr />

      <button style={{ width: '50px', height: '50px', background: 'red' }} onClick={() => data.changeHome('red')}>red</button>
      <button style={{ width: '50px', height: '50px', background: 'green' }} onClick={() => data.changeHome('green')}>green</button>
      <button style={{ width: '50px', height: '50px', background: 'black' }} onClick={() => data.changeHome('black')}>black</button>
      <button style={{ width: '50px', height: '50px', background: 'yellow' }} onClick={() => data.changeHome('yellow')}>yellow</button>
      <button style={{ width: '50px', height: '50px', background: 'white' }} onClick={() => data.changeHome('white')}>white</button>
      <hr />
      <span>header : </span>
      <input type="color" onChange={show_color} />
      <button onClick={() => save_new_color()}>save</button>
      <hr></hr>
      <hr />
      <span>post : </span>
      <input type="color" onChange={show_post_color} />
      <button onClick={() => save_post_color()}>save</button>
      <hr></hr>
      <div>
        Show or hidden navigate element
      </div>
      Home <input type="checkbox" onChange={show_checked} checked={checked} />
      <button onClick={() => change_header()}>Save</button>
      <hr></hr>
      Setting <input type="checkbox" onChange={show_setting_checked} checked={setting_checked} />
      <button onClick={() => change_setting('id12')}>Save</button>
      <button onClick={console.log}>6633</button>
      <hr></hr>
      Message <Switch onChange={handleSwitch} checked={message_checked} />
      {/* Message <Switch onChange={(e)=> handleSwitch(e)} checked={message_checked} /> */}
      <button onClick={() => change_message()}>Save</button>
    </div>
  )
}
