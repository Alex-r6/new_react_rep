import axios from 'axios'
import React from 'react'
import { nanoid } from 'nanoid';

export const get_comments = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
        return response.data
    } catch {
        return null
    }

}

export const add_comments = async (body) => {
    try{
    const response = await axios.post('https://jsonplaceholder.typicode.com/comments', {
        body: body,
        userId: nanoid(),
    })
    return response.data
} catch {
    return null
}

}
