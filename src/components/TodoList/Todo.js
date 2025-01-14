import React, { Component } from 'react'
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import '../styles/Todo.css'

export default class Todo extends Component {

    constructor(props) {
        super(props)
    


        this.checkHandler = this.checkHandler.bind(this)
    }
    
    checkHandler(id) {

        this.props.onEdit(id)
    }

    deleteHandler(id) {
        this.props.onRemove(id)
    }

    render() {
        return (
            // 'completed' class for completed todos
            <div className='todo' style={{ display: 'flex' }}>
                <li className={`todo-item ${this.props.completed ? 'completed' : ''}`}>{this.props.title}</li>
                <div>
                <button className="check-btn" onClick={this.checkHandler.bind(this, this.props.id)}>
                    <i className="fas fa-check" aria-hidden="true"><FaCheck />
                    </i>
                </button>

                <button className="trash-btn">
                    <i className="fas fa-trash" aria-hidden="true" onClick={this.deleteHandler.bind(this, this.props.id)}><MdDelete/></i>
                </button>
                </div>
            </div>
        )
    }
}