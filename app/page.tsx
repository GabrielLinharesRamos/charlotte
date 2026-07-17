"use client";

import React, { useState } from "react";
import HomeScreen from "../components/HomeScreen";
import SearchScreen from "../components/SearchScreen";
import LoadingScreen from "../components/LoadingScreen";
import LocationScreen from "../components/LocationScreen";
import AgendaScreen from "../components/AgendaScreen";
import PaymentScreen from "../components/PaymentScreen";

/* ─── Tipos ─────────────────────────────────── */
type Tab = "inicio" | "buscar" | "agenda" | "perfil";

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

/* ─── Constantes Iniciais ────────────────────── */
const INITIAL_EXERCISES: ExerciseItem[] = [
  { id: 1, emoji: "🧘", name: "Alongamento cervical",   duration: "3x · 30 seg", done: true  },
  { id: 2, emoji: "💪", name: "Fortalecimento do core", duration: "3x · 15 rep", done: true  },
  { id: 3, emoji: "🔄", name: "Mobilização escapular",  duration: "2x · 12 rep", done: false },
  { id: 4, emoji: "🏋️", name: "Agachamento assistido",  duration: "3x · 10 rep", done: false },
];

/* ─── Ícones da Barra de Navegação ───────────── */
const IconHome = ({ active }: { active: boolean }) => (
  <svg className="w-6 h-6" fill={active ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 0 : 1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
  </svg>
);

const IconSearch = ({ active }: { active: boolean }) => (
  <svg className="w-6 h-6" fill={active ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 0 : 1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const IconCalendar = ({ active }: { active: boolean }) => (
  <svg className="w-6 h-6" fill={active ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 0 : 1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const IconPerson = ({ active }: { active: boolean }) => (
  <svg className="w-6 h-6" fill={active ? "currentColor" : "none"} viewBox="0 0 24 24" stroke="currentColor" strokeWidth={active ? 0 : 1.8}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

export default function RootPage() {
  const [exercises, setExercises] = useState<ExerciseItem[]>(INITIAL_EXERCISES);
  const [activeTab, setActiveTab] = useState<Tab>("inicio");
  
  // Estados para busca, loading, mapa e pagamento
  const [isSearching, setIsSearching] = useState(false);
  const [isLocating, setIsLocating] = useState(false);
  const [isPaying, setIsPaying] = useState(false);
  const [searchSymptom, setSearchSymptom] = useState("");
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  // Marcar/Desmarcar Exercício na lista de Hoje
  const handleToggleExercise = (id: number) => {
    setExercises((prev) =>
      prev.map((ex) => (ex.id === id ? { ...ex, done: !ex.done } : ex))
    );
  };

  const handleStartSearch = (symptom: string) => {
    setSearchSymptom(symptom);
    setIsSearching(true);
  };

  const handleCancelSearch = () => {
    setIsSearching(false);
  };

  const handleSearchSuccess = () => {
    setIsSearching(false);
    setIsLocating(true);
  };

  const handleCancelLocation = () => {
    setIsLocating(false);
  };

  const handlePaymentStart = () => {
    setIsLocating(false);
    setIsPaying(true);
  };

  const handleBackToLocation = () => {
    setIsPaying(false);
    setIsLocating(true);
  };

  const handleConfirmPayment = () => {
    setIsPaying(false);
    const newAppointment: Appointment = {
      id: Date.now(),
      therapistName: "Dra. Ana Ribeiro",
      specialty: "Ortopedia & Esportivo",
      day: "Qui, 24 Jul",
      time: "14:00",
      price: 180,
    };
    setAppointments((prev) => [newAppointment, ...prev]);
    setActiveTab("agenda");
  };

  const handleCancelAppointment = (id: number) => {
    setAppointments((prev) => prev.filter((ap) => ap.id !== id));
  };

  return (
    <div className="min-h-dvh bg-slate-100 sm:flex sm:items-start sm:justify-center sm:py-0">
      <div className="w-full sm:max-w-lg min-h-dvh bg-[#F6F8FA] sm:shadow-2xl sm:shadow-slate-300/40 flex flex-col relative overflow-hidden">
        
        {/* Corpo das Telas com Rolagem Suave */}
        <main className="flex-1 overflow-y-auto pt-4 pb-24" style={{ scrollbarWidth: "none" }}>
          
          {/* Tela de Loading Absoluta cobrindo o container */}
          {isSearching && (
            <LoadingScreen
              symptom={searchSymptom}
              onCancel={handleCancelSearch}
              onSuccess={handleSearchSuccess}
            />
          )}

          {/* Tela de Localização e Pagamento */}
          {isLocating && (
            <LocationScreen
              symptom={searchSymptom}
              onCancel={handleCancelLocation}
              onPaymentSuccess={handlePaymentStart}
            />
          )}

          {/* Tela de Pagamento do Paciente */}
          {isPaying && (
            <PaymentScreen
              therapistName="Dra. Ana Ribeiro"
              specialty="Ortopedia & Esportivo"
              price={180}
              onBack={handleBackToLocation}
              onConfirmPayment={handleConfirmPayment}
            />
          )}

          {activeTab === "inicio" && (
            <HomeScreen
              sessionsDone={8}
              sessionsTotal={12}
              exercises={exercises}
              appointments={appointments}
              onNavigate={setActiveTab}
              onToggleExercise={handleToggleExercise}
            />
          )}

          {activeTab === "buscar" && (
            <SearchScreen onSearch={handleStartSearch} />
          )}

          {activeTab === "agenda" && (
            <AgendaScreen
              appointments={appointments}
              onCancelAppointment={handleCancelAppointment}
            />
          )}

          {activeTab === "perfil" && (
            <div className="flex items-center justify-center h-64 text-slate-450 font-bold text-sm">
              Tela Perfil — em breve
            </div>
          )}
        </main>

        {/* Barra de Navegação Inferior Responsiva */}
        <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-100 shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
          <div
            className="mx-auto max-w-lg flex items-center justify-around px-2 pb-safe pt-2"
            style={{ paddingBottom: "max(8px, env(safe-area-inset-bottom))" }}
          >
            {[
              { key: "inicio" as Tab, label: "Início",  Icon: IconHome     },
              { key: "buscar" as Tab, label: "Buscar",  Icon: IconSearch   },
              { key: "agenda" as Tab, label: "Agenda",  Icon: IconCalendar },
              { key: "perfil" as Tab, label: "Perfil",  Icon: IconPerson   },
            ].map(({ key, label, Icon }) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`flex flex-col items-center gap-1 px-5 py-2 rounded-xl transition-colors duration-150 min-w-[64px] ${
                    isActive ? "text-[#0D7A5A]" : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  <Icon active={isActive} />
                  <span className={`text-[11px] ${isActive ? "font-bold" : "font-medium"}`}>{label}</span>
                </button>
              );
            })}
          </div>
        </nav>

      </div>
    </div>
  );
}
