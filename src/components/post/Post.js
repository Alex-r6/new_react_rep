import React, { useEffect, useState } from 'react'
import { getPosts } from "../../api/post";
import { useSettingContext } from '../../context/useSetting';


export const Post = () => {
  const data = useSettingContext();
  const [show_res, setShow_res] = useState([])

  useEffect(() => {
    const qwe = async () => {
      const res = await getPosts()
      if (null === res) return console.log('error')
      setShow_res(res)
    }
    qwe()
  }, [])
  return (
    <div style={{ backgroundColor: data.postBG }}>
      {show_res.map(elem => <p key={elem.id}>{elem.title}</p>)}
    </div>
  )
}
