import React, { Component } from 'react'
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import '../styles/Todo.css'

export default class Todo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            isStyle: false
        }

        this.checkHandler = this.checkHandler.bind(this)
    }
    
    checkHandler() {
        this.setState({
            isStyle: !this.state.isStyle
        })
    }

    render() {
        return (
            // 'completed' class for completed todos
            <div className='todo' style={{ display: 'flex' }}>
                <li className={this.state.isStyle && "todo-item"}>{this.props.title}</li>

                <button className="check-btn" onClick={this.checkHandler}>
                    <i className="fas fa-check" aria-hidden="true"><FaCheck />
                    </i>
                </button>

                <button className="trash-btn">
                    <i className="fas fa-trash" aria-hidden="true"><MdDelete/></i>
                </button>
            </div>
        )
    }
}