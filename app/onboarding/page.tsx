"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

// Dados das telas do Carrossel
const PASSOS_CARROSSEL = [
  {
    id: 1,
    titulo: "Fisioterapeuta até você",
    descricao: "Encontre profissionais qualificados perto de você e agende uma sessão em minutos.",
    corFundo: "#0B7B69", // 🟢 Cor para o primeiro card (Teal/Green)
    icone: (
      <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
      </svg>
    )
  },
  {
    id: 2,
    titulo: "Profissionais verificados",
    descricao: "Todos os fisioterapeutas passam por verificação de CREFITO e avaliação de pacientes.",
    corFundo: "#1A6BA0", // 🔵 Cor para o segundo card (Blue)
    icone: (
      <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    )
  },
  {
    id: 3,
    titulo: "Acompanhe em tempo real",
    descricao: "Conecte-se em tempo real com profissionais disponíveis imediatamente perto de você.",
    corFundo: "#7C3AED", // 🟣 Cor para o terceiro card (Purple)
    icone: (
      <svg className="h-16 w-16 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
      </svg>
    )
  }
];

export default function OnboardingPage() {
  const [passoAtual, setPassoAtual] = useState(0);
  const router = useRouter();

  function proximoPasso() {
    if (passoAtual < PASSOS_CARROSSEL.length - 1) {
      setPassoAtual(passoAtual + 1);
    } else {
      router.push("/role_section");
    }
  }

  function pularOnboarding() {
    router.push("/role_section");
  }

  const dadosTela = PASSOS_CARROSSEL[passoAtual];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 p-0 sm:p-4 font-sans">
      
      {/* 📱 MOLDURA DO CELULAR */}
      <div 
        style={{ backgroundColor: '#0F1923' }}
        className="relative flex h-screen w-full max-w-[400px] flex-col justify-between p-6 sm:h-[850px] sm:rounded-[40px] sm:border-[8px] sm:border-gray-800 shadow-2xl overflow-hidden"
      >
        <div className="hidden sm:block absolute top-2 left-1/2 h-4 w-28 -translate-x-1/2 rounded-full bg-gray-800 z-50" />

        {/* 1. TOPO: Botão Pular */}
        <div className="flex justify-end pt-4">
          <button 
            onClick={pularOnboarding}
            className="text-sm font-medium text-gray-500 hover:text-white transition-colors"
          >
            Pular
          </button>
        </div>

        {/* 2. CENTRO: Círculos Consecutivos e o Ícone do Slide Atual */}
        <div className="flex flex-col items-center justify-center my-auto px-4 text-center">
          
          {/* Círculos concêntricos em volta do ícone central */}
          <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-gray-800/40">
            <div className="relative flex h-48 w-48 items-center justify-center rounded-full border border-gray-800/60">
              
              {/* 🎨 Círculo central com a cor dinâmica e efeito de sombra acompanhando a cor */}
              <div 
                style={{ 
                  backgroundColor: dadosTela.corFundo,
                  boxShadow: `0 10px 25px -5px ${dadosTela.corFundo}33` // Sombra sutil com opacidade baseada na cor ativa
                }}
                className="flex h-32 w-32 items-center justify-center rounded-full shadow-lg transition-all duration-500"
              >
                {dadosTela.icone}
              </div>

            </div>
          </div>

          {/* Textos Informativos */}
          <div className="mt-8 space-y-4">
            <h2 className="text-3xl font-bold text-white tracking-tight leading-tight">
              {dadosTela.titulo}
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed px-2">
              {dadosTela.descricao}
            </p>
          </div>
        </div>

        {/* 3. BASE: Indicadores de Página (Dots) e Botão Próximo */}
        <div className="mb-6 space-y-8 w-full">
          
          {/* Dots do Carrossel */}
          <div className="flex justify-center items-center space-x-2">
            {PASSOS_CARROSSEL.map((_, index) => (
              <div
                key={index}
                className={`h-2 transition-all duration-300 rounded-full ${
                  index === passoAtual ? "w-6 bg-[#138A72]" : "w-2 bg-gray-700"
                }`}
              />
            ))}
          </div>

          {/* Botão Próximo */}
          <button
            onClick={proximoPasso}
            className="w-full flex items-center justify-center gap-2 rounded-2xl bg-[#138A72] py-4 text-md font-semibold text-white shadow-lg shadow-[#138A72]/20 transition-all active:scale-95 hover:bg-[#0f705d]"
          >
            {passoAtual === PASSOS_CARROSSEL.length - 1 ? "Começar" : "Próximo"}
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}