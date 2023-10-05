import React, { memo, useState } from "react";
import { Link } from 'react-router-dom';
import styles from './Navbar.module.scss';



interface NavTabItem {
    id: string;
    name: string;
}
  
type Props = {
    navTab: NavTabItem[];
};

const NavBar: React.FC<Props> = (props) => {

    const { navTab } = props

    const [isActive, setIsActive] = useState<boolean>(false);

    const handleBurgerMenu = (): void => {
        setIsActive(!isActive);
    };

    return (
        <header className="flex justify-between h-20 w-[97%] mb-[30px]">
            <h1 className="leading-loose contrast-20 w-[100px] text-center">
                <Link to="/" className="animate-letterMove whitespace-nowrap">Pomofocus</Link>
            </h1>
            
            <nav className="animate-fadeIn flex items-center gap-2 max-md:hidden">
                <ul className="flex">
                    {navTab.map((tab) => {
                        return <li key={tab.id} className="leading-loose ml-5 min-h-full transition-transform transition-shadow duration-300 hover:translate-y-[2px] active:translate-y-[5px]"><Link className="text-base max-w-prose nav-item " to={tab.name} >{tab.name}</Link></li>
                    })}
                </ul>
            </nav>

            <div 
                className={`${styles["menu-btn"]} ${isActive ? 'active' : ''} md:hidden menu-btn relative flex justify-center items-center w-[80px] h-[80px] cursor-pointer transition duration-500 ease-in-out `}
                onClick={handleBurgerMenu}
            >
                <div className={`${styles["menu-btn__burger"]} w-[45px] h-[6px] bg-primary rounded-[2px] shadow-burger transition duration-500 ease-in-out`}></div>
            </div>


        </header>
    )
}

export default memo(NavBar, () => true)