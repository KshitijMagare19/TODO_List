import React, { Fragment, useState } from "react";


const InputTodo = ({ todo }) => {
    console.log(todo);

    const [description, setDescription] = useState(todo.description);

    //edit function
    const updateDescription = async (e) => {
        e.preventDefault();

        try {
            const body = { description };
            const responce = await fetch(
                `http://localhost:5000/todos/${todo.id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body)
                }
            );
            window.location = "/";
            console.log(responce);
        } catch (err) {
            console.error(err.message);
        }
    }
    return (<Fragment>

        <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target={`#id${todo.id}`} >
            Edit
        </button>


        <div class="modal fade" id={`id${todo.id}`} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit task description</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" onClick={() => setDescription(todo.description)} aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input type="text" className="control-form container" value={description}
                            onChange={e => setDescription(e.target.value)} />
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-success" onClick={e => updateDescription(e)}>Save Changes</button>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
    )
}

export default InputTodo;