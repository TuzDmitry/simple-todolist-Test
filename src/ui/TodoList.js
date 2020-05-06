import React from 'react';
import {connect} from "react-redux";
import {AddTaskAC, changeInputAC, changeTaskAC, deleteTaskAC} from "../redux/reducer";


const TodoList = (props) => {

    let changeInput = (e) => {
        let text = e.currentTarget.value
        props.UpdateInputArea(text)
    }

    let addTask = () => {
        props.AddTask()
    }

    let deleteTask = (id) => {
        debugger
        props.DeleteTask(id)
    }

    let changeIsDone = (id, e) => {
        let isDone = e.currentTarget.checked
        props.ChangeTask(id, isDone)
    }
    let arrayTasks = props.state.tasks.map(task => <li id={task.id}><input type="checkbox"
                                                                           onChange={(e) => changeIsDone(task.id, e)}/> {task.title}
        <button onClick={() => deleteTask(task.id)}>X</button>
    </li>)

    return (
        <div>
            <h1>Todo List</h1>
            <div>
                <input onChange={changeInput} value={props.state.textValueInput}/>
                <button onClick={addTask}>+
                </button>
            </div>
            <ul>
                {arrayTasks}
                {/*<li><input type="checkbox"/> CSS <button>X</button></li>*/}
                {/*<li><input type="checkbox"/> JS <button>X</button></li>*/}
                {/*<li><input type="checkbox"/> HTML <button>X</button></li>*/}
                {/*<li><input type="checkbox"/> REACT JS <button>X</button></li>*/}
            </ul>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        state: state
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        UpdateInputArea: (text) => {
            let action = changeInputAC(text)
            dispatch(action)
        },
        AddTask: () => {
            let action = AddTaskAC()
            dispatch(action)
        },
        DeleteTask: (taskId) => {
            let action = deleteTaskAC(taskId)
            dispatch(action)
        },
        ChangeTask: (taskId, isDone) => {
            let action = changeTaskAC(taskId, isDone)
            dispatch(action)
        }
    }
}


let TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList)
export default TodoListContainer;