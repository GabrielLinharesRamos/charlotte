"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import BottomNavigation from "@/components/BottomNavigation";
import BottomSheetModal from "@/components/BottomSheetModal";
import { LISTA_PACIENTES, Paciente } from "@/mock/pacientes"; // Importando o mock centralizado

export default function AgendaPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<'proximas' | 'historico'>('proximas');
  const [diaSelecionado, setDiaSelecionado] = useState(17);
  
  // Estado para controlar o paciente ativo no Bottom Sheet Modal (null = fechado)
  const [pacienteSelecionado, setPacienteSelecionado] = useState<Paciente | null>(null);

  // Buscando o Carlos Souza (ID 1) especificamente para o card de destaque do topo
  const proximoAgendamento = LISTA_PACIENTES.find(p => p.id === 1) || LISTA_PACIENTES[0];

  // Filtramos os outros pacientes para listar abaixo do card de destaque (IDs diferentes de 1)
  const demaisPacientes = LISTA_PACIENTES.filter(p => p.id !== 1);

  // Mock dos dias da semana expostos no topo
  const diasSemana = [
    { nome: 'SEG', num: 14, temSessao: true },
    { nome: 'TER', num: 15, temSessao: false },
    { nome: 'QUA', num: 16, temSessao: true },
    { nome: 'QUI', num: 17, temSessao: true }, // Dia selecionado
    { nome: 'SEX', num: 18, temSessao: true },
    { nome: 'SÁB', num: 19, temSessao: true },
    { nome: 'DOM', num: 20, temSessao: false },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 p-0 sm:p-4 font-sans">
      
      {/* 📱 MOLDURA DO CELULAR */}
      <div className="relative flex h-screen w-full max-w-[400px] flex-col justify-between bg-[#F8F9FA] sm:h-[850px] sm:rounded-[40px] sm:border-[8px] sm:border-gray-800 shadow-2xl overflow-hidden select-none text-gray-900">
        
        {/* Linha da câmera do celular (visível apenas no PC) */}
        <div className="hidden sm:block absolute top-2 left-1/2 h-4 w-28 -translate-x-1/2 rounded-full bg-gray-800 z-50" />

        {/* CONTEÚDO INTERNO SCROLLÁVEL */}
        <div className="flex-1 overflow-y-auto px-5 pt-8 pb-24 space-y-5 scrollbar-none">
          
          {/* TOPO: Mês e Contador */}
          <div className="flex items-center justify-between pt-4">
            <div className="flex items-center gap-1 cursor-pointer">
              <h1 className="text-xl font-black text-gray-950 tracking-tight">Julho 2026</h1>
              <span className="text-gray-400 text-xs">▼</span>
            </div>
            <span className="bg-[#EBF7F5] text-[#0B7B69] text-[11px] font-extrabold px-2.5 py-1 rounded-full">
              {LISTA_PACIENTES.length} hoje
            </span>
          </div>

          {/* CALENDÁRIO SEMANAL DE SLOTS */}
          <div className="flex justify-between items-center bg-white p-2 rounded-2xl border border-gray-100 shadow-sm gap-1 overflow-x-auto scrollbar-none">
            {diasSemana.map((dia) => {
              const isSelected = dia.num === diaSelecionado;
              return (
                <div 
                  key={dia.num}
                  onClick={() => setDiaSelecionado(dia.num)}
                  className={`flex flex-col items-center justify-center flex-1 min-w-[40px] py-2.5 rounded-xl transition-all cursor-pointer ${
                    isSelected ? 'bg-gray-950 text-white shadow-md' : 'text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-[9px] font-extrabold uppercase tracking-wider text-gray-400">
                    {dia.nome}
                  </span>
                  <span className="text-sm font-black mt-0.5">{dia.num}</span>
                  {dia.temSessao && (
                    <span className={`h-1 w-1 rounded-full mt-1 ${isSelected ? 'bg-emerald-400' : 'bg-emerald-600'}`} />
                  )}
                </div>
              );
            })}
          </div>

          {/* ABAS DE NAVEGAÇÃO (Próximas vs Histórico) */}
          <div className="flex border-b border-gray-100 text-sm font-bold text-gray-400">
            <button 
              onClick={() => setActiveTab('proximas')}
              className={`flex-1 pb-2.5 text-center transition-all border-b-2 ${
                activeTab === 'proximas' ? 'border-[#0B7B69] text-[#0B7B69] font-black' : 'border-transparent hover:text-gray-600'
              }`}
            >
              Próximas ({LISTA_PACIENTES.length})
            </button>
            <button 
              onClick={() => setActiveTab('historico')}
              className={`flex-1 pb-2.5 text-center transition-all border-b-2 ${
                activeTab === 'historico' ? 'border-[#0B7B69] text-[#0B7B69] font-black' : 'border-transparent hover:text-gray-600'
              }`}
            >
              Histórico
            </button>
          </div>

          {/* CONTEÚDO DAS ABAS */}
          {activeTab === 'proximas' ? (
            <div className="space-y-4">
              
              {/* CARD DESTAQUE DINÂMICO: PRÓXIMA SESSÃO */}
              <div className="w-full rounded-3xl bg-[#0B7B69] p-5 text-white shadow-xl shadow-[#0B7B69]/10 space-y-4 relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full pointer-events-none" />

                <div className="flex justify-between items-start">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-bold text-emerald-300 uppercase tracking-widest">Próxima Sessão</span>
                    <div className="text-3xl font-black tracking-tight leading-none">
                      {proximoAgendamento.horario.split(" - ")[0]}
                    </div>
                    <p className="text-xs font-semibold text-emerald-100/80">Qui, 17 Jul</p>
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 border border-white/20 font-black text-sm tracking-wide">
                    {proximoAgendamento.iniciais}
                  </div>
                </div>

                <div className="space-y-0.5">
                  <h3 className="text-base font-black tracking-tight">{proximoAgendamento.nome}</h3>
                  <p className="text-xs text-emerald-100/70 font-medium">{proximoAgendamento.problema}</p>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="bg-white/10 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-sm">
                    ⏱️ {proximoAgendamento.horario.split(" - ")[1]}
                  </span>
                  <span className="bg-white/10 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-sm">
                    📍 {proximoAgendamento.local}
                  </span>
                  <span className="bg-white/10 text-white text-[10px] font-bold px-2.5 py-1 rounded-lg backdrop-blur-sm">
                    🦴 {proximoAgendamento.sessao}
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-2">
                  <button className="flex-1 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-xs font-bold transition-all text-center">
                    Cancelar
                  </button>
                  <button 
                    onClick={() => setPacienteSelecionado(proximoAgendamento)}
                    className="flex-1 py-2.5 rounded-xl bg-white text-[#0B7B69] hover:bg-gray-50 text-xs font-extrabold transition-all text-center shadow-md flex items-center justify-center gap-1"
                  >
                    Ver detalhes →
                  </button>
                </div>
              </div>

              {/* LISTA DINÂMICA DOS DEMAIS PACIENTES DO DIA */}
              {demaisPacientes.map((paciente) => (
                <div 
                  key={paciente.id}
                  onClick={() => setPacienteSelecionado(paciente)}
                  className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-3 hover:border-gray-200 active:scale-[0.99] transition-all cursor-pointer"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-3">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-xl font-black text-xs ${
                        paciente.id === 2 ? 'bg-purple-50 text-purple-600' : 'bg-amber-50 text-amber-600'
                      }`}>
                        {paciente.iniciais}
                      </div>
                      <div>
                        <h4 className="text-sm font-black text-gray-950 tracking-tight">{paciente.nome}</h4>
                        <p className="text-[11px] text-gray-400 font-medium">{paciente.problema}</p>
                      </div>
                    </div>
                    <span className={`text-[9px] font-extrabold px-2 py-0.5 rounded-md border ${
                      paciente.status === 'Confirmado'
                        ? 'bg-[#EBF7F5] text-[#0B7B69] border-emerald-100'
                        : 'bg-amber-50 text-amber-600 border-amber-100'
                    }`}>
                      {paciente.status}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center pt-1 text-[11px] font-bold text-gray-400">
                    <div className="flex items-center gap-3">
                      <span>🕒 {paciente.horario}</span>
                      <span>📍 {paciente.local}</span>
                    </div>
                    <span className={`${paciente.status === 'Confirmado' ? 'text-[#0B7B69]' : 'text-gray-950'} font-black`}>
                      R$ {paciente.valor}
                    </span>
                  </div>
                </div>
              ))}

            </div>
          ) : (
            <div className="text-center py-10 text-gray-400 text-xs font-medium">
              Nenhuma sessão finalizada neste dia.
            </div>
          )}

        </div>

        {/* Menu inferior fixado */}
        <BottomNavigation />

        {/* ─── 🌟 BOTTOM SHEET MODAL CONECTADO DINAMICAMENTE ─── */}
        <BottomSheetModal 
          isOpen={pacienteSelecionado !== null} 
          onClose={() => setPacienteSelecionado(null)} 
          paciente={pacienteSelecionado}
        />

      </div>
    </div>
  );
}