import './App.css';
import { Route, Routes } from "react-router-dom";
import { Home } from './components/home/Home';
import { Setting } from './components/setting/Setting';
import { Hedaer } from './components/header/Header';
import { Message } from './components/message/Message';
import { Post } from './components/post/Post';
import { Comments } from './components/comments/Comments'
import { NotificationContainer } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import { ThemeContext } from './context/themeContext';
import { UserContext } from './context/userContext';
import { useState } from 'react';
import { Styles } from './styles/Styles';
import { LoginContext, useLogin } from './context/useUser';
import { Test } from './components/test/Test';
import { User } from './components/user/User';
import { SettingContext, useSetting } from './context/useSetting';
import { Example } from './components/example/Example';
import { Test_test } from './components/test_test/Test_test';
import { Cntrl } from './components/cntrl/Cntrl';
import { New_culc } from './components/new_culc/New_culc';
import { New_func } from './components/new_func/New_func';


// сделать кастомный хук для модалки next time 

function App() {
  const [user, setUser] = useState({
    isLogin : false,
    userName : ''
  })

  const login = useLogin()

  const settingContext = useSetting() //4

  // const d= () => {
  //   setUser({
  //     isLogin : false,
  //     userName : ''
  //   })
  // }
  const theme = {
    theme: {
      body: 'black',
      text: 'white'
    },
    isLogin : true
  }

  
  return (
    <SettingContext.Provider value={settingContext}> {/* 2     5  */}
    <LoginContext.Provider value={login}>
    <UserContext.Provider value={{user, setUser}}> 
    <ThemeContext.Provider value={theme}>

      <div className="App">
        <Hedaer />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cntrl' element={<Cntrl />} />
          <Route path='/setting' element={<Setting />} />
          <Route path="/message" element={<Message />} />
          <Route path="/post" element={<Post />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/test" element={<Test />} />
          <Route path="/user" element={<User />} />
          <Route path="/example" element={<Example />} />
          <Route path="/Test_test" element={<Test_test/>} />
          <Route path="/New_culc" element={<New_culc/>} />
          <Route path="/New_func" element={<New_func/>} />
        </Routes>
        <NotificationContainer />
      </div>
    {/* <Styles/> */}
    </ThemeContext.Provider>
    </UserContext.Provider>
    </LoginContext.Provider>

    </SettingContext.Provider>
  );
}

export default App;
