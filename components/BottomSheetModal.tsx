"use client"

import { Paciente } from "@/mock/pacientes";

interface BottomSheetModalProps {
  isOpen: boolean;
  onClose: () => void;
  paciente: Paciente | null; // Recebe o objeto do paciente clicado ou null
}

export default function BottomSheetModal({ isOpen, onClose, paciente }: BottomSheetModalProps) {
  // Se não houver paciente selecionado, não renderiza nada para evitar erros de leitura de propriedades
  if (!paciente) return null;

  return (
    <>
      {/* Backdrop (Fundo escurecido) */}
      <div 
        onClick={onClose}
        className={`absolute inset-0 bg-gray-900/40 z-50 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Painel do Bottom Sheet */}
      <div 
        className={`absolute bottom-0 left-0 w-full bg-[#F8F9FA] rounded-t-[32px] shadow-2xl z-50 px-5 pt-4 pb-6 flex flex-col transition-transform duration-350 ease-out border-t border-gray-100 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{ maxHeight: '88%' }}
      >
        {/* Tracinho decorativo superior */}
        <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-2 shrink-0" />

        {/* Botão Fechar X */}
        <div className="flex justify-end shrink-0">
          <button 
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-full bg-gray-200/60 text-gray-500 hover:bg-gray-200 active:scale-90 transition-all"
          >
            <span className="text-xs font-black">✕</span>
          </button>
        </div>

        {/* 📜 ÁREA INTERNA SCROLLÁVEL DO MODAL */}
        <div className="flex-1 overflow-y-auto pr-1 space-y-5 scrollbar-none my-2">
          
          {/* CARD DE IDENTIFICAÇÃO DO PACIENTE (DINÂMICO) */}
          <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm space-y-3">
            <div className="flex items-center gap-3.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-50 text-[#0B7B69] font-black text-base tracking-wide shrink-0">
                {paciente.iniciais}
              </div>
              <div>
                <h3 className="text-lg font-black text-gray-950 tracking-tight">{paciente.nome}</h3>
                <p className="text-xs text-gray-400 font-medium -mt-0.5">{paciente.problema}</p>
                <div className="flex items-center gap-2 mt-1.5">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                    paciente.status === 'Confirmado' 
                      ? 'bg-emerald-50 text-[#0B7B69] border-emerald-100' 
                      : 'bg-amber-50 text-amber-600 border-amber-100'
                  }`}>
                    {paciente.status}
                  </span>
                  <span className="text-gray-400 text-[10px] font-bold">
                    {paciente.sessao}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 pt-1 text-[11px] font-bold text-gray-600">
              <div className="bg-gray-50 p-2 rounded-xl flex items-center gap-1.5">
                <span className="text-gray-400 text-xs">👤</span> {paciente.idade} anos
              </div>
              <div className="bg-gray-50 p-2 rounded-xl flex items-center gap-1.5 overflow-hidden text-ellipsis whitespace-nowrap">
                <span className="text-gray-400 text-xs">📞</span> {paciente.telefone}
              </div>
              <div className="bg-gray-50 p-2 rounded-xl flex items-center gap-1.5">
                <span className="text-gray-400 text-xs">🕒</span> {paciente.horario}
              </div>
              <div className="bg-gray-50 p-2 rounded-xl flex items-center gap-1.5">
                <span className="text-gray-400 text-xs">📍</span> {paciente.local}
              </div>
            </div>
          </div>

          {/* DIAGNÓSTICO (DINÂMICO) */}
          <div className="space-y-1.5">
            <h4 className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest pl-1">Diagnóstico</h4>
            <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-[#0B7B69] font-bold shrink-0 mt-0.5">🩺</div>
              <p className="text-xs font-semibold text-gray-800 leading-relaxed">
                {paciente.diagnostico}
              </p>
            </div>
          </div>

          {/* OBSERVAÇÕES CLÍNICAS (DINÂMICAS) */}
          <div className="space-y-1.5">
            <h4 className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest pl-1">Observações Clínicas</h4>
            <div className="bg-white p-3.5 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-600 font-bold shrink-0 mt-0.5">📄</div>
              <p className="text-xs font-semibold text-gray-600 leading-relaxed">
                {paciente.observacoes}
              </p>
            </div>
          </div>

          {/* 🔄 HISTÓRICO DE SESSÕES (MAP DINÂMICO) */}
          <div className="space-y-2">
            <h4 className="text-[10px] font-extrabold text-gray-400 uppercase tracking-widest pl-1">Histórico de Sessões</h4>
            
            {paciente.historico.map((sessao, index) => {
              const isNotLast = index < paciente.historico.length - 1;
              return (
                <div key={index} className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex gap-3 relative overflow-hidden">
                  <div className="flex flex-col items-center">
                    <span className="h-2 w-2 rounded-full bg-[#0B7B69] mt-1.5" />
                    {isNotLast && <div className="w-[1.5px] bg-gray-100 flex-1 min-h-[35px] mt-1" />}
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] font-bold text-gray-400">{sessao.data}</span>
                    <p className="text-xs font-semibold text-gray-800 leading-normal">
                      {sessao.descricao}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Card Valor / Pagamento (DINÂMICO) */}
            <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-gray-400">Valor da sessão</span>
                <div className="text-gray-950 font-black text-lg leading-tight mt-0.5">
                  R$ {paciente.valor}<span className="text-xs font-bold text-gray-400">,00</span>
                </div>
              </div>
              <span className={`text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 ${
                paciente.status === 'Confirmado' 
                  ? 'bg-[#EBF7F5] text-[#0B7B69]' 
                  : 'bg-amber-50 text-amber-600'
              }`}>
                {paciente.status === 'Confirmado' ? 'Pago ✓' : 'Pendente'}
              </span>
            </div>
          </div>

        </div>

        {/* BOTÕES DE AÇÃO INFERIORES */}
        <div className="flex items-center gap-3 pt-3 border-t border-gray-100 shrink-0">
          <button 
            onClick={onClose}
            className="flex-1 py-3.5 rounded-2xl bg-gray-100 text-gray-600 text-xs font-bold hover:bg-gray-200/80 active:scale-95 transition-all text-center"
          >
            Fechar
          </button>
          <button 
            className="flex-[2] py-3.5 rounded-2xl bg-[#0B7B69] text-white text-xs font-bold hover:bg-[#096355] active:scale-95 transition-all shadow-md shadow-[#0B7B69]/10 text-center"
          >
            Iniciar sessão
          </button>
        </div>

      </div>
    </>
  );
}