"use client";

/* ─── AppContext — Estado Compartilhado do Grupo (nathanael) ──────────────────
   Wrappado no (nathanael)/layout.tsx.
   Compartilha exercises e appointments entre as rotas /inicio, /buscar, /agenda.
   Outros Route Groups devem criar o próprio contexto.
──────────────────────────────────────────────────────────────────────────── */

import React, {
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import type { Appointment, ExerciseItem } from "../../../lib/types";

/* ─── Constantes Iniciais ────────────────────────────────────────────────── */

const INITIAL_EXERCISES: ExerciseItem[] = [
  { id: 1, emoji: "🧘", name: "Alongamento cervical",   duration: "3x · 30 seg", done: true  },
  { id: 2, emoji: "💪", name: "Fortalecimento do core", duration: "3x · 15 rep", done: true  },
  { id: 3, emoji: "🔄", name: "Mobilização escapular",  duration: "2x · 12 rep", done: false },
  { id: 4, emoji: "🏋️", name: "Agachamento assistido",  duration: "3x · 10 rep", done: false },
];

/* ─── Tipos do Contexto ──────────────────────────────────────────────────── */

interface AppContextValue {
  exercises: ExerciseItem[];
  appointments: Appointment[];
  toggleExercise: (id: number) => void;
  addAppointment: (appointment: Appointment) => void;
  cancelAppointment: (id: number) => void;
}

/* ─── Criação do Contexto ────────────────────────────────────────────────── */

const AppContext = createContext<AppContextValue | null>(null);

/* ─── Hook de Uso ────────────────────────────────────────────────────────── */

export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error("useAppContext must be used inside <AppProvider>");
  }
  return ctx;
}

/* ─── Provider ───────────────────────────────────────────────────────────── */

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [exercises, setExercises] = useState<ExerciseItem[]>(INITIAL_EXERCISES);
  const [appointments, setAppointments] = useState<Appointment[]>([]);

  const toggleExercise = useCallback((id: number) => {
    setExercises((prev) =>
      prev.map((ex) => (ex.id === id ? { ...ex, done: !ex.done } : ex))
    );
  }, []);

  const addAppointment = useCallback((appointment: Appointment) => {
    setAppointments((prev) => [appointment, ...prev]);
  }, []);

  const cancelAppointment = useCallback((id: number) => {
    setAppointments((prev) => prev.filter((ap) => ap.id !== id));
  }, []);

  return (
    <AppContext.Provider
      value={{ exercises, appointments, toggleExercise, addAppointment, cancelAppointment }}
    >
      {children}
    </AppContext.Provider>
  );
}
