import {Rightbaner} from "./baner-components/rightbaner.jsx";

export function Baner() {
    return (
        <div className={'lg:flex sm:block  items-center custom-box px-[70px] relative'}>
            <img src="../../../src/assets/baner/Abstract%20Design.png" className={'absolute top-0 left-0'} alt=""/>
            <Rightbaner/>
        </div>
    );

}