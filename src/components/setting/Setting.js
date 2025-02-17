import { useState } from "react";
import Switch from "react-switch"
import { useSettingContext } from "../../context/useSetting";
import { Input } from "./Input";
// import { Switch } from "./Switch";

// const Switch2 = (props) => {
//   const change = () => {
//     console.log('ramashka')
//     props.onChange(!props.checked)
//   }
//   return <input type="checkbox" checked={props.checked} onChange={change} />
// }


export const Setting = () => {
  const data = useSettingContext();
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState('text');

  const change_switch = (qwertyu) => {
    setChecked(qwertyu)
  }
  const qqq = (a) => console.log(a)

  return (
    <div >
      <Input value={value} qwert="34567" onChange={setValue} />
      <button>log</button>
      <hr />

      <Switch onChange={change_switch} checked={checked} offHandleColor={'#123321'}/>
      <hr />
      <textarea></textarea>
      {/* <div>
      <span>Home </span>
      <Switch onChange={change_switch} checked={checked} />
     </div> */}
      <hr />
    </div>
  )
}

{/* <Switch2 onChange={change_switch} checked={checked}/> */ }