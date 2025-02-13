import { Icons } from "./icons.jsx";
import { TittleItem } from "./tittle-item.jsx";

export function ItemContainer({ item }) {
    return (
        <div className={"custom-box relative"}>
            <Icons />
            <TittleItem
                title={item.title}
                description={item.description}
            />
        </div>
    );
}