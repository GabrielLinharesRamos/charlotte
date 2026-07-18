"use client"

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function SplashScreen() {
  const router = useRouter();

  useEffect(() => {
    // Define o cronômetro de 4 segundos (4000ms)
    const timer = setTimeout(() => {
      router.push("/onboarding");
    }, 4000);

    // Limpa o timer caso o usuário saia da tela antes dos 4 segundos
    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 p-0 sm:p-4 font-sans">
      
      {/* 📱 MOLDURA DO CELULAR */}
      <div 
        style={{ backgroundColor: '#0F1923' }}
        className="relative flex h-screen w-full max-w-[400px] flex-col items-center sm:h-[850px] sm:rounded-[40px] sm:border-[8px] sm:border-gray-800 shadow-2xl overflow-hidden"
      >
        
        {/* Linha da câmera do celular (visível apenas no PC, z-index alto para ficar por cima) */}
        <div className="hidden sm:block absolute top-2 left-1/2 h-4 w-28 -translate-x-1/2 rounded-full bg-gray-800 z-50" />

        {/* ----------------- CONTEÚDO DA SPLASH SCREEN (Centralizado na tela) ----------------- */}
        <div className="flex-1 flex flex-col items-center justify-center w-full px-8 gap-y-12">
          
          {/* 🟢 O ÍCONE DA MARCA */}
          <div className="relative group">
            {/* Efeito de brilho sutil atrás do ícone */}
            <div className="absolute -inset-0.5 rounded-3xl bg-emerald-500 opacity-20 blur-sm group-hover:opacity-30 transition-opacity"></div>
            
            {/* O quadrado arredondado com o ícone */}
            <div className="relative flex h-32 w-32 items-center justify-center rounded-[32px] bg-emerald-600 p-6 shadow-xl">
              {/* Ícone de batimento cardíaco em SVG */}
              <svg viewBox="0 0 100 100" className="h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 50 L35 50 L45 25 L55 75 L65 50 L90 50" stroke="white" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          {/* 📝 OS TEXTOS */}
          <div className="text-center space-y-3">
            <h1 className="text-4xl font-extrabold text-white tracking-tight">
              FisioEmCasa
            </h1>
            <p className="text-sm font-medium text-gray-400">
              Fisioterapia onde você estiver
            </p>
          </div>

        </div>

        {/* ⏳ O INDICADOR DE PROGRESSO (Posicionado no terço inferior) */}
        <div className="absolute bottom-24 w-full flex justify-center">
          <div className="flex space-x-2">
            <div className="h-2 w-2 rounded-full bg-emerald-600 opacity-50"></div>
            <div className="h-2 w-2 rounded-full bg-emerald-600 opacity-75"></div>
            <div className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse"></div>
          </div>
        </div>

      </div>
    </div>
  );
}