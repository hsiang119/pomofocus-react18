import React from "react";

interface NavTabItem {
    id: string;
    title: string;
}

type TimeProps = {
    navTab: NavTabItem[],
    onUpdateTimeMode: (data: string) => void,
    onChangeActiveStatus: () => void,
    duration: string,
    isActive: boolean,
    value: string | number
};

const CountdownTimer: React.FC<TimeProps> = (props)  => {
    const { value, isActive, navTab, duration, onUpdateTimeMode, onChangeActiveStatus } = props;

    const atChangeActive = ():void => {
        onChangeActiveStatus();
    }

    const atChangeCountDownMode = (value: string): void => {
        onUpdateTimeMode(value)
    }
 
    return (
        
        <section className="flex w-full h-full">
            <article className="w-[600px] h-[350px] bg-black m-auto rounded-[8px]">
                <ul className="w-auto flex space-x-3 text-center text-xl cursor-pointer rounded-default justify-center items-center gap-6 menu">
                    {navTab.map((tab) => {
                        return <li onClick={() => atChangeCountDownMode(tab.title)} className="block item h-auto hover:text-cyan-500 border-transparent border-b-2 hover:border-b-cyan-500 hover:transition duration-500" key={tab.id}>{tab.title}</li>
                    })}
                    {/* <li 
                        @click="onChangeTab(item.title)" 
                        :className="{ 'tab-active': activeTab === item.title }"
                        class="block item h-auto hover:text-cyan-500 border-transparent border-b-2 hover:border-b-cyan-500 hover:transition duration-500"
                        v-for="item in COUNTDOWN_MODE"
                        :key="item.id"
                    >
                        {{ item.title }}
                    </li> */}
                </ul>
                <div className="box relative overflow-hidden h-[350px] bg-custom-gray rounded-[8px] mt-10 flex justify-center items-center flex-wrap ">
                <div className="form absolute top-[4px] right-[4px] bottom-[4px] left-[4px] z-[2] flex-col flex overflow-hidden">
                    <p className="text-9xl w-full text-center mt-[40px]">{value}</p>
                    <button className="btn w-[100px] relative inline-block text-light text-base font-medium border-none py-[10xp] px-[25px] m-auto leading-10 shadow-activeButton transition-all duration-300 ease-in hover:bg-transparent">
                        <span className="relative block w-full h-full" onClick={atChangeActive}>
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