/* eslint-disable default-param-last */
import { ActionModeTypes } from '../actions';

interface initialState {
  mode: string,
  duration: string,
  distance: number
}

const minute = 60 * 1000

const initialState: initialState = {
  mode: "POMODORO",
  duration: "25:00",
  distance: 25 * minute
};

export default function mode(state = initialState, action: ActionModeTypes) {
  switch (action.type) {
    case "POMODORO":
      return {
        ...state,
        ...action.payload,
      };
      
    case "LONGBREAK":
      return {
        ...state,
        ...action.payload,
      };

    case "SHORTBREAK":
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
}
