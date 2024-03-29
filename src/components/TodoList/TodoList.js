import React, { Component } from 'react'
import Header from './Header'
import Todo from './Todo'
import './../styles/TodoList.css'

export default class TodoList extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            todoTitle: '',
            status: 'all'
        }

        this.addTodo = this.addTodo.bind(this)
        this.removeTodo = this.removeTodo.bind(this)
        this.editTodo = this.editTodo.bind(this)
        this.todoTitleHandler = this.todoTitleHandler.bind(this)
        // this.statusHandler = this.statusHandler.bind(this)

    }

    todoTitleHandler(event){
        this.setState({
            todoTitle: event.target.value
        })
    }

    addTodo(event){
        event.preventDefault();
        let newTodo ={
            id: this.state.todos.length +1,
            title: this.state.todoTitle,
            complited: false
        }

        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }
    
    editTodo(ID) {
        let Todos = this.state.todos

        for (let i = 0; i < Todos.length; i++){
            if (Todos[i].id === ID) {
                Todos[i].complited = !Todos[i].complited
            }
        }
        this.setState({
            todos: [...Todos]
        })
    }

    removeTodo(ID) {
        let newTodos = this.state.todos.filter((todo) => {
            return todo.id !== ID
        })
        this.setState({
            todos: [...newTodos]
        })
    }
    render() {
        return (
            <>
                <Header />
                <form>
                    <div>
                        <input type="text" className="todo-input" maxLength="40" value={this.state.todoTitle} onChange={this.todoTitleHandler}/>
                        <button className="todo-button" type="submit" onClick={this.addTodo}>
                            <i className="fas fa-plus-square">+</i>
                        </button>
                    </div>
                    <div className="select">
                        <select name="todos" className="filter-todo">
                            <option value="all">All</option>
                            <option value="completed">Completed</option>
                            <option value="uncompleted">Uncompleted</option>
                        </select>
                    </div>
                </form>

                <div className="todo-container">
                    <ul className="todo-list">
                        {this.state.todos && this.state.todos.map((todo) =>(
                            <Todo {...todo} onEdit={this.editTodo} onRemove={this.removeTodo} />
                        ))}
                    </ul>
                </div>
            </>
        )
    }
}
