export function TittleItem({ title, description }) {
    return (
        <div className={''}>
            <h4 className={'lg:text-[28px] sm:text-[22px]'}>{title}</h4>
            <p className={'text-[18px] text-[#333333] mt-5'}>{description}</p>
        </div>
    );
}