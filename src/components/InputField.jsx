
function InputField({type, placeholder, id}) {
    return (
        <input id={id} className="w-full pr-3 pl-4 py-2 text-gray-700 border-2 border-gray-300 rounded-lg" type={type} placeholder={placeholder} required />
    )
}

export default InputField;