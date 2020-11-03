import { ADD_FEATURE } from '../actions/actions';

export const reducers = (state, action) => {
    console.log(state)
    switch(action.type) {
        case ADD_FEATURE:
            return {}
        default: 
            return state;
    }
}