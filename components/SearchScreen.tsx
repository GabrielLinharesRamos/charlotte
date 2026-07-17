"use client";

import React, { useState } from "react";

interface Therapist {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  distance: string;
  time: string;
  price: number;
  avatar: string;
  initials: string;
  online: boolean;
}

const THERAPISTS: Therapist[] = [
  {
    id: 1,
    name: "Dra. Ana Ribeiro",
    specialty: "Ortopedia & Esportivo",
    rating: 4.9,
    distance: "1.2 km",
    time: "20 min",
    price: 180,
    avatar: "/dra_ana.png",
    initials: "AR",
    online: true,
  },
  {
    id: 2,
    name: "Dr. Lucas Mendes",
    specialty: "Coluna & Neurológico",
    rating: 4.8,
    distance: "2.5 km",
    time: "30 min",
    price: 160,
    avatar: "/dr_lucas.png",
    initials: "LM",
    online: true,
  },
];

/* ─── Ícones SVG inline ──────────────────────── */
const IconLocationPin = () => (
  <svg className="w-4 h-4 text-teal-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconBell = () => (
  <svg className="w-5 h-5 text-slate-650" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const IconStar = () => (
  <svg className="w-3.5 h-3.5 text-amber-400 fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const IconMapPinSmall = () => (
  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const IconClockSmall = () => (
  <svg className="w-3.5 h-3.5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const IconChevronDown = () => (
  <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
);

interface SearchScreenProps {
  onSearch: (symptom: string) => void;
}

export default function SearchScreen({ onSearch }: SearchScreenProps) {
  const [selectedSymptom, setSelectedSymptom] = useState("Dor nas costas");
  const [activeFilter, setActiveFilter] = useState("Todos");
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const symptoms = ["Dor nas costas", "Lesão esportiva", "Pós-cirúrgico", "Dor no joelho", "Dor no ombro"];
  const filters = ["Todos", "Ortopedia", "Coluna", "Esportivo"];

  const handleImageError = (id: number) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="flex flex-col gap-5 pb-6">

      {/* ── 1. CABEÇALHO (Localização + Saudação) ── */}
      <div className="flex justify-between items-start px-5 pt-3 pb-1">
        <div>
          <span className="text-[11px] text-slate-400 font-extrabold uppercase tracking-widest">Sua Localização</span>
          <div className="flex items-center gap-1.5 mt-1">
            <IconLocationPin />
            <span className="text-base font-extrabold text-slate-800">São Paulo, SP</span>
          </div>
          <h1 className="text-2xl font-black text-slate-800 tracking-tight mt-4">
            Bom dia, Carlos 👋
          </h1>
          <p className="text-sm text-slate-500 mt-1 font-medium">
            O que você está sentindo hoje?
          </p>
        </div>

        {/* Sino — área de toque aumentada */}
        <button
          aria-label="Notificações"
          className="w-12 h-12 rounded-full bg-white border border-slate-100 shadow-xs flex items-center justify-center text-slate-650 hover:bg-slate-50 active:bg-slate-100 transition-colors"
        >
          <IconBell />
        </button>
      </div>

      {/* ── 2. CARD CENTRAL (Solicitar Agora) ── */}
      <div className="mx-4 bg-[#0F172A] rounded-3xl p-5 shadow-lg relative overflow-hidden">
        <div className="absolute -top-10 -right-8 w-36 h-36 rounded-full bg-white/[0.02] pointer-events-none" />

        <span className="text-[11px] font-black text-slate-450 uppercase tracking-widest block mb-4">
          Solicitar Agora
        </span>

        {/* Sintoma selecionado — visual de seleção clara */}
        <div className="w-full bg-[#1E293B] rounded-2xl px-4 py-4 flex items-center justify-between border border-[#334155]/30 mb-4 cursor-pointer">
          <span className="text-base font-bold text-white">{selectedSymptom}</span>
          <IconChevronDown />
        </div>

        {/* Tags de Sintomas — área de toque maior para dedos */}
        <div className="flex flex-wrap gap-2 mb-6">
          {symptoms.map((symptom) => {
            const isActive = selectedSymptom === symptom;
            return (
              <button
                key={symptom}
                onClick={() => setSelectedSymptom(symptom)}
                className={`px-4 py-3 rounded-full text-xs font-bold transition-all active:scale-[0.97] ${
                  isActive
                    ? "bg-white text-teal-800 shadow-sm ring-2 ring-white/30"
                    : "bg-white/10 text-slate-300 hover:bg-white/15 active:bg-white/20"
                }`}
              >
                {symptom}
              </button>
            );
          })}
        </div>

        {/* Botão de Busca — grande e muito visível */}
        <button
          onClick={() => onSearch(selectedSymptom)}
          className="w-full bg-[#0D7A5A] hover:bg-[#0F8C68] active:bg-[#0A6048] text-white py-5 rounded-2xl font-black text-base text-center flex items-center justify-center gap-2 transition-all duration-200 shadow-md active:scale-[0.995]"
        >
          Buscar Fisioterapeuta
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* ── 3. FILTROS RÁPIDOS — área de toque mínima 44px ── */}
      <div className="flex items-center gap-2 overflow-x-auto px-4 pb-1" style={{ scrollbarWidth: "none" }}>
        {filters.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-3 rounded-full text-sm font-bold border transition-all shrink-0 active:scale-[0.97] ${
                isActive
                  ? "bg-[#0D7A5A] border-[#0D7A5A] text-white shadow-sm"
                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
              }`}
            >
              {filter}
            </button>
          );
        })}
      </div>

      {/* ── 4. FISIOTERAPEUTAS DISPONÍVEIS ── */}
      <div className="mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-black text-slate-800">Disponíveis agora</h3>
          <button className="text-sm font-bold text-[#0D7A5A] py-1 hover:underline transition-colors">
            Ver todos
          </button>
        </div>

        <div className="space-y-3">
          {THERAPISTS.map((therapist) => {
            const hasError = imageErrors[therapist.id];
            return (
              <button
                key={therapist.id}
                onClick={() => onSearch(therapist.specialty)}
                className="w-full bg-white rounded-3xl p-5 shadow-xs border border-slate-100/90 flex items-center justify-between gap-4 hover:border-teal-200 hover:shadow-sm active:scale-[0.995] transition-all duration-200 text-left cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  {/* Foto do fisioterapeuta */}
                  <div className="relative w-14 h-14 shrink-0">
                    <div className="w-14 h-14 rounded-full overflow-hidden bg-[#0A3D2E] flex items-center justify-center text-white font-bold text-base shadow-inner">
                      {!hasError ? (
                        <img
                          src={therapist.avatar}
                          alt={therapist.name}
                          className="w-full h-full object-cover"
                          onError={() => handleImageError(therapist.id)}
                        />
                      ) : (
                        therapist.initials
                      )}
                    </div>
                    {therapist.online && (
                      <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full bg-emerald-500 border-2 border-white shadow-sm" />
                    )}
                  </div>

                  <div>
                    <h4 className="text-sm font-black text-slate-800">{therapist.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5 font-medium">{therapist.specialty}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-1">
                        <IconStar />
                        <span className="text-xs font-bold text-slate-700">{therapist.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                        <IconMapPinSmall />
                        <span>{therapist.distance}</span>
                      </div>
                      <div className="flex items-center gap-1 text-xs text-slate-400 font-medium">
                        <IconClockSmall />
                        <span>{therapist.time}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Preço — legível e destacado */}
                <div className="text-right shrink-0">
                  <p className="text-lg font-black text-[#0D7A5A]">R$ {therapist.price}</p>
                  <p className="text-[11px] text-slate-400 font-semibold mt-0.5">/sessão</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

    </div>
  );
}
