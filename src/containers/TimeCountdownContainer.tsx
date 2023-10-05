import { useCallback, memo, useState } from 'react';
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


const TimeCountdownContainer = () => {

  
  const [navTab, setNavTab] = useState<NavTabItem[]>([
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
  ])
  
  const { active, duration, distance, ...rest  } = useAppSelector((state) => {
    return {
      mode: state.TimeMode.mode,
      duration: state.TimeMode.duration,
      active: state.active.isActive,
      distance: state.TimeMode.distance
    };
  }, shallowEqual);
  
  const { value, onStart, onStop, isActive } = useCountdown(distance, duration);

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

  const atChangeActiveStatus = useCallback(
    () => {
      if (!isActive) {
        console.log("1");
        onStart()
      } else {
        console.log("2");
        onStop()
      }
      dispatch(actionActive());
    },
    [dispatch, isActive],
  )

  return(
    <CountdownTimer value={value} isActive={isActive} duration={duration} navTab={navTab} onUpdateTimeMode={atUpdateTimeMode} onChangeActiveStatus={atChangeActiveStatus} />
  )
};

export default memo(TimeCountdownContainer);