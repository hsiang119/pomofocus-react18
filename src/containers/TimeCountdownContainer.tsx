import { useCallback } from 'react';
import { shallowEqual } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../store';
import CountdownTimer from "../components/CountdownTimer/CountdownTimer";
import { actionPomodoro, actionLongBreak, actionShortBreak, actionActive } from "../store/actions/index";
import useCountdown from "../hooks/useCountDown";


type data = "POMODORO" | "LONGBREAK" | "SHORTBREAK"

interface NavTabItem {
  id: number,
  title: string
}

const navTab: NavTabItem[] = [
  {
    id: 1,
    title: 'Pomodoro',
  },
  {
    id: 2,
    title: 'Short Break',
  },
  {
    id: 3,
    title: 'Long Break',
  }
]

const TimeCountdownContainer = () => {
  const dispatch = useAppDispatch();

  const atUpdateTimeMode = useCallback(
    (data: data) => {

      const processedData = data.toUpperCase().replace(/\s+/g, "");
      switch(processedData) {
        case "POMODORO":
          dispatch(actionPomodoro());
          break;
        case "LONGBREAK":
          dispatch(actionLongBreak());
          break;
        case "SHORTBREAK":
          dispatch(actionShortBreak());
          break;
        default:
          console.error("Invalid mode passed: ", data);
      }
      
    },
    [dispatch],
  )

  const { duration, distance } = useAppSelector((state) => {
    return {
      duration: state.mode.duration,
      distance: state.mode.distance,
    };
  }, shallowEqual);

  const { value, onStart, onStop, isActive } = useCountdown(distance, duration);

  const atChangeActiveStatus = useCallback(
    () => {
      if (!isActive) {
        onStart()
      } else {
        onStop()
      }
      dispatch(actionActive());
    },
    [dispatch, isActive],
  )

  return (
    <CountdownTimer value={value} isActive={isActive} duration={duration} navTab={navTab} onUpdateTimeMode={atUpdateTimeMode} onChangeActiveStatus={atChangeActiveStatus} />
  )
};

export default TimeCountdownContainer;