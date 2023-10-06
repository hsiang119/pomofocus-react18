import { combineReducers } from 'redux';
import mode from "./mode";
import active from "./active";

const reducers = combineReducers({
    active,
    mode
});

export default reducers;
