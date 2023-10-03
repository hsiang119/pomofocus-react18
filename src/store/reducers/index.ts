import { combineReducers } from 'redux';
import TimeMode from './TimeMode';
import active from "./active";

const reducers = combineReducers({
    TimeMode,
    active
});

export default reducers;
