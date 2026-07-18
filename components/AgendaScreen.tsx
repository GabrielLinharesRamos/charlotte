"use client";

import React from "react";

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

export default function AgendaScreen({ appointments, onCancelAppointment }: AgendaScreenProps) {
  return (
    <div className="flex flex-col gap-4 pb-4">
      {/* Header Agenda */}
      <div className="px-5 pt-3 pb-1">
        <p className="text-[10px] uppercase tracking-wider font-extrabold text-slate-400">Seus Compromissos</p>
        <h1 className="text-2xl font-black text-slate-800 tracking-tight mt-0.5 font-sans">Minha Agenda</h1>
      </div>

      {/* Lista de Consultas Agendadas */}
      <div className="mx-4 space-y-3">
        {appointments.map((ap) => (
          <div
            key={ap.id}
            className="bg-white rounded-3xl p-5 shadow-xs border border-slate-100 flex flex-col gap-4 transition-all"
          >
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-lg border border-teal-100/60">
                  Confirmada
                </span>
                <h3 className="text-sm font-black text-slate-800 mt-3">{ap.therapistName}</h3>
                <p className="text-xs text-slate-400 mt-0.5">{ap.specialty}</p>
              </div>

              {/* Data e Hora */}
              <div className="text-right">
                <p className="text-sm font-black text-slate-850">{ap.day}</p>
                <p className="text-[11px] text-slate-400 mt-0.5 font-bold">{ap.time}</p>
              </div>
            </div>

            <div className="h-px bg-slate-100/80" />

            {/* Ações e Valor */}
            <div className="flex justify-between items-center pt-0.5">
              <span className="text-xs font-black text-slate-700">Valor Pago: <span className="text-[#0D7A5A]">R$ {ap.price},00</span></span>
              
              <button
                onClick={() => {
                  if (window.confirm("Tem certeza que deseja desmarcar esta consulta?")) {
                    onCancelAppointment(ap.id);
                  }
                }}
                className="text-xs font-bold text-red-500 hover:text-red-700 transition-colors cursor-pointer py-1 px-2"
              >
                Desmarcar Consulta
              </button>
            </div>
          </div>
        ))}

        {appointments.length === 0 && (
          <div className="py-16 text-center text-slate-450 text-sm font-medium">
            Você não tem nenhuma consulta agendada no momento.
          </div>
        )}
      </div>
    </div>
  );
}
