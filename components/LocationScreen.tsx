"use client";

import React, { useState } from "react";

interface LocationScreenProps {
  symptom: string;
  onCancel: () => void;
  onPaymentSuccess: () => void;
}

/* ─── Ícones SVG inline ──────────────────────── */
const IconPhone = () => (
  <svg className="w-5 h-5 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const IconHeart = () => (
  <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const IconCardCredit = () => (
  <svg className="w-6 h-6 text-[#0D7A5A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
  </svg>
);

const IconStar = () => (
  <svg className="w-3.5 h-3.5 text-amber-455 fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

/* ─── Mapa SVG Vetorial Minimalista ──────────── */
function VectorMapBackground() {
  return (
    <div className="absolute inset-0 bg-[#EAF0F6] overflow-hidden select-none">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Ruas/Linhas do mapa */}
        <line x1="-50" y1="120" x2="600" y2="120" stroke="#DCE4EC" strokeWidth="16" />
        <line x1="-50" y1="240" x2="600" y2="300" stroke="#DCE4EC" strokeWidth="18" />
        <line x1="-50" y1="420" x2="600" y2="400" stroke="#DCE4EC" strokeWidth="14" />
        
        <line x1="120" y1="-50" x2="120" y2="700" stroke="#DCE4EC" strokeWidth="16" />
        <line x1="280" y1="-50" x2="250" y2="700" stroke="#DCE4EC" strokeWidth="14" />
        <line x1="420" y1="-50" x2="450" y2="700" stroke="#DCE4EC" strokeWidth="18" />

        {/* Linha da Rota tracejada verde teal do fisioterapeuta */}
        <path
          d="M 270,120 Q 275,220 180,250 T 130,390"
          fill="none"
          stroke="#0D7A5A"
          strokeWidth="3.5"
          strokeDasharray="6,6"
          strokeLinecap="round"
        />

        {/* Bolinha preta do início da rota */}
        <circle cx="270" cy="120" r="7" fill="#1E293B" stroke="white" strokeWidth="2.5" />
      </svg>
    </div>
  );
}

export default function LocationScreen({ symptom, onCancel, onPaymentSuccess }: LocationScreenProps) {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [imageError, setImageError] = useState(false);

  const price = 180;
  const therapistName = "Dra. Ana Ribeiro";

  return (
    <div className="absolute inset-0 flex flex-col justify-end z-50 overflow-hidden animate-fade-in">
      
      {/* Mapa de Fundo */}
      <VectorMapBackground />

      {/* Indicador Flutuante Superior: Chegada Estimada */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 bg-white rounded-2xl px-8 py-3.5 shadow-lg border border-slate-100 text-center select-none w-52">
        <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider block">Chegada estimada</span>
        <span className="text-lg font-black text-slate-800 block mt-0.5">20 min</span>
      </div>

      {/* Foto da Dra no Mapa flutuante */}
      <div className="absolute top-[365px] left-[105px] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <div className="absolute w-14 h-14 bg-teal-500/20 rounded-full animate-ping pointer-events-none" />
        <div className="relative w-11 h-11 rounded-full border-2 border-[#0D7A5A] overflow-hidden bg-[#0A3D2E] shadow-md flex items-center justify-center text-white font-bold text-xs">
          {!imageError ? (
            <img
              src="/dra_ana.png"
              alt="Dra. Ana Ribeiro"
              className="w-full h-full object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            "AR"
          )}
        </div>
      </div>

      {/* ── PAINEL INFERIOR: DETALHES DO FISIOTERAPEUTA (Drawer) ── */}
      <div className="relative bg-white rounded-t-[32px] p-5 shadow-[0_-8px_30px_rgba(0,0,0,0.08)] border-t border-slate-100/90 z-20 w-full animate-slide-up">
        {/* Puxador decorativo cinza */}
        <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-4" />

        {/* Informações Básicas da Fisioterapeuta */}
        <div className="flex items-center justify-between gap-4 mb-5">
          <div className="flex items-center gap-3.5">
            <div className="relative w-12 h-12 shrink-0">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#0A3D2E] flex items-center justify-center text-white font-bold text-sm shadow-inner">
                {!imageError ? (
                  <img
                    src="/dra_ana.png"
                    alt="Dra. Ana Ribeiro"
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  "AR"
                )}
              </div>
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-sm" />
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="text-sm font-black text-slate-800">{therapistName}</h4>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-550 inline-block" />
              </div>
              <p className="text-xs text-slate-400 mt-0.5">Ortopedia &amp; Esportivo</p>
              
              <div className="flex items-center gap-1 mt-1.5">
                <IconStar />
                <span className="text-xs font-bold text-slate-800 ml-0.5">4.9</span>
                <span className="text-[10px] text-slate-400 font-semibold">(127)</span>
              </div>
            </div>
          </div>

          {/* Botões redondos de Ligar / Favoritar */}
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-slate-100 transition-colors">
              <IconPhone />
            </button>
            <button className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-slate-100 transition-colors">
              <IconHeart />
            </button>
          </div>
        </div>

        {/* Ficha com 3 Métricas Rápidas */}
        <div className="grid grid-cols-3 gap-2.5 mb-5 text-center">
          <div className="bg-slate-50/70 border border-slate-100 rounded-2xl p-3">
            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Distância</span>
            <span className="text-[13px] font-black text-[#1E293B] block mt-1">1.2 km</span>
          </div>
          <div className="bg-slate-50/70 border border-slate-100 rounded-2xl p-3">
            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Valor</span>
            <span className="text-[13px] font-black text-[#1E293B] block mt-1">R$ 180</span>
          </div>
          <div className="bg-slate-50/70 border border-slate-100 rounded-2xl p-3">
            <span className="text-[9px] text-slate-400 font-bold uppercase tracking-wider block">Crefito</span>
            <span className="text-[13px] font-black text-[#0D7A5A] block mt-1">Verificado ✓</span>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="space-y-3">
          <button
            onClick={() => setShowPaymentModal(true)}
            className="w-full bg-[#0D7A5A] hover:bg-[#0F8C68] text-white py-4 rounded-2xl font-black text-sm text-center transition-all duration-200 active:scale-[0.99] shadow-md shadow-teal-900/10 cursor-pointer"
          >
            Confirmar sessão
          </button>
          <button
            onClick={onCancel}
            className="w-full text-slate-450 hover:text-slate-650 py-2.5 text-xs font-black text-center transition-colors cursor-pointer"
          >
            Cancelar
          </button>
        </div>
      </div>

      {/* ── 2ª TELA: POPUP DE CONFIRMAÇÃO DE PAGAMENTO (Modal bottom sheet) ── */}
      {showPaymentModal && (
        <div className="absolute inset-0 z-50 bg-[#0B131F]/50 backdrop-blur-xs flex flex-col justify-end">
          
          {/* Fundo do modal rolável do mapa escurece */}
          <div className="flex-1 w-full" onClick={() => setShowPaymentModal(false)} />

          {/* Drawer do Modal de Pagamento */}
          <div className="bg-white rounded-t-[32px] p-5 shadow-[0_-12px_40px_rgba(0,0,0,0.18)] border-t border-slate-100/90 z-55 w-full animate-slide-up">
            
            {/* Puxador da Gaveta */}
            <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-4" />

            {/* Ícone de Cartão no topo do Modal */}
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center">
                <IconCardCredit />
              </div>
            </div>

            {/* Título e Instruções */}
            <h3 className="text-base font-black text-slate-800 text-center tracking-tight">Confirmar pagamento</h3>
            <p className="text-xs text-slate-400 mt-2 text-center max-w-[280px] mx-auto leading-relaxed">
              Ao confirmar, o valor de <span className="font-extrabold text-slate-700">R$ {price},00</span> será cobrado no seu método de pagamento cadastrado.
            </p>

            {/* Caixa Detalhada do Pedido */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 mt-5 space-y-4">
              {/* Infos compactas da Fisioterapeuta */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full overflow-hidden bg-[#0A3D2E] flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-inner">
                  {!imageError ? (
                    <img
                      src="/dra_ana.png"
                      alt="Dra. Ana Ribeiro"
                      className="w-full h-full object-cover"
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    "AR"
                  )}
                </div>
                <div>
                  <h4 className="text-xs font-black text-slate-800">{therapistName}</h4>
                  <p className="text-[10px] text-slate-400 font-semibold mt-0.5">Ortopedia &amp; Esportivo</p>
                </div>
              </div>

              <div className="h-px bg-slate-200/60" />

              {/* Tabela de Preços */}
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-slate-450 font-medium">
                  <span>Sessão de fisioterapia</span>
                  <span>R$ {price},00</span>
                </div>
                <div className="flex justify-between text-slate-450 font-medium">
                  <span>Taxa de serviço</span>
                  <span>R$ 0,00</span>
                </div>
                <div className="flex justify-between font-black pt-1">
                  <span className="text-slate-800">Total</span>
                  <span className="text-[#0D7A5A]">R$ {price},00</span>
                </div>
              </div>
            </div>

            {/* Método de Pagamento e Botão Alterar */}
            <div className="flex items-center justify-between px-1 mt-5 mb-6">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span>Cartão •••• 4242 - Visa</span>
              </div>
              <button className="text-xs font-black text-[#0D7A5A] hover:text-teal-850 transition-colors">
                Alterar
              </button>
            </div>

            {/* Botões inferiores do modal */}
            <div className="space-y-3">
              <button
                onClick={() => onPaymentSuccess()}
                className="w-full bg-[#0D7A5A] hover:bg-[#0F8C68] text-white py-4 rounded-2xl font-black text-sm text-center transition-all duration-200 active:scale-[0.99] shadow-md shadow-teal-900/10 cursor-pointer"
              >
                Ir para pagamento
              </button>
              <button
                onClick={() => setShowPaymentModal(false)}
                className="w-full bg-slate-100 hover:bg-slate-200 text-slate-500 py-3.5 rounded-2xl font-bold text-xs text-center transition-colors cursor-pointer"
              >
                Cancelar
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
