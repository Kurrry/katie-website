

export function SelectButton({label}) {
    //console.log(label);
    return(
        <div>
            <button type="button"
                className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-3 px-3 border border-blue-500 hover:border-transparent rounded w-fit">
                <p className="text-xs">{label}</p>
            </button>
        </div>
    )
}