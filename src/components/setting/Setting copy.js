import { useState } from "react";
import Switch from "react-switch"
import { useSettingContext } from "../../context/useSetting";

export const Setting = () => {
  const data = useSettingContext();
  const [checked, setChecked] = useState(false)
  const change_switch = (is) => {
    setChecked(is)
  }
 
  return (
    <div >
     <div>
      <span>Home </span>
      <Switch onChange={change_switch} checked={checked}/>
     </div>
    </div>
  )
}
