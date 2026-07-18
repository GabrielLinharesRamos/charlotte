"use client";

/* ─── /inicio — Tela Principal ───────────────────────────────────────────────
   Zero lógica de orquestração aqui. Estado vem do AppContext.
──────────────────────────────────────────────────────────────────────────── */

import HomeScreen from "../../../components/HomeScreen";
import { useAppContext } from "../_context/AppContext";
import { useRouter } from "next/navigation";

export default function InicioPage() {
  const { exercises, appointments, toggleExercise } = useAppContext();
  const router = useRouter();

  return (
    <HomeScreen
      sessionsDone={8}
      sessionsTotal={12}
      exercises={exercises}
      appointments={appointments}
      onNavigate={(tab) => router.push(`/${tab === "inicio" ? "inicio" : tab}`)}
      onToggleExercise={toggleExercise}
    />
  );
}
