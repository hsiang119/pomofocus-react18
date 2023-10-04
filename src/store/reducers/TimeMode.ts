import { ActionModeTypes } from '../actions';

interface initialState {
  mode: string,
  duration: number
}

const initialState: initialState = {
  mode: "POMODORO",
  duration: 25 * 60 * 60 * 1000,
};

export default function changeModeType(state = initialState, action: ActionModeTypes) {
  switch (action.type) {
    case "POMODORO":
      return {
        ...state,
        mode: "POMODORO",
        duration: 25 * 60 * 60 * 1000, 
      };
    case "LONGBREAK":
      return {
        ...state,
        mode: "LONGBREAK",
        duration: 15 * 60 * 60 * 1000,
      };
    case "SHORTBREAK":
      return {
        ...state,
        mode: "SHORTBREAK",
        duration: 5 * 60 * 60 * 1000,
      };
    default:
      return state;
  }
}
