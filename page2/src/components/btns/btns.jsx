export function Btns() {
    const buttons = [
        "All ",
        "Classrooms",
        "Library",
        "Science Lab",
        "Computer Lab",
        "Garden and Nature Area"
    ];

    return (
        <div className="flex items-center justify-center flex-wrap gap-4 mt-[100px]">
            {buttons.map((text, index) => (
                <a
                    key={index}
                    href="#"
                    className="py-2 px-4 border-2 border-black rounded-[8px] bg-white hover:bg-[#FFEFE5] transition-colors duration-200 "
                >
                    {text}
                </a>
            ))}
        </div>
    );
}