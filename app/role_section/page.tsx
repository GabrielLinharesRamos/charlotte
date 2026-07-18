"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PerfilPage() {
  const [perfilSelecionado, setPerfilSelecionado] = useState<'paciente' | 'fisio' | null>(null);
  const router = useRouter();

  function lidarComContinuar() {
    if (perfilSelecionado === 'paciente') {
      router.push("/login-paciente"); // Rota fictícia para o próximo passo do paciente
    } else if (perfilSelecionado === 'fisio') {
      router.push("/login-fisioterapeuta"); // Rota fictícia para o próximo passo do fisio
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 p-0 sm:p-4 font-sans">
      
      {/* 📱 MOLDURA DO CELULAR (Fundo Branco Nativo da Imagem) */}
      <div className="relative flex h-screen w-full max-w-[400px] flex-col justify-between bg-white p-6 sm:h-[850px] sm:rounded-[40px] sm:border-[8px] sm:border-gray-800 shadow-2xl overflow-hidden select-none">
        
        {/* Linha da câmera do celular (visível apenas no PC) */}
        <div className="hidden sm:block absolute top-2 left-1/2 h-4 w-28 -translate-x-1/2 rounded-full bg-gray-800 z-50" />

        {/* 1. TOPO: Logo e Título */}
        <div className="pt-6">
          {/* Logo pequeno com ícone e texto */}
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0B7B69] p-1.5">
              <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 50 L35 50 L45 25 L55 75 L65 50 L90 50" stroke="white" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-md font-bold text-[#0B7B69]">FisioNow</span>
          </div>

          {/* Títulos Principais */}
          <div className="mt-8 space-y-2">
            <h1 className="text-3xl font-extrabold text-gray-950 tracking-tight leading-tight">
              Como você vai usar o FisioNow?
            </h1>
            <p className="text-sm font-medium text-gray-400">
              Escolha seu perfil para continuar
            </p>
          </div>
        </div>

        {/* 2. CENTRO: Opções de Cartão */}
        <div className="flex flex-col gap-4 my-auto w-full">
          
          {/* Opção: Sou Paciente */}
          <button
            onClick={() => setPerfilSelecionado('paciente')}
            className={`flex items-center gap-4 w-full p-5 rounded-3xl border-2 text-left transition-all duration-200 active:scale-98 ${
              perfilSelecionado === 'paciente'
                ? "border-[#0B7B69] bg-[#0B7B69]/5 shadow-md"
                : "border-gray-100 bg-white hover:border-gray-200"
            }`}
          >
            {/* Ícone quadrado com emoji de Casa */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-50 text-2xl border border-gray-100">
              🏠
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-gray-950">Sou Paciente</h3>
              <p className="text-xs font-medium text-gray-500 leading-snug">
                Quero agendar sessões de fisioterapia em casa
              </p>
            </div>
          </button>

          {/* Opção: Sou Fisioterapeuta */}
          <button
            onClick={() => setPerfilSelecionado('fisio')}
            className={`flex items-center gap-4 w-full p-5 rounded-3xl border-2 text-left transition-all duration-200 active:scale-98 ${
              perfilSelecionado === 'fisio'
                ? "border-[#0B7B69] bg-[#0B7B69]/5 shadow-md"
                : "border-gray-100 bg-white hover:border-gray-200"
            }`}
          >
            {/* Ícone quadrado com emoji de Estetoscópio */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gray-50 text-2xl border border-gray-100">
              🩺
            </div>
            <div className="space-y-1">
              <h3 className="text-base font-bold text-gray-950">Sou Fisioterapeuta</h3>
              <p className="text-xs font-medium text-gray-500 leading-snug">
                Quero oferecer atendimentos e receber pacientes
              </p>
            </div>
          </button>

        </div>

        {/* 3. BASE: Botão Dinâmico Continuar */}
        <div className="mb-6 w-full">
          <button
            disabled={!perfilSelecionado}
            onClick={lidarComContinuar}
            className={`w-full rounded-2xl py-4 text-md font-semibold text-center transition-all duration-300 ${
              perfilSelecionado
                ? "bg-[#0B7B69] text-white shadow-lg shadow-[#0B7B69]/20 active:scale-95"
                : "bg-gray-100 text-gray-400 cursor-not-allowed"
            }`}
          >
            Continuar
          </button>
        </div>

      </div>
    </div>
  );
}