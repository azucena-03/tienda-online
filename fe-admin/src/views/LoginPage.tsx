import axios from "axios";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const navigate = useNavigate();
    const [loginData, setLoginData] = useState({
        "Email": "",
        "Password": ""
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setLoginData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post("https://localhost:7251/api/Usuario/login", loginData);

            const data = response.data;
            console.log("Login exitoso:", data);

            if (data.token) {
                localStorage.setItem("token", data.token);
                navigate("/dashboard");
            }

        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error("Error de Axios:", error.response?.data);
            } else {
                console.error("Error desconocido:", error);
            }
        }
    };

    return (
        <div className="grid grid-cols-2">
            <div className="bg-[url('/login.png')] bg-bottom h-screen bg-no-repeat">
                <img src="/logo.png" alt="logo" className="mx-auto mt-5" />
            </div>
            <div className="flex flex-col gap-y-6 max-w-[798px] px-10 self-center">
                <div className="flex flex-col gap-y-2">
                    <h2 className="text-3xl font-semibold">Iniciar Sesión</h2>
                    <a href="#" className="text-base underline font-semibold">¿Olvidaste tu contraseña?</a>
                </div>

                <form className="flex flex-col gap-y-6" onSubmit={handleLogin}>
                    <input type="text" placeholder="Email" className="h-12 w-full border border-black rounded-md indent-4" required name="Email" value={loginData.Email} onChange={handleChange} />
                    <input type="password" placeholder="Password" className="h-12 w-full border border-black rounded-md indent-4" required name="Password" value={loginData.Password} onChange={handleChange} />
                    <button type="submit" className="bg-[#232321] text-white w-full flex justify-between items-center h-12 px-4 rounded-md">
                        <span className="text-sm font-medium uppercase">Email Login </span>
                        <FaArrowRight />
                    </button>
                </form>

                <p>Al hacer clic en 'Iniciar sesión', acepta los Términos y condiciones de KicksClub de nuestro sitio web, el Aviso de privacidad de Kicks y los Términos y condiciones.</p>
            </div>
        </div>
    )
}

export default LoginPage
