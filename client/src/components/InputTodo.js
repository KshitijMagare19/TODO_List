import React, { Fragment, useState } from "react";

const InputTodo = () => {
    const [description, setDescription] = useState("");

    const onSubmitForm = async e => {
        e.preventDefault();
        //add task
        try {
            const body = { description };
            const responce = await fetch("http://localhost:5000/todos",{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)

            });
            window.location = "/";
            console.log(responce);
        } catch (err) {
            console.error(err.message);
        }


    }
    return <Fragment>
        <div className="container" >
            <h1 className="text-center mt-5">Todo List Using PERN Stack </h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input type="text" className="form-control"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    placeholder="Enter task description" />

                <button className="btn btn-success btn-lg"> Add </button>
            </form>
        </div>

    </Fragment>
}

export default InputTodo;