export const tasks = (state = [], action) => {
    switch(action.type) {
        case 'ADD_TASK':
            const task = { title: action.title }
            const length = state.length
            const id = length === 0 ? 1 : state[length - 1].id + 1
            return [...state,  { id: id, ...task}]

        case 'DELETE_TASK':
            return state
        
        default:
            throw new Error()
    }
}
