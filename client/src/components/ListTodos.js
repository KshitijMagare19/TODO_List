import React, { Fragment, useEffect, useState } from "react";
import EditTodo from "./EditTodo";

const ListTodos = () => {
    const [todos, setTodos] = useState([]);
    const getTodods = async () => {
        try {
            const responce = await fetch("http://localhost:5000/todos");
            const jsonData = await responce.json();

            setTodos(jsonData);
        } catch (err) {
            console.error(err.message);
        }
    }
    //delete function
    const deleteTodo = async (id) =>{
        try {
            const deleteTodo = await fetch(`http://localhost:5000/todos/${id}`,{
                method : "DELETE"
            });
            setTodos(todos.filter(todo => todo.id !== id))
            console.log(deleteTodo);
        } catch (err) {
            console.error(err.message);
        }
    }
    useEffect(() => {
        getTodods();
    }, []);

    console.log(todos);

    return <Fragment>
        <div className="container ">
            <table className="table table-striped table-hover  mt-5">
                <thead>
                    <tr>
                        <th scope="col">Task Description</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {/*<tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>*/}
                    {todos.map(todos => (
                        <tr key = {todos.id}>
                            <td>{todos.description}</td>
                            <td><EditTodo todo = {todos} /></td>
                            <td><button type="button" className="btn btn-danger"
                            onClick={() => deleteTodo(todos.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    </Fragment>
}

export default ListTodos;