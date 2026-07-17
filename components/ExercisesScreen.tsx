"use client";

import React from "react";

interface ExerciseItem {
  id: number;
  emoji: string;
  name: string;
  duration: string;
  done: boolean;
}

interface ExercisesScreenProps {
  exercises: ExerciseItem[];
  onToggleExercise: (id: number) => void;
  onFinishSession: () => void;
  sessionsDone: number;
  sessionsTotal: number;
}

export default function ExercisesScreen({
  exercises,
  onToggleExercise,
  onFinishSession,
  sessionsDone,
  sessionsTotal,
}: ExercisesScreenProps) {
  const completedCount = exercises.filter((ex) => ex.done).length;
  const totalCount = exercises.length;
  const progressPct = totalCount > 0 ? Math.round((completedCount / totalCount) * 105) : 0; // Ajustado para dar a sensação visual do círculo se enchendo
  const pctReal = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;

  const isSessionFinished = completedCount === totalCount;

  return (
    <div className="flex flex-col gap-4 pb-4">
      {/* Header da Tela */}
      <div className="px-5 pt-3 pb-1">
        <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Tratamento Ativo</p>
        <div className="flex justify-between items-baseline mt-0.5">
          <h1 className="text-2xl font-black text-slate-800 tracking-tight">Sessão {sessionsDone + 1} de {sessionsTotal}</h1>
          <span className="text-xs font-semibold text-teal-600 bg-teal-50 px-2.5 py-1 rounded-full border border-teal-100">
            Hoje
          </span>
        </div>
        <p className="text-xs text-slate-500 mt-1">
          Fisioterapeuta responsável: <span className="font-bold text-slate-700">Dra. Ana Ribeiro</span>
        </p>
      </div>

      {/* Card de Progresso da Sessão de Hoje */}
      <div className="mx-4 bg-white rounded-3xl p-5 shadow-sm border border-slate-100 flex items-center justify-between gap-4">
        <div>
          <h2 className="text-sm font-black text-slate-800">Seu Progresso Hoje</h2>
          <p className="text-xs text-slate-400 mt-0.5">Complete todos para pontuar na sessão</p>
          <div className="mt-3 flex items-baseline gap-1">
            <span className="text-2xl font-black text-teal-500">{completedCount}</span>
            <span className="text-xs text-slate-400 font-bold">/ {totalCount} exercícios</span>
          </div>
        </div>

        {/* Mini Gráfico Circular de Progresso */}
        <div className="relative w-16 h-16 shrink-0">
          <svg width="64" height="64" className="-rotate-90">
            <circle cx="32" cy="32" r="26" fill="none" stroke="#F0F4F7" strokeWidth="6" />
            <circle
              cx="32"
              cy="32"
              r="26"
              fill="none"
              stroke="#2DD4A0"
              strokeWidth="6"
              strokeDasharray={2 * Math.PI * 26}
              strokeDashoffset={2 * Math.PI * 26 - (pctReal / 100) * (2 * Math.PI * 26)}
              strokeLinecap="round"
              className="transition-all duration-500"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center text-xs font-black text-slate-800">
            {pctReal}%
          </div>
        </div>
      </div>

      {/* Lista de Exercícios Checklist */}
      <div className="mx-4 bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
        <div className="mb-4">
          <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Instruções Práticas</p>
          <h3 className="text-base font-black text-slate-800 mt-0.5">Checklist de Exercícios</h3>
        </div>

        <div className="space-y-3">
          {exercises.map((ex) => (
            <button
              key={ex.id}
              onClick={() => onToggleExercise(ex.id)}
              className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl border text-left transition-all active:scale-[0.99] ${
                ex.done
                  ? "bg-emerald-50/60 border-emerald-100 shadow-sm"
                  : "bg-slate-50 border-slate-100 hover:border-slate-200"
              }`}
            >
              <div className="flex items-center gap-3">
                {/* Ícone Redondo */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0 transition-colors ${
                    ex.done ? "bg-emerald-100 text-emerald-700" : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {ex.emoji}
                </div>
                <div>
                  <p className={`text-[13px] font-bold leading-tight ${ex.done ? "text-slate-700 line-through opacity-70" : "text-slate-800"}`}>
                    {ex.name}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">{ex.duration}</p>
                </div>
              </div>

              {/* Botão de Estado Check */}
              <div
                className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all ${
                  ex.done
                    ? "bg-[#2DD4A0] border-[#2DD4A0] scale-110 shadow-sm shadow-emerald-200"
                    : "border-slate-300 bg-white"
                }`}
              >
                {ex.done && (
                  <svg className="w-3.5 h-3.5 text-white" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Recomendações e Dicas */}
      <div className="mx-4 bg-white rounded-3xl p-5 shadow-sm border border-slate-100">
        <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Recomendações da Dra. Ana</p>
        <h3 className="text-sm font-black text-slate-800 mt-0.5">Orientações de Postura</h3>
        <p className="text-xs text-slate-500 leading-relaxed mt-2">
          "Lembre-se de respirar compassadamente durante cada movimento. Se sentir alguma dor aguda ou desconforto incomum na região lombar, interrompa imediatamente e coloque compressa de gelo por 15 minutos."
        </p>
      </div>

      {/* Botão de Finalizar */}
      <div className="mx-4 mt-2">
        <button
          onClick={onFinishSession}
          disabled={!isSessionFinished}
          className={`w-full py-4 rounded-2xl font-bold text-sm text-center shadow-md transition-all active:scale-[0.98] ${
            isSessionFinished
              ? "bg-teal-800 text-white hover:bg-[#0A3D2E] shadow-teal-900/10 cursor-pointer"
              : "bg-slate-200 text-slate-400 cursor-not-allowed shadow-none"
          }`}
        >
          {isSessionFinished ? "Finalizar Sessão de Hoje" : "Conclua os exercícios para finalizar"}
        </button>
      </div>
    </div>
  );
}
