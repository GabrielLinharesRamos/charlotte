"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

/* ─── Tipos ──────────────────────────────────────────────────────────────── */

interface Appointment {
  id: number;
  therapistName: string;
  specialty: string;
  day: string;
  time: string;
  price: number;
}

interface AgendaScreenProps {
  appointments: Appointment[];
  onCancelAppointment: (id: number) => void;
}

/* ─── Ícones SVG ─────────────────────────────────────────────────────────── */

const IconChevronDown = () => (
  <svg className="w-4 h-4 text-slate-800 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

const IconPlus = () => (
  <svg className="w-3.5 h-3.5 text-white shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
  </svg>
);

const IconClock = () => (
  <svg className="w-3.5 h-3.5 text-white opacity-90 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconPin = () => (
  <svg className="w-3.5 h-3.5 text-white opacity-90 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconCalendarSmall = () => (
  <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const IconClockSmall = () => (
  <svg className="w-3.5 h-3.5 text-slate-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

/* ─── Mock Inicial para Exibição Rica ────────────────────────────────────── */

const MOCK_UPCOMING = [
  {
    id: -1,
    therapistName: "Dr. Lucas Mendes",
    specialty: "Coluna & Neurológico",
    day: "Sex, 18 Jul",
    time: "10:00 · 60min",
    price: 160,
    status: "Confirmado",
    avatar: "/dr_lucas.png",
    initials: "LM"
  },
  {
    id: -2,
    therapistName: "Dra. Ana Ribeiro",
    specialty: "Ortopedia & Esportivo",
    day: "Ter, 22 Jul",
    time: "09:00 · 45min",
    price: 135,
    status: "Pendente",
    avatar: "/dra_ana.png",
    initials: "AR"
  }
];

export default function AgendaScreen({ appointments, onCancelAppointment }: AgendaScreenProps) {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<"upcoming" | "history">("upcoming");
  const [selectedDay, setSelectedDay] = useState(17);

  // Lista de dias do Slider de Julho 2026
  const days = [
    { name: "SEG", num: 14, hasDot: true },
    { name: "TER", num: 15, hasDot: false },
    { name: "QUA", num: 16, hasDot: true },
    { name: "QUI", num: 17, hasDot: true }, // Dia selecionado por padrão
    { name: "SEX", num: 18, hasDot: true },
    { name: "SÁB", num: 19, hasDot: false },
    { name: "DOM", num: 20, hasDot: false }
  ];

  // A próxima sessão principal (ou a cadastrada no contexto se houver)
  const mainAppointment = appointments.length > 0 ? appointments[0] : null;

  return (
    <div className="flex flex-col gap-4 pb-6 bg-[#F6F8FA] min-h-[calc(100vh-80px)]">
      {/* Top Header */}
      <div className="flex items-center justify-between px-6 pt-4">
        <div className="flex items-center gap-2 cursor-pointer">
          <h1 className="text-xl font-bold text-slate-900">Julho 2026</h1>
          <IconChevronDown />
        </div>

        <button
          onClick={() => router.push("/buscar")}
          className="flex items-center gap-1.5 bg-[#0D7A5A] hover:bg-[#0A5A44] text-white text-xs font-bold px-4 py-2.5 rounded-full transition-colors shadow-sm"
        >
          <IconPlus />
          Agendar
        </button>
      </div>

      {/* Slider de Dias */}
      <div className="flex items-center justify-between px-4 py-2 bg-white/60 backdrop-blur-md rounded-2xl mx-4 shadow-[0_4px_12px_rgba(0,0,0,0.02)]">
        {days.map((d) => {
          const isSelected = selectedDay === d.num;
          return (
            <button
              key={d.num}
              onClick={() => setSelectedDay(d.num)}
              className={`flex flex-col items-center gap-1.5 py-2 px-2.5 rounded-xl transition-all duration-300 min-w-[42px] ${
                isSelected
                  ? "bg-[#0A2E26] text-white scale-105 shadow-md shadow-[#0a2e26]/10"
                  : "text-slate-400 hover:text-slate-700"
              }`}
            >
              <span className="text-[9px] font-bold tracking-wider">{d.name}</span>
              <span className={`text-sm font-black ${isSelected ? "text-white" : "text-slate-800"}`}>
                {d.num}
              </span>
              <span
                className={`w-1 h-1 rounded-full ${
                  d.hasDot ? (isSelected ? "bg-teal-400" : "bg-teal-600") : "bg-transparent"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-100 bg-white">
        <button
          onClick={() => setActiveTab("upcoming")}
          className={`flex-1 text-center py-3.5 text-xs font-bold border-b-2 transition-colors duration-200 ${
            activeTab === "upcoming"
              ? "text-[#0D7A5A] border-[#0D7A5A]"
              : "text-slate-400 border-transparent hover:text-slate-600"
          }`}
        >
          Próximas ({appointments.length + MOCK_UPCOMING.length + (mainAppointment ? 0 : 1)})
        </button>
        <button
          onClick={() => setActiveTab("history")}
          className={`flex-1 text-center py-3.5 text-xs font-bold border-b-2 transition-colors duration-200 ${
            activeTab === "history"
              ? "text-[#0D7A5A] border-[#0D7A5A]"
              : "text-slate-400 border-transparent hover:text-slate-600"
          }`}
        >
          Histórico
        </button>
      </div>

      {/* Tab Content */}
      <div className="px-4 space-y-4">
        {activeTab === "upcoming" ? (
          <>
            {/* PRÓXIMA SESSÃO CARD */}
            <div className="relative bg-gradient-to-br from-[#0D7A5A] to-[#0A5A44] rounded-[28px] p-6 text-white shadow-lg overflow-hidden">
              {/* Círculo decorativo ao fundo */}
              <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/5 rounded-full pointer-events-none" />

              <div className="flex justify-between items-start">
                <div>
                  <p className="text-[10px] font-bold tracking-wider text-teal-200/90 uppercase">
                    Próxima sessão
                  </p>
                  <h2 className="text-3xl font-black tracking-tight mt-1">
                    {mainAppointment ? mainAppointment.time : "14:00"}
                  </h2>
                  <p className="text-xs font-medium text-teal-100 mt-0.5">
                    {mainAppointment ? mainAppointment.day : "Qui, 17 Jul"}
                  </p>
                </div>

                {/* Avatar */}
                <div className="relative w-14 h-14 rounded-full border-2 border-white/20 overflow-hidden bg-teal-800 flex items-center justify-center shrink-0">
                  <Image
                    src="/dra_ana.png"
                    alt="Foto Dra. Ana Ribeiro"
                    width={56}
                    height={56}
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>

              <div className="mt-4">
                <h3 className="text-base font-bold">
                  {mainAppointment ? mainAppointment.therapistName : "Dra. Ana Ribeiro"}
                </h3>
                <p className="text-xs text-teal-100 mt-0.5">
                  {mainAppointment ? mainAppointment.specialty : "Ortopedia & Esportivo"}
                </p>
              </div>

              {/* Badges */}
              <div className="flex gap-2 mt-4">
                <div className="bg-white/15 text-white text-[11px] font-semibold rounded-xl px-3 py-1.5 flex items-center gap-1.5">
                  <IconClock />
                  60 min
                </div>
                <div className="bg-white/15 text-white text-[11px] font-semibold rounded-xl px-3 py-1.5 flex items-center gap-1.5">
                  <IconPin />
                  Em casa
                </div>
              </div>

              {/* Ações */}
              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => {
                    if (window.confirm("Deseja mesmo desmarcar esta consulta?")) {
                      if (mainAppointment) {
                        onCancelAppointment(mainAppointment.id);
                      } else {
                        alert("Consulta padrão de demonstração desmarcada.");
                      }
                    }
                  }}
                  className="flex-1 bg-white/10 hover:bg-white/20 text-white text-xs font-bold py-3 px-4 rounded-xl border border-white/20 transition-all text-center"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => router.push("/buscar")}
                  className="flex-1 bg-white hover:bg-slate-50 text-[#0D7A5A] text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-1 transition-all shadow-sm"
                >
                  Ver detalhes →
                </button>
              </div>
            </div>

            {/* LISTA DE DEMAIS AGENDAMENTOS */}
            <div className="space-y-3">
              {/* Agendamentos Dinâmicos do Contexto (além do primeiro principal) */}
              {appointments.slice(1).map((ap) => (
                <div
                  key={ap.id}
                  className="bg-white rounded-2xl p-4 shadow-[0_4px_16px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-teal-150 flex items-center justify-center font-bold text-xs text-teal-800 shrink-0 overflow-hidden">
                        <Image
                          src="/dra_ana.png"
                          alt="Avatar"
                          width={40}
                          height={40}
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">{ap.therapistName}</h4>
                        <p className="text-xs text-slate-400 mt-0.5">{ap.specialty}</p>
                      </div>
                    </div>

                    <span className="bg-[#E6F3F0] text-[#0D7A5A] font-bold text-[10px] px-2.5 py-1 rounded-full uppercase">
                      Confirmado
                    </span>
                  </div>

                  <div className="grid grid-cols-3 divide-x divide-slate-100 border-t border-slate-50 pt-3 text-center">
                    <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
                      <IconCalendarSmall />
                      {ap.day}
                    </div>
                    <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 font-medium">
                      <IconClockSmall />
                      {ap.time}
                    </div>
                    <div className="text-xs font-bold text-[#0D7A5A]">
                      R$ {ap.price}
                    </div>
                  </div>
                </div>
              ))}

              {/* Agendamentos Fixos Mockados do Print */}
              {MOCK_UPCOMING.map((ap) => (
                <div
                  key={ap.id}
                  className="bg-white rounded-2xl p-4 shadow-[0_4px_16px_rgba(0,0,0,0.02)] border border-slate-100 flex flex-col gap-4"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center font-bold text-xs text-teal-800 shrink-0 overflow-hidden">
                        <Image
                          src={ap.avatar}
                          alt={ap.therapistName}
                          width={40}
                          height={40}
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-slate-800">{ap.therapistName}</h4>
                        <p className="text-xs text-slate-400 mt-0.5">{ap.specialty}</p>
                      </div>
                    </div>

                    <span
                      className={`font-bold text-[10px] px-2.5 py-1 rounded-full uppercase ${
                        ap.status === "Confirmado"
                          ? "bg-[#E6F3F0] text-[#0D7A5A]"
                          : "bg-amber-50 text-amber-600"
                      }`}
                    >
                      {ap.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-3 divide-x divide-slate-100 border-t border-slate-50 pt-3 text-center">
                    <div className="flex items-center justify-center gap-1.5 text-xs text-slate-550 font-semibold text-slate-600">
                      <IconCalendarSmall />
                      {ap.day}
                    </div>
                    <div className="flex items-center justify-center gap-1.5 text-xs text-slate-550 font-semibold text-slate-600">
                      <IconClockSmall />
                      {ap.time}
                    </div>
                    <div className="text-xs font-black text-[#0D7A5A]">
                      R$ {ap.price}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="py-16 text-center text-slate-400 text-xs font-semibold">
            Nenhum compromisso finalizado no histórico.
          </div>
        )}
      </div>
    </div>
  );
}
