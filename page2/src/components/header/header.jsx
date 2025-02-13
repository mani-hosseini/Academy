import {useState} from 'react'
import {Top} from "./header-components/sectionTop.jsx";
import Botoom from "./header-components/sectionBotoom.jsx";
import {Baner} from "../baner/baner.jsx";

function Header() {

    return (
        <header className={'m-auto w-[95%] flex flex-col gap-y-[14px] mt-5'}>
            <Top/>
            <Botoom/>
            <Baner/>
        </header>
    )
}

export default Header;
