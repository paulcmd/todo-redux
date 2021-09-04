import _ from 'lodash'
const INITIAL_STATE = {
    title: '',
    completed: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODOS:
            return {
                ...state,
                title: action.payload.title,
                completed : action.payload.completed
            }
        case DELETE_TODOS:
            return _.omit(state, action.payload)
        default:
            return state
    }
}
