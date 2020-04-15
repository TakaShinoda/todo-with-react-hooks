const tasks = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TASK':
            const task = { title: action.title, check: action.check}
            const length = state.length
            const id = length === 0 ? 1 : state[length - 1].id + 1
            return [...state,  { id: id, ...task}]

        case 'DELETE_TASK':
            return state.filter(task => task.check === action.check)

        case 'DELETE_ALL_TASKS':
            return []

        default:
            throw new Error()
    }
}

export default tasks