
export function Navitem() {
    return (
        <div>
            <div className={"custom-box m-0  relative flex items-end mt-[300px]"}>
                <div className={'flex items-center lg:w-auto sm:w-[74%]  gap-[40px] justify-between child:w-[250px] absolute sm:bottom-[81%] lg:bottom-[75%]'}>
                    <img className={'lg:block lg:w-[250px] sm:w-full'} src="../../../../src/assets/nav/Image.png" alt=""/>
                    <img className={'lg:block sm:hidden'} src="../../../../src/assets/nav/Image%20(2).png" alt=""/>
                    <img className={'lg:block sm:hidden'} src="../../../../src/assets/nav/Image%20(3).png" alt=""/>
                    <img className={'lg:block sm:hidden'} src="../../../../src/assets/nav/Image%20(1).png" alt=""/>
                </div>
                <div className={'mt-[40px] w-full'}>
                    <div>
                        <div className={'lg:flex sm:flex-col lg:flex-row lg:items-center lg:justify-between'}>
                            <h1 className={'text-[42px] sm:text-center'}>Classrooms</h1>
                            <div className={'flex items-center sm:justify-center lg:justify-between gap-4'}>
                                <a href="#"
                                   className={'p-[14px] border-[2px] rounded-[8px] rotate-180 border-[#333333] flex'}><img
                                    src="../../../../src/assets/header/Vector%20(Stroke).svg" alt=""/></a>
                                <a href="#"
                                   className={'p-[14px] border-[2px] rounded-[8px]  border-[#333333] flex'}><img
                                    src="../../../../src/assets/header/Vector%20(Stroke).svg" alt=""/></a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className={'text-[18px] text-[#4C4C4D] sm:text-center lg:text-justify mt-5'}>Our well-equipped classrooms are designed to provide
                            a
                            nurturing and stimulating learning
                            environment. Each classroom is thoughtfully arranged to inspire creativity, curiosity, and
                            engagement.</p>
                    </div>
                </div>
            </div>
        </div>
    );

}