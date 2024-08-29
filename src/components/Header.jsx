import emblem from "../assets/emblem.png"

function Header() {
    return (
        <div className="flex justify-center items-center space-x-4 py-6">
            <img src={emblem} alt="" className="h-16" />
            <h1 className="text-xl text-gray-600 font-bold">Ministry of <br />
                <span className="font-bold text-4xl mb-7 bg-gradient-to-l from-[#4a3aff] to-[#c893fd] bg-clip-text text-transparent"> COAL </span>
            </h1>
        </div>
    )
}

export default Header;