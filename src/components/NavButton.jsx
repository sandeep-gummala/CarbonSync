export default function NavButton({name}) {
    let style = name == "Dashboard" ? "w-[90%] px-10 py-2 rounded-lg flex items-center text-white space-x-4 bg-gradient-to-l from-[#4a3aff] cursor-pointer to-[#c893fd] mx-auto"
                                    : "w-[90%] px-10 py-2 rounded-lg flex items-center space-x-4 hover:bg-gradient-to-l from-[#4a3aff] to-[#c893fd] cursor-pointer hover:text-white mx-auto";
    return(
        <div className={style}>
            <img src="assets/icons/dashboard.svg" alt="" class="h-6" />
            <h2 className="font-semibold text-md">{name}</h2>
        </div>
    )
} 