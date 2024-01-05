

export function SelectButton({label}) {
    //console.log(label);
    return(
        <div>
            <button type="button"
                className="bg-transparent hover:bg-black text-black  hover:text-white py-1 px-3 border border-black border-opacity-40 hover:border-transparent w-fit md:w-[97.72px] 2xl:w-[122.99px] 2xl:px-[1.4rem] 2xl:py-2">
                <p className="text-sm md:text-sm 2xl:text-2xl">{label}</p>
            </button>
        </div>
    )
}