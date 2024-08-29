import InputField from "../components/InputField";
import logo from "../assets/logo.png";
import Header from "../components/Header";

function LoginPage() {
    return <>
        <div className="bg-zinc-200 flex justify-center items-center min-h-screen w-screen">
            <img src={logo} alt="" className="absolute -top-4 left-4 h-24" />
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-[25vw] p-6 bg-zinc-300 md:bg-white lg:bg-white rounded-lg shadow-lg">
                <Header/>
                <InputField type="text" placeholder="User id" id="input-field" />
                <p id="userid-error" className="text-sm text-red-500 font-semibold ml-2 mt-1 hidden">Invalid User id</p>
                <div className="w-full relative mt-6">
                    <InputField type="password" placeholder="Password" id="password-field" />
                    <span id="password-toggle" className="hover:cursor-pointer absolute right-4 top-[10px]">👁️</span>
                </div>
                <p id="password-error" className="text-sm text-red-500 font-semibold mb-5 ml-2 mt-1 hidden">Incorrect Password</p>
                <div className="mb-6 mt-6 flex justify-center items-center">
                    <button id="login-btn" className="w-[150px] text-center bg-gradient-to-l opacity-[0.9] hover:opacity-[1] from-[#4a3aff] to-[#c893fd] text-white font-bold py-2 px-4 rounded-lg " type="submit">Login</button>
                </div>
            </div>
        </div>
    </>
}

export default LoginPage;