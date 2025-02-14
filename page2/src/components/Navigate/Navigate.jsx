import {Navitem} from "./navcomponents/navitem.jsx";
import {Navitem1} from "./navcomponents/navitem1.jsx";
import {Navitem2} from "./navcomponents/navitem2.jsx";
import {Navitem3} from "./navcomponents/navitem3.jsx";
import {Navitem4} from "./navcomponents/navitem4.jsx";


export function Navigate() {
    return (
        <div>
            <div>
                <Navitem/>
                <Navitem1/>
                <Navitem2/>
                <Navitem3/>
                <Navitem4/>
            </div>
        </div>
    );

}