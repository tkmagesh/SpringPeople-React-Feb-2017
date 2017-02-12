import { combineReducers } from 'redux';

const rootReducer = combineReducers({counterReducer});

function counterReducer(state = 0, action){
	if (action.type === 'INCREMENT')
		return ++state;
	if (action.type === 'DECREMENT')
		return --state;
	return state
}
export default rootReducer;
