import axios from "axios";

export const getTodos = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        return response
    } catch(e){
        return null
    }
}