"use client"

import { useState } from "react";
import BottomNavigation from "@/components/BottomNavigation";

export default function GanhosPage() {
  const [periodoAbas, setPeriodoAbas] = useState<'semana' | 'mes'>('semana');

  // Mocks estruturados com base estrita nos valores da imagem
  const dadosGrafico = [
    { dia: 'Seg', altura: 'h-12', valor: 180 },
    { dia: 'Ter', altura: 'h-24', valor: 360 },
    { dia: 'Qua', altura: 'h-12', valor: 180 },
    { dia: 'Qui', altura: 'h-36', valor: 540 },
    { dia: 'Sex', altura: 'h-24', valor: 360 },
    { dia: 'Sáb', altura: 'h-10', valor: 150 },
    { dia: 'Dom', altura: 'h-0', valor: 0 },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 p-0 sm:p-4 font-sans">
      
      {/* 📱 MOLDURA DO CELULAR */}
      <div className="relative flex h-screen w-full max-w-[400px] flex-col justify-between bg-[#F8F9FA] sm:h-[850px] sm:rounded-[40px] sm:border-[8px] sm:border-gray-800 shadow-2xl overflow-hidden select-none text-gray-900">
        
        {/* Linha da câmera do celular */}
        <div className="hidden sm:block absolute top-2 left-1/2 h-4 w-28 -translate-x-1/2 rounded-full bg-gray-800 z-50" />

        {/* CONTEÚDO INTERNO SCROLLÁVEL */}
        <div className="flex-1 overflow-y-auto px-5 pt-8 pb-24 space-y-5 scrollbar-none">
          
          {/* TOPO: Título Ganhos + Badge de Crescimento */}
          <div className="flex items-center justify-between pt-4">
            <h1 className="text-2xl font-black text-gray-950 tracking-tight">Ganhos</h1>
            <span className="bg-[#EBF7F5] text-[#0B7B69] text-[10px] font-extrabold px-2.5 py-1.5 rounded-full flex items-center gap-1">
              📈 +18% vs mês ant.
            </span>
          </div>

          {/* BLOCO DE FATURAMENTO TOTAL */}
          <div className="space-y-0.5">
            <span className="text-[9px] font-extrabold text-gray-400 uppercase tracking-widest">
              Total — Julho 2026
            </span>
            <div className="text-gray-950 font-black text-4xl tracking-tight flex items-baseline">
              R$ 3.240<span className="text-lg text-gray-400 font-bold ml-0.5">,00</span>
            </div>
            <p className="text-xs font-bold text-gray-400">
              Líquido após taxa: <span className="text-[#0B7B69]">R$ 2.916,00</span>
            </p>
          </div>

          {/* CARD DO GRÁFICO (Fluxo de Receita) */}
          <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm space-y-5">
            
            {/* Header do Card com Toggle de Período */}
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-black text-gray-950 tracking-tight">Fluxo de receita</h3>
              <div className="bg-gray-100 p-0.5 rounded-xl flex gap-0.5">
                <button 
                  onClick={() => setPeriodoAbas('semana')}
                  className={`text-[10px] font-extrabold px-3 py-1.5 rounded-lg transition-all ${
                    periodoAbas === 'semana' ? 'bg-gray-950 text-white shadow-sm' : 'text-gray-400'
                  }`}
                >
                  Semana
                </button>
                <button 
                  onClick={() => setPeriodoAbas('mes')}
                  className={`text-[10px] font-extrabold px-3 py-1.5 rounded-lg transition-all ${
                    periodoAbas === 'mes' ? 'bg-gray-950 text-white shadow-sm' : 'text-gray-400'
                  }`}
                >
                  Mês
                </button>
              </div>
            </div>

            {/* O Gráfico de Barras com Linhas de Fundo */}
            <div className="relative pt-2">
              {/* Linhas Horizontais de Grade / Escala */}
              <div className="absolute inset-x-0 bottom-[18px] top-1 flex flex-col justify-between pointer-events-none text-[9px] font-bold text-gray-300">
                <div className="border-b border-gray-50 pb-0.5 flex justify-between"><span>600</span></div>
                <div className="border-b border-gray-50 pb-0.5 flex justify-between"><span>450</span></div>
                <div className="border-b border-gray-50 pb-0.5 flex justify-between"><span>300</span></div>
                <div className="border-b border-gray-50 pb-0.5 flex justify-between"><span>150</span></div>
                <div className="flex justify-between text-gray-300"><span>0</span></div>
              </div>

              {/* Área das Barras */}
              <div className="relative z-10 flex items-end justify-between pl-6 h-36 w-full">
                {dadosGrafico.map((item, index) => (
                  <div key={index} className="flex flex-col items-center gap-1.5 flex-1">
                    <div 
                      className={`w-5.5 rounded-md transition-all duration-500 bg-[#319783] hover:bg-[#0B7B69] cursor-pointer ${item.altura}`} 
                    />
                    <span className="text-[10px] font-bold text-gray-400">
                      {item.dia}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Resumo abaixo do Gráfico */}
            <div className="flex justify-between items-center pt-2 border-t border-gray-50">
              <div>
                <span className="text-[9px] font-bold text-gray-400 block">Total no período</span>
                <span className="text-base font-black text-gray-950">R$ 1.755</span>
              </div>
              <div className="text-right">
                <span className="text-[9px] font-bold text-gray-400 block">Média por dia</span>
                <span className="text-base font-black text-[#0B7B69]">R$ 293</span>
              </div>
            </div>

          </div>

          {/* GRID DE CARDS MÉTRICOS INFRA */}
          <div className="grid grid-cols-2 gap-3">
            
            {/* Card 1: Sessões realizadas */}
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between min-h-[105px]">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-50 text-[#0B7B69] font-bold text-sm">
                📅
              </div>
              <div className="space-y-0.5 mt-3">
                <div className="text-xl font-black text-gray-950 leading-none">18</div>
                <div className="text-[10px] font-medium text-gray-400 leading-tight">
                  Sessões realizadas este mês
                </div>
              </div>
            </div>

            {/* Card 2: Ticket Médio */}
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between min-h-[105px]">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-purple-50 text-purple-600 font-bold text-sm">
                📈
              </div>
              <div className="space-y-0.5 mt-3">
                <div className="text-xl font-black text-gray-950 leading-none">R$ 180</div>
                <div className="text-[10px] font-medium text-gray-400 leading-tight">
                  Ticket médio por sessão
                </div>
              </div>
            </div>

            {/* Card 3: Taxas de Intermediação */}
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between min-h-[105px]">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-50 text-amber-600 font-bold text-sm">
                💼
              </div>
              <div className="space-y-0.5 mt-3">
                <div className="text-xl font-black text-gray-950 leading-none">R$ 324</div>
                <div className="text-[10px] font-medium text-gray-400 leading-tight">
                  Taxas aplicadas na plataforma
                </div>
              </div>
            </div>

            {/* Card 4: Repasse Líquido */}
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between min-h-[105px]">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-blue-600 font-bold text-sm">
                🛡️
              </div>
              <div className="space-y-0.5 mt-3">
                <div className="text-xl font-black text-gray-950 leading-none">R$ 2.916</div>
                <div className="text-[10px] font-medium text-gray-400 leading-tight">
                  Valor disponível para saque
                </div>
              </div>
            </div>

          </div>

        </div> {/* Fim do Conteúdo interno */}

        {/* Menu de Navegação Inferior */}
        <BottomNavigation />

      </div> {/* Fim da Moldura */}
    </div>
  );
}