const express = require('express');
const {getTodos, getTodo, addTodo, updateTodo, deleteTodo} = require("../controllers/todoController")

const router = express.Router();

router.route('/todos/').get(getTodos).post(addTodo);

router.route('/todos/:id').get(getTodo).put(updateTodo).delete(deleteTodo);


module.exports = router;