import image1 from "../assets/construction.png"
import image2 from "../assets/transportation.png"
import image3 from "../assets/machinery.png"
import image4 from "../assets/others.png"


export default function DataCard({name, index}) {
    let images = [image1, image2, image3, image4]
    return( index == 0 ?
        <div className="p-4 bg-gradient-to-tl from-[#4a3aff] to-[#c893fd] w-fit rounded-lg">
            <p className="text-sm text-[#ffffff] font-semibold">{name}</p>
            <div className="flex justify-between items-end space-x-16">
                <h1 className="text-4xl text-white font-bold font-sans">3.1K</h1>
                <img src = {images[index]} alt="" className="h-7" />
            </div>
        </div>

        : <div className=" bg-white text-black w-fit hover:bg-gradient-to-tl from-[#4a3aff] to-[#c893fd] duration-1000 cursor-pointer rounded-lg">
                <div className="p-4 hover:invert invert-0 duration-100">
                    <p className="text-sm font-semibold">{name}</p>
                    <div className="flex justify-between items-end space-x-16 ">
                        <h1 className="text-4xl font-bold font-sans ">3.1K</h1>
                        <img src={images[index]} alt="" className="h-7 " />
                    </div>
                </div>
            </div>
    )
}