import React, { Fragment } from "react";

const InputTodo = () => {
    return <Fragment>
        <div className="container">
            <h1 className="text-center mt-5">Todo List Using PERN Stack </h1>
            <form className="d-flex mt-5">
                <input type="text" placeholder="Enter task description"/>
                <button className="btn btn-success"> Add</button>
            </form>
        </div>

    </Fragment>
}

export default InputTodo;