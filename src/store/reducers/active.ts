/* eslint-disable default-param-last */
import { ActionActiveTypes, ACTIVE  } from '../actions';

interface initialState {
  isActive: boolean;
}

const initialState: initialState = {
  isActive: false
};

export default function active(state = initialState, action: ActionActiveTypes) {
  switch (action.type) {
    case ACTIVE:
      return {
        ...state,
        isActive: !state.isActive
      };
    default:
      return state;
  }
}
