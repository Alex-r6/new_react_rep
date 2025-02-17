import axios from "axios"
import { nanoid } from 'nanoid';

export const getPosts = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return response.data
    } catch {
        return null
    }
}


export const add_post = async(inp_title, inp_body) => {
    try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: inp_title,
        body: inp_body,
        userId: nanoid(),
    })
    return response.data
} catch {
    return null
}
}

export const get_new_post = async(show_num) => {
    try{
       const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${show_num}`)
       return response.data
    }catch {
       return null
    }
   }

