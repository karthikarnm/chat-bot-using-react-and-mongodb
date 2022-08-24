import React, { useEffect } from 'react'
import "./todos.css"

export default function Todos(props) {
    const { setState } = props;
    // this.useEffect= this.useEffect.bind(this);
    useEffect(() => {
        fetch("http://localhost:8000/api/Que")
            .then(res => res.json()).then(data => {
                const queList = data.slice(0, 6);
                setState((state) => ({
                    ...state, todos: queList
                }));
            }
            );
    });

    const renderTodos = () => {
        return props.todos.map((todo) => {
            return (
                <li className='listItems' key={todo.id}>
                    {todo.Que}
                </li>
            );
        })
    }


    // console.log(props)
    return (
        <div className='widgets'>
            <ul className='list'>{renderTodos()}</ul>
        </div>
    )
}
