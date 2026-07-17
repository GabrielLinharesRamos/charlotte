"use client";

import React, { useState } from "react";

interface PaymentScreenProps {
  therapistName: string;
  specialty: string;
  price: number;
  onBack: () => void;
  onConfirmPayment: () => void;
}

/* ─── Ícones SVG inline ──────────────────────── */
const IconChevronLeft = () => (
  <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const IconShield = () => (
  <svg className="w-3.5 h-3.5 text-teal-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const IconStar = () => (
  <svg className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const IconPix = () => (
  <svg className="w-5 h-5 text-teal-650" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
  </svg>
);

export default function PaymentScreen({
  therapistName,
  specialty,
  price,
  onBack,
  onConfirmPayment,
}: PaymentScreenProps) {
  const [imageError, setImageError] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Redirecionamento automático após 3.5 segundos ao abrir o modal de sucesso
  React.useEffect(() => {
    if (showSuccessModal) {
      const timer = setTimeout(() => {
        onConfirmPayment();
      }, 3800);
      return () => clearTimeout(timer);
    }
  }, [showSuccessModal, onConfirmPayment]);

  return (
    <div className="absolute inset-0 bg-[#F6F8FA] flex flex-col z-50 animate-fade-in">
      
      {/* ── 1. CABEÇALHO (Voltar + Título + Seguro) ── */}
      <div className="flex items-center justify-between px-5 pt-3 pb-2 shrink-0">
        <button
          onClick={onBack}
          className="w-10 h-10 rounded-full bg-white border border-slate-100 shadow-xs flex items-center justify-center hover:bg-slate-50 transition-colors"
        >
          <IconChevronLeft />
        </button>

        <h1 className="text-base font-black text-slate-800 tracking-tight">Pagamento</h1>

        <div className="bg-teal-50/80 text-teal-700 text-[10px] font-bold px-3 py-1 rounded-full border border-teal-100/60 flex items-center gap-1 select-none">
          <IconShield />
          <span>Seguro</span>
        </div>
      </div>

      {/* ── CONTEÚDO ROLÁVEL ── */}
      <div className="flex-1 overflow-y-auto px-4 pb-32 space-y-5" style={{ scrollbarWidth: "none" }}>

        {/* ── 2. SEÇÃO RESUMO DO AGENDAMENTO ── */}
        <div className="space-y-2 mt-2">
          <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest pl-1">Resumo</span>
          
          <div className="bg-white rounded-3xl p-5 shadow-xs border border-slate-100 space-y-4">
            {/* Informações da profissional */}
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-[#0A3D2E] flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-inner">
                {!imageError ? (
                  <img
                    src="/dra_ana.png"
                    alt={therapistName}
                    className="w-full h-full object-cover"
                    onError={() => setImageError(true)}
                  />
                ) : (
                  "AR"
                )}
              </div>
              <div>
                <h3 className="text-sm font-black text-slate-800">{therapistName}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{specialty}</p>
                <div className="flex items-center gap-1 mt-1">
                  <IconStar />
                  <span className="text-xs font-bold text-slate-800 ml-0.5">4.9</span>
                </div>
              </div>
            </div>

            <div className="h-px bg-slate-100" />

            {/* Linhas de preços */}
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between text-slate-450 font-semibold">
                <span>Sessão de fisioterapia</span>
                <span className="text-slate-800 font-bold">R$ {price},00</span>
              </div>
              <div className="flex justify-between text-slate-450 font-semibold">
                <span>Taxa de serviço</span>
                <span className="text-slate-800 font-bold">Grátis</span>
              </div>
              
              <div className="h-px bg-slate-100 pt-0.5" />
              
              <div className="flex justify-between items-baseline pt-1">
                <span className="text-sm font-black text-slate-800">Total</span>
                <span className="text-base font-black text-[#0D7A5A]">R$ {price},00</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── 3. SEÇÃO MÉTODO DE PAGAMENTO ── */}
        <div className="space-y-2">
          <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest pl-1">Método de Pagamento</span>
          
          <div className="bg-white rounded-3xl p-5 shadow-xs border border-slate-100 space-y-4">
            
            {/* Visualização Realista do Cartão de Crédito */}
            <div className="relative bg-[#1A2536] rounded-2xl p-5 text-white shadow-md overflow-hidden aspect-[1.6/1]">
              {/* Círculo de fundo translúcido para textura */}
              <div className="absolute -right-12 -bottom-12 w-40 h-40 rounded-full bg-white/[0.03] pointer-events-none" />

              {/* Topo do cartão (Bandeiras) */}
              <div className="flex justify-between items-start">
                {/* Elemento decorativo amarelo */}
                <div className="w-8 h-8 rounded-full bg-amber-500 shadow-inner" />
                <span className="text-xs font-black tracking-widest text-slate-350 opacity-90">VISA</span>
              </div>

              {/* Número do Cartão */}
              <div className="mt-8">
                <span className="text-base sm:text-lg font-black tracking-[0.25em] font-mono block">
                  •••• •••• •••• 4242
                </span>
              </div>

              {/* Rodapé do Cartão (Nome e Validade) */}
              <div className="mt-8 flex justify-between items-end">
                <div>
                  <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider block">Nome no Cartão</span>
                  <span className="text-xs font-extrabold tracking-wide uppercase mt-0.5 block">Carlos Souza</span>
                </div>
                <div className="text-right">
                  <span className="text-[8px] text-slate-400 font-bold uppercase tracking-wider block">Validade</span>
                  <span className="text-xs font-extrabold mt-0.5 block">12/27</span>
                </div>
              </div>
            </div>

            {/* Botão + Adicionar Novo Cartão */}
            <button className="w-full py-3.5 border border-dashed border-teal-500/35 hover:border-teal-500 rounded-2xl text-center bg-teal-50/20 hover:bg-teal-50/40 text-[#0D7A5A] text-xs font-extrabold transition-all cursor-pointer">
              + Adicionar novo cartão
            </button>
          </div>
        </div>

        {/* ── 4. SEÇÃO PIX (Parcialmente Cortada) ── */}
        <div className="bg-white rounded-3xl p-5 shadow-xs border border-slate-100 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal-50/60 border border-teal-100 flex items-center justify-center shrink-0">
              <IconPix />
            </div>
            <div>
              <h4 className="text-xs font-black text-slate-800">Pagar com Pix</h4>
              <p className="text-[10px] text-slate-400 font-semibold mt-0.5">Aprovação imediata do atendimento</p>
            </div>
          </div>
          <svg className="w-4 h-4 text-slate-350" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>

      </div>

      {/* ── 5. BARRA DE AÇÃO INFERIOR FIXADA ── */}
      <div className="absolute bottom-0 left-0 right-0 z-30 bg-white border-t border-slate-100 p-5 shadow-[0_-4px_25px_rgba(0,0,0,0.05)] text-center shrink-0">
        <button
          onClick={() => setShowSuccessModal(true)}
          className="w-full bg-[#0D7A5A] hover:bg-[#0F8C68] text-white py-4 rounded-2xl font-black text-sm text-center transition-all duration-200 active:scale-[0.995] shadow-md shadow-teal-900/10 cursor-pointer"
        >
          Pagar R$ {price},00
        </button>
        <span className="text-[10px] text-slate-400 font-semibold block mt-3 select-none">
          Pagamento 100% seguro · Criptografado SSL
        </span>
      </div>

      {/* ── 6ª TELA: AGENDAMENTO CONFIRMADO GAVETA MODAL (Bottom Sheet) ── */}
      {showSuccessModal && (
        <div className="absolute inset-0 z-50 bg-[#0B131F]/50 backdrop-blur-xs flex flex-col justify-end">
          
          {/* Drawer do Modal de Sucesso */}
          <div className="bg-white rounded-t-[32px] p-6 shadow-[0_-12px_40px_rgba(0,0,0,0.22)] border-t border-slate-100/90 z-55 w-full animate-slide-up">
            
            {/* Puxador da Gaveta */}
            <div className="w-10 h-1 bg-slate-200 rounded-full mx-auto mb-5" />

            <div className="flex justify-center mb-5">
              <div
                className="relative rounded-full bg-[#0D7A5A] flex items-center justify-center shadow-lg shadow-teal-900/25"
                style={{ width: 72, height: 72 }}
              >
                {/* Efeito de brilho de fundo */}
                <div className="absolute inset-0 rounded-full bg-[#0D7A5A] animate-ping opacity-20" />
                <svg className="w-9 h-9 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            {/* Título e Textos */}
            <h3 className="text-lg font-black text-slate-800 text-center tracking-tight">Agendamento confirmado!</h3>
            <p className="text-xs text-slate-450 mt-2 text-center max-w-[280px] mx-auto leading-relaxed">
              Sua sessão com <span className="font-extrabold text-slate-700">{therapistName}</span> foi agendada com sucesso. O fisioterapeuta já foi notificado.
            </p>

            {/* Ficha Resumo do Atendimento Pago */}
            <div className="bg-slate-50 border border-slate-100/80 rounded-2xl p-4 mt-5 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-[#0A3D2E] flex items-center justify-center text-white font-bold text-xs shrink-0 shadow-inner">
                  {!imageError ? (
                    <img
                      src="/dra_ana.png"
                      alt={therapistName}
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
                  <p className="text-[10px] text-[#0D7A5A] font-extrabold mt-1">Chegada estimada: 20 min</p>
                </div>
              </div>

              {/* Preço e Etiqueta Pago */}
              <div className="text-right shrink-0 space-y-1">
                <p className="text-sm font-black text-[#0D7A5A]">R$ {price}</p>
                <span className="inline-block bg-[#0D7A5A] text-white text-[9px] font-black px-2 py-0.5 rounded-md select-none">
                  Pago ✓
                </span>
              </div>
            </div>

            {/* Indicador de Redirecionamento Giratório */}
            <div className="flex items-center justify-center gap-2 mt-6 mb-6 text-xs text-slate-450 font-bold">
              {/* Círculo loader rotatório CSS */}
              <div className="w-4 h-4 border-2 border-teal-600/20 border-t-teal-600 rounded-full animate-spin" />
              <span>Redirecionando para a home...</span>
            </div>

            {/* Botão de Ação Imediata */}
            <button
              onClick={onConfirmPayment}
              className="w-full bg-[#0D7A5A] hover:bg-[#0F8C68] text-white py-4 rounded-2xl font-black text-sm text-center transition-all duration-200 active:scale-[0.995] shadow-md shadow-teal-900/10 cursor-pointer"
            >
              Ir para a home agora
            </button>

          </div>
        </div>
      )}

    </div>
  );
}
