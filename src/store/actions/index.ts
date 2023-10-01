const POMODORO = 'POMODORO';
const LONGBREAK = 'LONGBREAK';
const SHORTBREAK = 'SHORTBREAK';


type ActionPomodoro = { type: 'POMODORO' };
type ActionLongBreak = { type: 'LONGBREAK' };
type ActionShortBreak = { type: 'SHORTBREAK' };


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

export type ActionModeTypes = ActionPomodoro | ActionLongBreak | ActionShortBreak

export type ActionActiveTypes = boolean