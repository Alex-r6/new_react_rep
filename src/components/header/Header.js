import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Switch from "react-switch";
import { ThemeContext } from '../../context/themeContext';
import { UserContext } from '../../context/userContext';
import { useSettingContext } from '../../context/useSetting';
import { Example } from '../example/Example';
// import { useLoginContext } from '../../context/useUser';
import { Header_modal } from './Header_modal';


export const Hedaer = () => {
  const [color, setColor] = useState('green')
  const [is, setIs] = useState(false)
  const [is_header_modal, setIs_header_modal] = useState(false)
  const userContext = useContext(UserContext)
  const themeContext = useContext(ThemeContext)
  const data = useSettingContext();


  const handleSwitch = (is) => {
    setIs(is)
    is ? setColor('red') : setColor('green');
  }

  const show_is_modal_in = () => {
    setIs_header_modal(true)
  }


  return <header className='header' style={{ backgroundColor: data.headerBG }}>
    {userContext.user.isLogin ? <button onClick={show_is_modal_in}>Log out</button> : <button onClick={show_is_modal_in}>Log in</button>}
    {is_header_modal && <Header_modal setIs_header_modal={setIs_header_modal} is_header_modal={is_header_modal} />}
    {data.isHome && <NavLink to="/">Home</NavLink>}
    {data.isSetting && <NavLink to="/setting">Setting</NavLink>}
    <NavLink to="/cntrl">Cntrl</NavLink>
    {data.isMessage && <NavLink to="/message">Message</NavLink>}
    <NavLink to="/post">Post</NavLink>
    <NavLink to="/comments">Comments</NavLink>
    <NavLink to="/test">Test</NavLink>
    <NavLink to="/user">user</NavLink>
    <NavLink to="/example">Example</NavLink>
    <NavLink to="/Test_test">Test_test</NavLink>
    <NavLink to="/New_culc">New_culc</NavLink>
    <NavLink to="/New_func">New_func</NavLink>
    <label>
      <span>Change color</span>
      <Switch onChange={handleSwitch} checked={is} />
    </label>
  </header>
};
