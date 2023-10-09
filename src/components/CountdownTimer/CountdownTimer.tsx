import React, { useState } from "react";
import styles from "./CountdownTimer.module.scss";

interface NavTabItem {
    id: number;
    title: string;
}

type data = "POMODORO" | "LONGBREAK" | "SHORTBREAK"

type TimeProps = {
    navTab: NavTabItem[],
    onUpdateTimeMode: (data: data) => void,
    onChangeActiveStatus: () => void,
    duration: string,
    isActive: boolean,
    value: string | number
};

const CountdownTimer: React.FC<TimeProps> = (props)  => {
    const { value, isActive, navTab, onUpdateTimeMode, onChangeActiveStatus } = props;

    const [activeTab, setActiveTab] = useState<string>("Pomodoro")

    const atChangeActive = ():void => {
        onChangeActiveStatus();
    }

    const atChangeCountDownMode = (value: string): void => {
        console.log(value);
        const parse = value.toUpperCase().replace(' ','')
        onUpdateTimeMode(parse as data)
        setActiveTab(value)
    }
 
    return (
        <section className="flex w-full h-full">
            <article className="w-[600px] h-[350px] bg-black m-auto rounded-[8px]">
                <ul className="w-auto flex space-x-3 text-center text-xl cursor-pointer rounded-default justify-center items-center gap-6 menu">
                    {navTab.map((item) => (
                        <li 
                            onClick={() => atChangeCountDownMode(item.title)}
                            className={`relative overflow-hidden block item h-auto border-transparent border-b-2 ${activeTab === item.title ? styles['tab-active'] : ''} hover:text-cyan-500 hover:transition duration-500 after:block after:content-[''] after:h-[2px] after:w-[100%] after:bg-cyan-500 after:transform after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:transform hover:after:scale-[1]`}
                            key={item.id}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>

                

                <div className={`${styles['box']} box relative overflow-hidden h-[350px] bg-custom-gray rounded-[8px] mt-10 flex justify-center items-center flex-wrap`}>
                    <div className="form absolute top-[4px] right-[4px] bottom-[4px] left-[4px] z-[2] bg-gray-800 flex-col flex overflow-hidden">
                        <p className="text-9xl w-full text-center mt-[40px]">{value}</p>
                        <button onClick={atChangeActive} className={`${styles['btn']} btn w-[100px] relative inline-block text-light text-base font-medium border-none py-[10xp] px-[25px] m-auto leading-10 shadow-activeButton transition-all duration-300 ease-in hover:bg-transparent`}>
                            <span className="relative block w-full h-full" >
                                {`${!isActive ? "Start" : "Pause"}`}
                            </span>
                        </button>
                    </div>
                </div>
                
            </article>
        </section>
    )
}

export default CountdownTimer