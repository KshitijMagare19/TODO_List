const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware

app.use(cors());
app.use(express.json()); // req.body

//Routes
 
//create 
app.post("/todos", async(req, res) => {
    try {
        //console.log(req.body);
        const { description }  = req.body;
        //console.log(description);
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *", [description]
        );
        res.json(newTodo);
    } catch (err) {
        console.error(err.message);  
    }
});
//get all list of todo 
app.get("/todos", async(req, res) => {
    try {
        const allTodo = await pool.query(
            "SELECT * FROM todo"
        );
        res.json(allTodo.rows);
    } catch (err) {
        console.error(err.message);  
    }
});

//get specific list of todo 
app.get("/todos/:id", async(req, res) => {
    try {
        const { id }  = req.params;
        const Todo = await pool.query(
            "SELECT * FROM todo WHERE id = ($1)",[id]
        );
        res.json(Todo.rows[0]);
    } catch (err) {
        console.error(err.message);  
    }
});

//update specific list of todo 
app.put("/todos/:id", async(req, res) => {
    try {
        const { description }  = req.body;
        const { id }  = req.params;
        const updateTodo = await pool.query(
            "UPDATE todo SET description = ($1) WHERE id = ($2)",[description, id]
        );
        res.json("Updated scussefully");
    } catch (err) {
        console.error(err.message);  
    }
});

//delete specific list of todo 
app.delete("/todos/:id", async(req, res) => {
    try {
        const { id }  = req.params;
        const deleteTodo = await pool.query(
            "DELETE FROM todo WHERE id = ($1)",[id]
        );
        res.json("Deleted scussefully");
    } catch (err) {
        console.error(err.message);  
    }
});

app.listen(5000, () =>{
    console.log("The server started on port 5000.");
});