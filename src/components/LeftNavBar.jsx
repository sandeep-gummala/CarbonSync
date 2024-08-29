import Header from "./Header"
import NavButton from "./NavButton"

function LeftNavBar() {
    return (
        <aside className="w-64 bg-white h-[100vh] flex flex-col sticky top-0">
            <Header />
            <nav className="flex-col space-y-3 mt-5">
                <NavButton name="Dashboard" />
                <NavButton name="Update Data" />
                <NavButton name="Mine Details" />
            </nav>
        </aside>
    )
}

export default LeftNavBar