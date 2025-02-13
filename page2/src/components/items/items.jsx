import {ItemContainer} from "./item-components/itemContainer.jsx";

export function Items() {
    const items = [
        {
            title: "Thematic Learning",
            description: "Our curriculum is centered around engaging themes that capture children's imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant.",
        },
        {
            title: "STEAM Education",
            description: "We offer innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that promote hands-on exploration, critical thinking, and problem-solving skills.",
        },
        {
            title: "Language Immersion",
            description: "Through language immersion programs, children have the opportunity to learn a second language, enhancing cognitive development and global awareness.",
        },
        {
            title: "Art and Creativity",
            description: "Art is celebrated at Little Learners Academy. Our art-focused activities encourage self-expression, creativity, and the appreciation of various art forms.",
        },
        {
            title: "Outdoor Education",
            description: "Our expansive outdoor learning spaces provide a stimulating environment for children to explore nature, fostering a connection with the environment.",
        },
        {
            title: "Play-Based Learning",
            description: "Play is an integral part of early childhood education. Our play-based approach enhances social skills, emotional development, and imaginative thinking.",
        },
    ];

    return (
        <div className={'flex flex-col lg:mt-[100px] sm:mt-[50px]'}>
            <div>
                <div className={'lg:flex sm:block items-stretch justify-between gap-[40px]'}>
                    {items.slice(0, 3).map((item, index) => (
                        <ItemContainer key={index} item={item} className={'flex-1'}/>
                    ))}
                </div>
                <div className={'lg:flex sm:block items-stretch justify-between gap-[40px]'}>
                    {items.slice(3, 6).map((item, index) => (
                        <ItemContainer key={index} item={item} className={'flex-1'}/>
                    ))}
                </div>
            </div>
        </div>
    );
}