"use client";

import React, { useEffect } from "react";

interface LoadingScreenProps {
  symptom: string;
  onCancel: () => void;
  onSuccess: () => void;
}

/* ─── Ícone da Bússola/Seta de Navegação ───────── */
const IconCompass = () => (
  <svg className="w-8 h-8 text-white rotate-[15deg]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

export default function LoadingScreen({ symptom, onCancel, onSuccess }: LoadingScreenProps) {
  
  // Simula a busca do profissional por 4 segundos e então dispara o sucesso
  useEffect(() => {
    const timer = setTimeout(() => {
      onSuccess();
    }, 4500);

    return () => clearTimeout(timer);
  }, [onSuccess]);

  return (
    <div className="absolute inset-0 bg-[#0B131F] flex flex-col items-center justify-between p-6 text-center z-50 animate-fade-in">
      
      {/* Espaço em branco superior (equivalente ao notch de notch invisível) */}
      <div className="h-6" />

      {/* Radar de Busca Central */}
      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-xs">
        
        {/* Círculo do Radar com Ondas Pulsantes */}
        <div className="relative flex items-center justify-center w-48 h-48 mb-8">
          {/* Onda 3 */}
          <div className="absolute inset-0 rounded-full bg-teal-500/5 animate-pulse scale-[1.1] border border-teal-500/10" />
          {/* Onda 2 */}
          <div className="absolute inset-4 rounded-full bg-teal-500/10 animate-ping opacity-75" />
          {/* Onda 1 */}
          <div className="absolute inset-8 rounded-full bg-teal-600/15 border border-teal-500/20" />
          
          {/* Círculo Central Verde Sólido */}
          <div className="relative w-24 h-24 rounded-full bg-[#0D7A5A] flex items-center justify-center shadow-lg shadow-teal-900/30">
            <IconCompass />
          </div>
        </div>

        {/* Textos de busca */}
        <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
          Buscando profissional
        </h2>
        <p className="text-xs text-slate-400 mt-2.5 max-w-[240px] leading-relaxed">
          Encontrando o fisioterapeuta mais próximo para
        </p>

        {/* Tag Dinâmica do Sintoma Selecionado */}
        <div className="mt-4 px-5 py-2.5 rounded-full bg-teal-950/60 border border-teal-850/50 text-[#2DD4A0] text-xs font-black select-none">
          {symptom}
        </div>

        {/* Pontinhos Pulsantes de Carregamento */}
        <div className="flex items-center gap-1.5 mt-8">
          <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4A0] animate-bounce" style={{ animationDelay: "0ms" }} />
          <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4A0] animate-bounce" style={{ animationDelay: "150ms" }} />
          <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4A0] animate-bounce" style={{ animationDelay: "300ms" }} />
        </div>
      </div>

      {/* Botão Cancelar Busca */}
      <div className="w-full max-w-xs mb-4 shrink-0">
        <button
          onClick={onCancel}
          className="w-full py-4 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 text-slate-300 text-xs font-black tracking-wide text-center transition-all duration-200 cursor-pointer active:scale-[0.99]"
        >
          Cancelar busca
        </button>
      </div>

    </div>
  );
}
