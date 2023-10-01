import React, { useCallback } from 'react';


export default function useCountDown(endTime: number) {
    const [value, setValue] = React.useState("fakeValue");
    const [isActive, setActive] = React.useState(false);
    const [counter, setCounter] = React.useState(endTime - Date.now());

    React.useEffect(() => {
        if (isActive) {
          const timer = setTimeout(() => {
            const newCounter = counter - 1000;
            setCounter(newCounter);
    
            newCounter <= 0 ? setValue("timeup") : setValue(onGetTime(newCounter));

          }, 1000);
    
          return () => {
            clearTimeout(timer);
          };
        }
    }, [counter, isActive]);
      
    const onGetTime = (distance: number): string => {
        // const hours = Math.floor(
        //   (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        // );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return `${minutes}:${seconds}`;
    };

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
    