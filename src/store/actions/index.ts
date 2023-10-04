const POMODORO = 'POMODORO';
const LONGBREAK = 'LONGBREAK';
const SHORTBREAK = 'SHORTBREAK';

const SET_ACTIVE = 'SET_ACTIVE';
const SET_INACTIVE = 'SET_INACTIVE';


type ActionPomodoro = { type: 'POMODORO' };
type ActionLongBreak = { type: 'LONGBREAK' };
type ActionShortBreak = { type: 'SHORTBREAK' };

type ActionActive = { type: "TOGGLE_ACTIVE" }


export const actionPomodoro = (): ActionPomodoro => {
    return {
        type: POMODORO,
    };
};

export const actionLongBreak = (): ActionLongBreak => {
    return {
        type: LONGBREAK,
    };
};

export const actionShortBreak = (): ActionShortBreak => {
    return {
        type: SHORTBREAK,
    };
};

export const setActive = () => ({ type: SET_ACTIVE });
export const setInactive = () => ({ type: SET_INACTIVE });

export type ActionModeTypes = ActionPomodoro | ActionLongBreak | ActionShortBreak
export type ActionActiveTypes = ActionActive