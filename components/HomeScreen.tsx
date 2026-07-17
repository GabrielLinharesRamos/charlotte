"use client";

import React, { useState } from "react";

/* ─── Tipos ─────────────────────────────────── */
interface ExerciseItem {
  id: number;
  emoji: string;
  name: string;
  duration: string;
  done: boolean;
}

interface Appointment {
  id: number;
  therapistName: string;
  specialty: string;
  day: string;
  time: string;
  price: number;
}

type Tab = "inicio" | "buscar" | "agenda" | "perfil";

interface HomeScreenProps {
  sessionsDone: number;
  sessionsTotal: number;
  exercises: ExerciseItem[];
  appointments: Appointment[];
  onNavigate: (tab: Tab) => void;
  onToggleExercise: (id: number) => void;
}

/* ─── Ícone do Sino ──────────────────────────── */
const IconBell = () => (
  <svg className="w-5 h-5 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

/* ─── Ícone da Lupa do Banner ────────────────── */
const IconSearchBanner = () => (
  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

/* ─── Ícone de Seta Direita (Chevron) ────────── */
const IconChevronRight = () => (
  <svg className="w-5 h-5 text-slate-350" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

/* ─── Estrelas de Avaliação ──────────────────── */
const StarRating = () => (
  <div className="flex items-center gap-0.5">
    {[1, 2, 3, 4, 5].map((s) => (
      <svg key={s} className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

/* ─── Círculo de Progresso do Tratamento (67%) ── */
function ProgressRing({ pct }: { pct: number }) {
  const size = 104;
  const sw   = 8;
  const r    = (size - sw) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;

  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <svg width={size} height={size} style={{ transform: "rotate(-90deg)" }}>
        {/* Trilho cinza de fundo */}
        <circle cx={size / 2} cy={size / 2} r={r} fill="none"
          stroke="#F1F5F9" strokeWidth={sw} />
        {/* Progresso verde */}
        <circle cx={size / 2} cy={size / 2} r={r} fill="none"
          stroke="#0D7A5A" strokeWidth={sw}
          strokeDasharray={circ} strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-2xl font-black text-slate-800 leading-none">{pct}%</span>
        <span className="text-[10px] text-slate-400 font-medium mt-1">concluído</span>
      </div>
    </div>
  );
}

export default function HomeScreen({
  sessionsDone,
  sessionsTotal,
  exercises,
  appointments,
  onNavigate,
  onToggleExercise,
}: HomeScreenProps) {
  const [imageError, setImageError] = useState(false);

  const progressPct = Math.round((sessionsDone / sessionsTotal) * 100);

  return (
    <div className="flex flex-col gap-4 pb-6">

      {/* ── 1. HEADER (Saudação + Notificações) ── */}
      <div className="flex items-center justify-between px-5 pt-3 pb-1">
        <div>
          <p className="text-xs text-slate-450 font-semibold flex items-center gap-1.5">
            Bom dia 👋
          </p>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight mt-0.5">
            Carlos Souza
          </h1>
        </div>
        <div className="flex items-center gap-2.5">
          {/* Círculo do Sino */}
          <button className="relative w-10 h-10 rounded-full bg-white border border-slate-100 shadow-xs flex items-center justify-center text-slate-650 hover:bg-slate-50 transition-colors">
            <IconBell />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-red-500 border-2 border-white" />
          </button>
          {/* Avatar CS */}
          <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white bg-[#0A3D2E] shadow-sm select-none">
            CS
          </div>
        </div>
      </div>

      {/* ── 2. CARD SEU PLANO (Plano Premium) ── */}
      <div className="mx-4 rounded-3xl overflow-hidden shadow-md">
        <div className="relative p-5 sm:p-6" style={{ background: "linear-gradient(145deg, #0A3D2E 0%, #0D5C44 60%, #0F6B50 100%)" }}>
          {/* Decorações discretas de fundo */}
          <div className="absolute -top-10 -right-8 w-36 h-36 rounded-full bg-white/[0.04] pointer-events-none" />
          <div className="absolute -bottom-6 left-12 w-20 h-20 rounded-full bg-white/[0.03] pointer-events-none" />

          {/* Cabeçalho do plano */}
          <div className="relative flex items-start justify-between mb-5">
            <div>
              <p className="text-[10px] uppercase tracking-widest font-extrabold text-white/50 mb-1">Seu Plano</p>
              <h2 className="text-xl sm:text-2xl font-black text-white">Plano Premium</h2>
              <p className="text-[11px] text-white/50 mt-1">Válido até 31 de dezembro de 2025</p>
            </div>
            <span className="bg-white/15 backdrop-blur-xs text-white text-[11px] font-bold px-3.5 py-1 rounded-full shrink-0 select-none">
              Ativo ✓
            </span>
          </div>

          <div className="relative h-px bg-white/10 mb-4" />

          {/* Informações detalhadas do plano */}
          <div className="relative grid grid-cols-3 text-center gap-2">
            {[
              { val: "12", label: "Sessões/mês" },
              { val: "8",  label: "Usadas" },
              { val: "4",  label: "Restantes" },
            ].map(({ val, label }) => (
              <div key={label}>
                <p className="text-2xl sm:text-3xl font-black text-white leading-none">{val}</p>
                <p className="text-[9px] text-white/50 uppercase tracking-wider font-bold mt-1.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. CARD PROGRESSO DO TRATAMENTO (Com timeline integrada) ── */}
      <div className="mx-4 bg-white rounded-3xl p-5 shadow-sm border border-slate-100/90">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between mb-5">
          <div>
            <p className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400 mb-1">Progresso do Tratamento</p>
            <h3 className="text-base font-black text-slate-800">Coluna &amp; Postura</h3>
          </div>
          <span className="bg-emerald-50 text-emerald-700 text-[11px] font-bold px-3 py-1 rounded-full border border-emerald-100/80">
            Em andamento
          </span>
        </div>

        {/* Corpo do progresso (Círculo + Estatísticas) */}
        <div className="flex items-center gap-6 sm:gap-8">
          <ProgressRing pct={progressPct} />

          <div className="flex-1 space-y-3.5">
            {[
              { label: "Sessões feitas",   val: "8 de 12",      valColor: "text-[#0D7A5A] font-extrabold" },
              { label: "Próxima sessão",   val: "Qui, 24 Jul",  valColor: "text-slate-800 font-bold" },
              { label: "Dias em tto.",     val: "34 dias",      valColor: "text-slate-800 font-bold" },
            ].map(({ label, val, valColor }) => (
              <div key={label} className="flex flex-col">
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{label}</span>
                <span className={`text-sm mt-0.5 ${valColor}`}>{val}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Divisor interno do card */}
        <div className="h-px bg-slate-100 my-4" />

        {/* Barra de Progresso Horizontal das Sessões */}
        <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 mb-2">
          <span>Sessão {sessionsDone}</span>
          <span>{sessionsTotal} total</span>
        </div>

        <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden mb-4">
          <div className="h-full bg-[#0D7A5A] rounded-full" style={{ width: `${progressPct}%` }} />
        </div>

        {/* Bolinhas das Sessões (Timeline) */}
        <div className="flex justify-between items-center px-1">
          {Array.from({ length: sessionsTotal }).map((_, i) => {
            const isCompleted = i < sessionsDone;
            return (
              <div
                key={i}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  isCompleted ? "bg-[#0D7A5A]" : "bg-slate-200"
                }`}
              />
            );
          })}
        </div>
      </div>

      {/* ── 4. BANNER AGENDAR SESSÃO ── */}
      <button
        onClick={() => onNavigate("buscar")}
        className="mx-4 bg-[#0F172A] rounded-[24px] p-5 flex items-center justify-between gap-4 text-left shadow-sm cursor-pointer hover:bg-[#1E293B] active:bg-[#1E293B] active:scale-[0.99] transition-all duration-200 w-[calc(100%-32px)]"
      >
        <div>
          <h2 className="text-base font-black text-white">Agendar nova sessão</h2>
          <p className="text-xs text-slate-400 mt-1">Encontre um fisioterapeuta disponível agora</p>
        </div>
        <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0 bg-[#0D7A5A]">
          <IconSearchBanner />
        </div>
      </button>

      {/* ── 5. SEÇÃO EXERCÍCIOS DE HOJE ── */}
      <div className="mx-4">
        {/* Header */}
        <div className="flex justify-between items-end mb-3">
          <div>
            <p className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">Exercícios de Hoje</p>
            <h3 className="text-lg font-black text-slate-800 tracking-tight mt-0.5">Dra. Ana Ribeiro</h3>
          </div>
          <button className="text-[12px] font-bold text-teal-600 hover:text-teal-800 transition-colors">
            Ver todos
          </button>
        </div>

        {/* Lista */}
        <div className="space-y-2.5">
          {exercises.map((ex) => (
            <div
              key={ex.id}
              onClick={() => onToggleExercise(ex.id)}
              className={`flex items-center justify-between px-4 py-3.5 rounded-2xl border cursor-pointer transition-all duration-200 active:scale-[0.995] ${
                ex.done
                  ? "bg-[#E8F8F5] border-[#A3E4D7] shadow-xs"
                  : "bg-white border-slate-100 hover:border-slate-200"
              }`}
            >
              <div className="flex items-center gap-3.5">
                {/* Círculo do emoji */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0 ${
                  ex.done ? "bg-white" : "bg-slate-50 border border-slate-100"
                }`}>
                  {ex.emoji}
                </div>
                <div>
                  <h4 className={`text-[13px] font-extrabold leading-tight ${ex.done ? "text-[#0E6251]" : "text-slate-800"}`}>
                    {ex.name}
                  </h4>
                  <p className="text-[11px] text-slate-450 mt-0.5">{ex.duration}</p>
                </div>
              </div>

              {/* Botão circular de check */}
              <div className="shrink-0">
                {ex.done ? (
                  <div className="w-6 h-6 rounded-full bg-[#0D7A5A] flex items-center justify-center shadow-xs">
                    <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                ) : (
                  <div className="w-6 h-6 rounded-full border border-slate-200 bg-white" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── 6. SEÇÃO ÚLTIMA SESSÃO ── */}
      <div className="mx-4">
        <div className="flex justify-between items-end mb-3">
          <h3 className="text-base font-black text-slate-800">Última sessão</h3>
          <button className="text-[12px] font-bold text-teal-600 hover:text-teal-800 transition-colors">
            Histórico
          </button>
        </div>

        {/* Card Profissional */}
        <div className="bg-white rounded-3xl p-4 border border-slate-100 flex items-center justify-between gap-4 shadow-xs">
          <div className="flex items-center gap-3.5">
            {/* Foto de Perfil */}
            <div className="w-12 h-12 rounded-full overflow-hidden shrink-0 bg-[#0A3D2E] flex items-center justify-center text-white font-bold text-sm relative shadow-inner">
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
              <h4 className="text-sm font-black text-slate-800">Dra. Ana Ribeiro</h4>
              <p className="text-xs text-slate-400 mt-0.5">Qui, 17 Jul · 50 min</p>
              
              {/* Avaliação */}
              <div className="flex items-center gap-2 mt-1.5">
                <StarRating />
                <span className="text-[10px] text-slate-400 font-bold">Avaliada</span>
              </div>
            </div>
          </div>

          <IconChevronRight />
        </div>
      </div>

    </div>
  );
}
