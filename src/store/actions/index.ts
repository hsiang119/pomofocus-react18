const POMODORO = "POMODORO";
const LONGBREAK = "LONGBREAK";
const SHORTBREAK = "SHORTBREAK";

const ACTIVE = "TOGGLE_ACTIVE";


export type ActionPomodoro = { type: "POMODORO" };
export type ActionLongBreak = { type: "LONGBREAK" };
export type ActionShortBreak = { type: "SHORTBREAK" };

export type ActionActive = { type: "TOGGLE_ACTIVE" };


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

export const actionActive = (): ActionActive => ({ type: ACTIVE });


export type ActionModeTypes = ActionPomodoro | ActionLongBreak | ActionShortBreak
export type ActionActiveTypes = ActionActive