export const DELETE_TASK = "TodoList/Reducer/DELETE-TASK";
export const CREATE_TASK = "TodoList/Reducer/CREATE_TASK"
export const CHANGE_TASK = "TodoList/Reducer/CHANGE_TASK"
export const CHANGE_INPUT = "TodoList/Reducer/CHANGE_INPUT"


const initialState = {
    textValueInput: '',
    tasks: [
        {id: 0, title: "JS", isDone: true},
    ]
}

export const reducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case CHANGE_INPUT:
            return {...state, textValueInput: action.textValueInput}

        case CREATE_TASK:
            let newTask = {id: state.tasks.length, title: state.textValueInput};
            return {...state, tasks: [...state.tasks, newTask], textValueInput: ''}

        case DELETE_TASK:

            let arrTasksAfterDel = state.tasks.filter(task => action.taskId !== task.id)
            arrTasksAfterDel = arrTasksAfterDel.map((task, i) => {
                return {...task, id: i}
            })

            return {...state, tasks: arrTasksAfterDel}

        case CHANGE_TASK:
            let arrTasksAfterChange = state.tasks.map(task => {

                    if (action.taskId !== task.id) {
                        return task
                    } else {
                        return {...task, isDone: action.isDone}
                    }
                }
            )
            return {...state, tasks: arrTasksAfterChange}

        default:
            return state;

    }
}


export const changeInputAC = (text) => ({type: CHANGE_INPUT, textValueInput: text})
export const AddTaskAC = () => ({type: CREATE_TASK})
export const deleteTaskAC = (taskId) => ({type: DELETE_TASK, taskId})

export const changeTaskAC = (taskId, isDone) => ({type: CHANGE_TASK, taskId, isDone})
