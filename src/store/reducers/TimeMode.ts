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

export default function changeModeType(state = initialState, action: ActionModeTypes) {
  switch (action.type) {
    case "POMODORO":
      return {
        ...state,
        mode: "POMODORO",
        duration: "25:00",
        distance: 25 * minute 
      };
      
    case "LONGBREAK":
      return {
        ...state,
        mode: "LONGBREAK",
        duration: "15:00",
        distance: 15 * minute
      };

    case "SHORTBREAK":
      return {
        ...state,
        mode: "SHORTBREAK",
        duration: "05:00",
        distance: 5 * minute
      };

    default:
      return state;
  }
}
