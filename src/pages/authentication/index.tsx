import { Eye, EyeOff, LockIcon, User } from "lucide-react";
import { Button } from "../../components/button";
import { useState } from "react";

export function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  const tooglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="h-screen w-screen bg-pattern bg-no-repeat bg-center flex justify-center ">
      <div className="flex h-full justify-center flex-col gap-10 items-center w-420px">
        <div className="items-center flex flex-col gap-4">
          <img src="/logo.svg" alt="" className="h-12" />
          <p className="text-white font-semibold text-sm">
            Seu guia para viagens planejadas de forma fácil e rápida
          </p>
        </div>

        <div className="items-end flex flex-col gap-5 ">
          <div className="h-[50px] bg-zinc-900 rounded-xl px-6 w-[420px] flex items-center shadow-shape gap-3 ">
            <User className="size-5 text-zinc-600" />
            <input
              type="text"
              placeholder="Digite seu e-mail"
              className="bg-transparent text-lg placeholder-zinc-600 outline-none text-zinc-200 w-full"
            />
          </div>

          <div className="h-[50px] bg-zinc-900 rounded-xl px-6 w-[420px] flex items-center shadow-shape gap-3">
            <LockIcon className="size-5 text-zinc-600" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Digite sua senha"
              className="bg-transparent text-lg placeholder-zinc-600 outline-none text-zinc-200 w-full  "
            />
            <button onClick={tooglePasswordVisibility}>
              {showPassword ? (
                <EyeOff className="text-zinc-600" />
              ) : (
                <Eye className="text-zinc-600" />
              )}
            </button>
          </div>

          <a href="" className="text-zinc-300 text-xs font-medium">
            Esqueci minha senha?
          </a>
        </div>

        <Button variant="primary" size="full">
          Login
        </Button>
      </div>
    </div>
  );
}
