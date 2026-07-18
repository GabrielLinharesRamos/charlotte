"use client";

/* ─── /agenda — Tela de Agenda ───────────────────────────────────────────────
   Lê appointments do AppContext. Sem estado local.
──────────────────────────────────────────────────────────────────────────── */

import AgendaScreen from "../../../components/AgendaScreen";
import { useAppContext } from "../_context/AppContext";

export default function AgendaPage() {
  const { appointments, cancelAppointment } = useAppContext();

  return (
    <AgendaScreen
      appointments={appointments}
      onCancelAppointment={cancelAppointment}
    />
  );
}
