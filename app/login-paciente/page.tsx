"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginFisioterapeutaPage() {
  const router = useRouter();
  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 p-0 sm:p-4 font-sans">
      
      {/* 📱 MOLDURA DO CELULAR */}
      <div className="relative flex h-screen w-full max-w-[400px] flex-col bg-white p-6 sm:h-[850px] sm:rounded-[40px] sm:border-[8px] sm:border-gray-800 shadow-2xl overflow-hidden select-none">
        
        {/* Linha da câmera do celular (visível apenas no PC) */}
        <div className="hidden sm:block absolute top-2 left-1/2 h-4 w-28 -translate-x-1/2 rounded-full bg-gray-800 z-50" />

        {/* Botão de Voltar */}
        <div className="pt-4">
          <button 
            onClick={() => router.back()}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 border border-gray-100 text-gray-600 transition-all active:scale-90 hover:bg-gray-100"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>
        </div>

        {/* Conteúdo do Formulário */}
        <div className="flex-1 flex flex-col justify-center w-full space-y-8">
          
          {/* Logo e Títulos */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B7B69] p-1.5">
                <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 50 L35 50 L45 25 L55 75 L65 50 L90 50" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-md font-bold text-[#0B7B69]">FisioNow</span>
            </div>

            <div className="space-y-1">
              <h1 className="text-3xl font-extrabold text-gray-950 tracking-tight">
                Bem-vindo de volta
              </h1>
              <p className="text-sm font-medium text-gray-400">
                Entre como paciente
              </p>
            </div>
          </div>

          {/* Inputs */}
          <div className="space-y-4">
            {/* Input E-mail */}
            <div className="relative flex items-center">
              <span className="absolute left-4 text-gray-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </span>
              <input 
                type="email" 
                placeholder="E-mail" 
                className="w-full rounded-2xl bg-gray-50 border border-gray-100 py-4 pl-12 pr-4 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0B7B69] focus:bg-white transition-colors"
              />
            </div>

            {/* Input Senha */}
            <div className="relative flex items-center">
              <span className="absolute left-4 text-gray-400">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0V10.5m9 0h-9M12 18.75V16.5m-6 2.25h12M4.5 10.5H19.5a2.25 2.25 0 012.25 2.25v6.75a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25v-6.75a2.25 2.25 0 012.25-2.25z" />
                </svg>
              </span>
              <input 
                type={mostrarSenha ? "text" : "password"} 
                placeholder="Senha" 
                className="w-full rounded-2xl bg-gray-50 border border-gray-100 py-4 pl-12 pr-12 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#0B7B69] focus:bg-white transition-colors"
              />
              <button 
                type="button"
                onClick={() => setMostrarSenha(!mostrarSenha)}
                className="absolute right-4 text-gray-400 hover:text-gray-600"
              >
                {/* Ícone de Olho Dinâmico */}
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={mostrarSenha ? "M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.822 7.822L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" : "M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M12 15a3 3 0 100-6 3 3 0 000 6z"} />
                </svg>
              </button>
            </div>

            {/* Esqueceu a senha */}
            <div className="flex justify-end">
              <button className="text-xs font-bold text-[#0B7B69] hover:underline">
                Esqueceu a senha?
              </button>
            </div>
          </div>

          {/* Botão Entrar */}
          <button className="w-full rounded-2xl bg-[#0B7B69] py-4 text-md font-semibold text-white shadow-lg shadow-[#0B7B69]/20 transition-all active:scale-95 hover:bg-[#096355]">
            Entrar
          </button>

          {/* Divisor "ou" */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <span className="relative bg-white px-3 text-xs font-medium text-gray-400">ou</span>
          </div>

          {/* Botões Sociais */}
          <div className="grid grid-cols-2 gap-3">
            <button className="flex items-center justify-center gap-2 rounded-2xl bg-gray-50 border border-gray-100 py-3.5 text-xs font-bold text-gray-700 hover:bg-gray-100 transition-colors active:scale-98">
              <svg className="h-4 w-4" viewBox="0 0 24 24">
                <path fill="#EA4335" d="M12.24 10.285V14.4h6.887c-.275 1.565-1.88 4.604-6.887 4.604-4.33 0-7.866-3.577-7.866-8s3.536-8 7.866-8c2.46 0 4.105 1.025 5.047 1.926l3.227-3.227C18.216 1.414 15.442 0 12.24 0 5.58 0 0 5.37 0 12s5.58 12 12.24 12c6.96 0 11.57-4.854 11.57-11.77 0-.795-.085-1.4-.195-1.945H12.24z"/>
              </svg>
              Google
            </button>
            <button className="flex items-center justify-center gap-2 rounded-2xl bg-gray-50 border border-gray-100 py-3.5 text-xs font-bold text-gray-700 hover:bg-gray-100 transition-colors active:scale-98">
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.17c.66-.81 1.11-1.93.99-3.06-1 .04-2.22.67-2.94 1.5-.64.74-1.2 1.88-1.05 3 .1.03 2.34-.63 3-1.44z"/>
              </svg>
              Apple
            </button>
          </div>

          {/* Criar Conta */}
          <div className="text-center pt-2">
            <p className="text-xs font-medium text-gray-400">
              Ainda não tem conta? <button className="font-bold text-[#0B7B69] hover:underline">Criar conta</button>
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}