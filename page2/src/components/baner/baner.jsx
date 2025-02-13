import {Rightbaner} from "./baner-components/rightbaner.jsx";

export function Baner() {
    return (
        <div className={'lg:flex   items-center custom-box lg:px-[70px] relative'}>
            <img src="../../../src/assets/baner/Abstract%20Design.png" className={'absolute top-0 left-0 sm:w-[100px] sm:h-[100px] lg:w-[200px] lg:h-[200px]' } alt=""/>
            <Rightbaner/>
        </div>
    );

}