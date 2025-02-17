import { useEffect, useState } from "react"


export const useValue = (startValue, { type, max, min } = {}) => { // Robert
    const [isOpen, setisOpen] = useState(false); // true
    const [oldValue, setOldValue] = useState(startValue); // Robert
    const [value, setValue] = useState(startValue); // ''

    const changeEvent = (e) => setValue(e.target.value);

 
    const openEdit = () => {
        setisOpen(true);
        setOldValue(value)
    }
    const closeEdit = () => {
        if (value.trim() === '') {
            setValue(oldValue);
        }
        switch (type) {
            case 'number': 
            +value > max && setValue(oldValue);
            +value < 15 && setValue(oldValue);
            +value < min && setValue(oldValue);
            break;

        }

        setisOpen(false);
    }

    return {
        value,
        isOpen,
        changeEvent,
        openEdit,
        closeEdit
    }
}