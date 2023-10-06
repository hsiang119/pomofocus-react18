const POMODORO = "POMODORO";
const LONGBREAK = "LONGBREAK";
const SHORTBREAK = "SHORTBREAK";

const ACTIVE = "TOGGLE_ACTIVE";

interface payload  {
    mode: "POMODORO" | "LONGBREAK" | "SHORTBREAK"
    duration: string,
    distance: number
}


export type ActionPomodoro = { type: "POMODORO", payload: payload };
export type ActionLongBreak = { type: "LONGBREAK", payload: payload };
export type ActionShortBreak = { type: "SHORTBREAK", payload: payload };

export type ActionActive = { type: "TOGGLE_ACTIVE" };


export const actionPomodoro = (): ActionPomodoro => {
    return {
        type: POMODORO,
        payload: {
            mode: POMODORO,
            duration: "25:00",
            distance: 25 * 60 * 1000
        }
    };
};

export const actionLongBreak = (): ActionLongBreak => {
    return {
        type: LONGBREAK,
        payload: {
            mode: LONGBREAK,
            duration: "15:00",
            distance: 15 * 60 * 1000
        }
    };
};

export const actionShortBreak = (): ActionShortBreak => {
    return {
        type: SHORTBREAK,
        payload: {
            mode: SHORTBREAK,
            duration: "05:00",
            distance: 5 * 60 * 1000
        }
    };
};

export const actionActive = (): ActionActive => ({ type: ACTIVE });


export type ActionModeTypes = ActionPomodoro | ActionLongBreak | ActionShortBreak
export type ActionActiveTypes = ActionActive