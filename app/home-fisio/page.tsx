"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import BottomNavigation from "@/components/BottomNavigation";
import BottomSheetModal from "@/components/BottomSheetModal";
import { LISTA_PACIENTES, Paciente } from "@/mock/pacientes";

export default function HomeFisioterapeutaPage() {
  const router = useRouter();
  
  // Estado para controlar qual paciente está ativo no Bottom Sheet Modal (null = fechado)
  const [pacienteSelecionado, setPacienteSelecionado] = useState<Paciente | null>(null);

  // Buscando o Carlos Souza (ID 1) diretamente do mock unificado para o card de destaque
  const proximoAgendamento = LISTA_PACIENTES.find(p => p.id === 1) || LISTA_PACIENTES[0];

  // Mock simples para o gráfico de barras da semana
  const dadosGrafico = [
    { dia: 'S', altura: 'h-10', ativo: false },
    { dia: 'T', altura: 'h-16', ativo: false },
    { dia: 'Q', altura: 'h-12', ativo: false },
    { dia: 'Q', altura: 'h-20', ativo: false },
    { dia: 'S', altura: 'h-11', ativo: false },
    { dia: 'S', altura: 'h-24', ativo: false },
    { dia: 'D', altura: 'h-28', ativo: true }, 
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 p-0 sm:p-4 font-sans">
      
      {/* 📱 MOLDURA DO CELULAR */}
      <div className="relative flex h-screen w-full max-w-[400px] flex-col justify-between bg-[#F8F9FA] sm:h-[850px] sm:rounded-[40px] sm:border-[8px] sm:border-gray-800 shadow-2xl overflow-hidden select-none text-gray-900">
        
        {/* Linha da câmera do celular (visível apenas no PC) */}
        <div className="hidden sm:block absolute top-2 left-1/2 h-4 w-28 -translate-x-1/2 rounded-full bg-gray-800 z-50" />

        {/* CONTEÚDO SCROLLÁVEL INTERNO DA HOME */}
        <div className="flex-1 overflow-y-auto px-5 pt-8 pb-24 space-y-6 scrollbar-none">
          
          {/* TOPO: Boas-vindas e Avatar */}
          <div className="flex items-center justify-between pt-4">
            <div>
              <span className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest">Olá,</span>
              <h1 className="text-2xl font-black text-gray-950 tracking-tight">Dra. Ana Ribeiro</h1>
            </div>
            <div className="h-12 w-12 rounded-full border-2 border-emerald-500 overflow-hidden shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1594824813573-246434e3b96a?w=150&auto=format&fit=crop&q=80" 
                alt="Dra. Ana Ribeiro"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* CARD DE STATUS ONLINE */}
          <div className="w-full rounded-3xl bg-[#0B7B69] p-5 text-white shadow-xl shadow-[#0B7B69]/10 space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-wider">Status</span>
              <h2 className="text-xl font-bold tracking-tight">Você está online</h2>
            </div>
            <div className="flex items-center gap-2 rounded-xl bg-white/10 py-2.5 px-4 text-xs font-semibold backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-white animate-pulse" />
              <span className="text-emerald-50">Aguardando solicitações...</span>
            </div>
          </div>

          {/* GRID DE TRÊS COLUNAS */}
          <div className="grid grid-cols-3 gap-2.5">
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-18">
              <div>
                <div className="text-lg font-black text-gray-950">3</div>
                <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Sessões</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-18">
              <div>
                <div className="text-lg font-black text-gray-950">R$540</div>
                <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Ganhos</div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between h-18">
              <div>
                <div className="text-lg font-black text-gray-950">4.9 ★</div>
                <div className="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Avaliação</div>
              </div>
            </div>
          </div>

          {/* GRÁFICO DE GANHOS MENSAIS */}
          <div className="bg-white p-5 rounded-3xl border border-gray-100 shadow-sm space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-extrabold text-gray-950">Ganhos — Julho</h3>
              <span className="text-xs font-bold text-[#0B7B69] flex items-center gap-1">
                📈 +18%
              </span>
            </div>
            <div className="flex items-end justify-between px-1 h-32 w-full">
              {dadosGrafico.map((item, index) => (
                <div key={index} className="flex flex-col items-center gap-2 flex-1">
                  <div 
                    className={`w-7 rounded-xl transition-all duration-500 ${item.altura} ${
                      item.ativo ? 'bg-[#0B7B69]' : 'bg-[#0B7B69]/10'
                    }`} 
                  />
                  <span className={`text-[10px] font-bold ${item.ativo ? 'text-[#0B7B69] font-black' : 'text-gray-400'}`}>
                    {item.dia}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* PRÓXIMO AGENDAMENTO REUTILIZANDO O MOCK */}
          <div className="space-y-3">
            <h3 className="text-sm font-extrabold text-gray-950">Próximo agendamento</h3>
            
            <div 
              onClick={() => setPacienteSelecionado(proximoAgendamento)}
              className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between hover:border-gray-200 active:scale-[0.99] transition-all cursor-pointer"
            >
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center justify-center h-14 w-14 rounded-xl bg-emerald-50 text-center shrink-0">
                  {/* Pegando o dia real de forma fixa baseado na data do mock */}
                  <span className="text-sm font-black text-[#0B7B69] leading-none">17</span>
                  <span className="text-[9px] font-bold text-[#0B7B69] uppercase tracking-wider mt-0.5">Jul</span>
                </div>
                <div className="space-y-0.5">
                  <h4 className="text-sm font-black text-gray-950">{proximoAgendamento.nome}</h4>
                  <p className="text-xs text-gray-400 font-medium">{proximoAgendamento.problema} · {proximoAgendamento.horario.split(" - ")[1]}</p>
                  <p className="text-xs font-bold text-[#0B7B69]">{proximoAgendamento.horario.split(" - ")[0]} - {proximoAgendamento.local}</p>
                </div>
              </div>
              <span className="text-gray-300 text-lg font-bold">›</span>
            </div>
          </div>

        </div> {/* Fim do Conteúdo interno */}

        {/* Menu de Navegação Inferior */}
        <BottomNavigation />

        {/* ─── 🌟 BOTTOM SHEET MODAL DINÂMICO CONECTADO AO MOCK ─── */}
        <BottomSheetModal 
          isOpen={pacienteSelecionado !== null} 
          onClose={() => setPacienteSelecionado(null)} 
          paciente={pacienteSelecionado}
        />

      </div> {/* Fim da Moldura */}
    </div>
  );
}