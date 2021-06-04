import firebase from '../firebase'
import React, { useEffect, useState } from 'react'

export default function TodoList() {
    const [todoList, setTodoList] = useState()

    useEffect(() => {
        const todoRef = firebase.database().ref('/Todo')
        todoRef.on('value', (snapshot) => {
            const todos = snapshot.val();
            setTodoList(todos)
            console.log(todoList)
        })

    },[]);

    return (
        <div>
            <h3>{todoList.title}</h3>
            <button onClick={deleteTodo}>Delete</button>
            <button onClick={completeTodo}>Completed</button>
        </div>
    )
}