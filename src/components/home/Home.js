import { useEffect, useState } from "react";
import { getTodos } from "../../api/todos";
import { Modal } from "../modal/Modal";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useSettingContext } from "../../context/useSetting";


export const Home = () => {
  const data = useSettingContext();
  const [s, setS] = useState([])
  const [show_error, setShow_error] = useState(false)
  const [is_modal, setIs_modal] = useState(false)
  useEffect(() => {
    const qwe = async () => {
      const response = await getTodos();
      if (response === null) {
        setShow_error(true)
      } else {
        setS(response.data)
      }
    }
    qwe()
  }, []);

  const show_modal = () => { {/* shot */}
    setIs_modal(true)
  }

  const add_elem_list = (elem) => { {/* shot */}
    setS([elem, ...s])
  }
  return (
    <div style={{ backgroundColor: data.homeBG }}>
      {is_modal && <Modal setIs_modal={setIs_modal} add_to_list={add_elem_list}/>}
      <button onClick={() => show_modal()}>Add</button> {/* shot */}
      {/* useMemo */}
      {s.map(elem => <div key={elem.id}className='main_div'>
      <div className="home_div">
        <p key={elem.id}>{elem.title}</p>
        <i className="fa-solid fa-arrow-right"></i>
      </div>
      </div>)}
      {show_error && <p>No internet</p>}
    </div>
  )
}