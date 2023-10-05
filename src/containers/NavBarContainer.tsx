import { useState, memo } from "react";
import NavBar from "../components/NavBar/NavBar";


const NavBarContinaer = () => {

    const [navTab] = useState([
        {
            id: 'item01',
            name: 'analysis'
        },
        {
            id: 'item02',
            name: 'setting'
        },
        {
            id: 'item03',
            name: 'login'
        },
    ])

    return ( <NavBar navTab={navTab} /> )
}

export default memo(NavBarContinaer);