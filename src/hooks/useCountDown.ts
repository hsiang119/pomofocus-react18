import React, { useCallback } from 'react';
import { onGetTime } from "../utils/common";


export default function useCountDown(endTime: number, remainingTime: string) {
    const [value, setValue] = React.useState<number | string>(remainingTime);
    const [isActive, setActive] = React.useState<boolean>(false);
    const [counter, setCounter] = React.useState<number>(endTime);

    React.useEffect(() => {
        if (isActive) {
          const timer = setTimeout(() => {
            const newCounter = counter - 1000;
            setCounter(newCounter);
    
            newCounter <= 0 ? setValue("00:00") : setValue(onGetTime(newCounter));

          }, 1000);
    
          return () => {
            clearTimeout(timer);
          };
        }
    }, [counter, isActive]);

    React.useEffect(() => {
        setValue(remainingTime);
        setCounter(endTime);
        setActive(false);
    }, [remainingTime, endTime]);
      

    const onStart = useCallback((): void => {
        setActive(!isActive);
    }, [isActive]);

    const onStop = useCallback((): void => {
        setActive(!isActive);
    }, [isActive]);

    return {
      value,
      onStart,
      onStop,
      isActive
    };
}
    