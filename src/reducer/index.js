import _ from 'lodash'
const INITIAL_STATE = {
    title: '',
    completed: false
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                title: action.payload,
                completed: action.payload
            }
        case DELETE_TODO:
            return _.omit(state, action.payload)
        default:
            return state
    }
}
